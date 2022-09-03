import React, { useEffect } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import useEcomerce from '~/hooks/useEcomerce';
import { calculateAmount } from '~/utilities/ecomerce-helpers';
import currency from '~/utilities/currency-helper';

const ModulePaymentOrderSummary = ({ ecomerce, shipping }) => {
    const { products, getProducts } = useEcomerce();
    const symbol = currency().symbol;
    const exRate = currency().exRate;
    const shippingPrice = currency().shipping;

    useEffect(() => {
        if (ecomerce.cartItems) {
            getProducts(ecomerce.cartItems, 'cart');
        }
    }, [ecomerce]);

    // view
    let listItemsView, shippingView, totalView;
    let amount;
    if (products && products.length > 0) {
        amount = (calculateAmount(products) * exRate).toFixed(2);
        listItemsView = products.map((item) => (
            <Link href="/" key={item.id}>
                <a>
                    <strong>
                        {item.title}
                        <span>x{item.quantity}</span>
                    </strong>
                    <small>{symbol}{((item.quantity * item.price)* exRate).toFixed(2)}</small>
                </a>
            </Link>
        ));
    } else {
        listItemsView = <p>No Product.</p>;
    }
    if (shipping === true) {
        shippingView = (
            <figure>
                <figcaption>
                    <strong>Shipping Fee</strong>
                    <small>{symbol}{shippingPrice}</small>
                </figcaption>
            </figure>
        );
        totalView = (
            <figure className="ps-block__total">
                <h3>
                    Total
                    <strong>{symbol}{amount + shippingPrice}</strong>
                </h3>
            </figure>
        );
    } else {
        totalView = (
            <figure className="ps-block__total">
                <h3>
                    Total
                    <strong>{symbol}{parseInt(amount) + shippingPrice}.00</strong>
                </h3>
            </figure>
        );
    }
    return (
        <div className="ps-block--checkout-order">
            <div className="ps-block__content">
                <figure>
                    <figcaption>
                        <strong>Product</strong>
                        <strong>total</strong>
                    </figcaption>
                </figure>
                <figure className="ps-block__items">{listItemsView}</figure>
                <figure>
                    <figcaption>
                        <strong>Subtotal</strong>
                        <small>{symbol}{amount}</small>
                    </figcaption>
                </figure>
                {shippingView}
                {totalView}
            </div>
        </div>
    );
};
export default connect((state) => state)(ModulePaymentOrderSummary);
