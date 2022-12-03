import React, { useState, useEffect } from 'react';
import { Radio } from 'antd';
import { useRouter } from 'next/router';
import PaystackPop from '@paystack/inline-js'
import { calculateAmount } from '~/utilities/ecomerce-helpers';
import useEcomerce from '~/hooks/useEcomerce';
import { connect } from 'react-redux';
import currency from '~/utilities/currency-helper';

const ModulePaymentMethods = ({ecomerce}) => {
    const Router = useRouter();
    const [method, setMethod] = useState(1);
    const { products, getProducts } = useEcomerce();
    const userFound = localStorage.getItem('user'); 
    const user = JSON.parse(userFound).data.user;
    const exRate = currency().exRate;
    const shipping = currency().shipping


    useEffect(() => {
        if (ecomerce.cartItems) {
            getProducts(ecomerce.cartItems, 'cart');
        }
    }, [ecomerce]);

    function handleChangeMethod(e) {
        setMethod(e.target.value); //e.target.value
    }
    

    const payWithPaystack = (e)=>{
        e.preventDefault();
        const paystack = new PaystackPop()

        let email = user.email
        let firstname = user.username
        let amount = (calculateAmount(products)*exRate + shipping) * 100




        paystack.newTransaction({
            key: "pk_test_2800bd340ce53a48fc899c22872570408eff55da",
            amount: amount,
            email,
            firstname,
            onSuccess(transaction){
                let message = `Payment complete! Refrence ${transaction.refrence}`
                Router.push('/account/payment-success');
                alert(message)
            }


        }) 
    }

    function handleSubmit(e) {
        e.preventDefault();
        Router.push('/account/payment-success');
    }

    return (
        <>
            <h4>Payment Methods</h4>
            <div className="ps-block--payment-method">
                <div className="ps-block__header">
                    <Radio.Group
                        onChange={(e) => handleChangeMethod(e)}
                        value={method}>
                        <Radio value={1}>Visa / Master Card</Radio>
                        <Radio value={2}>Paypal</Radio>
                        <Radio value={3}>Paystack</Radio>
                    </Radio.Group>
                </div>
                <div className="ps-block__content">
                    {method === 1 ? (
                        <div className="ps-block__tab">
                            <div className="form-group">
                                <label>Card Number</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Card Holders</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-4">
                                    <div className="form-group">
                                        <label>Expiration Date (MM/YY)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="01/21"
                                        />
                                    </div>
                                </div>
                                <div className=" col-sm-4 col-4">
                                    <div className="form-group">
                                        <label>CVV</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button
                                    className="ps-btn ps-btn--fullwidth"
                                    onClick={(e) => handleSubmit(e)}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    ) : method === 2 ?(
                        <div className="ps-block__tab">
                            <a
                                className="ps-btn"
                                href="https://www.paypal.com/"
                                target="_blank">
                                Process with Paypal
                            </a>
                        </div>
                    ):(
                        <div className="ps-block__tab ps-btn" type="submit" onClick={ payWithPaystack }>
                        
                            Process with Paystack
                       
                    </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default connect((state) => state)(ModulePaymentMethods);
