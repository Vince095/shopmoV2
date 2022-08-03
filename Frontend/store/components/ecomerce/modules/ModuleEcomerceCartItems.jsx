import React from 'react';
import { connect } from 'react-redux';
import useEcomerce from '~/hooks/useEcomerce';
import { Result } from 'antd';
import ProductCart from '~/components/elements/products/ProductCart';
import currency from '~/utilities/currency-helper';

const ModuleEcomerceCartItems = ({ ecomerce, cartItems }) => {
    const symbol = currency().symbol;
    const exRate = currency().exRate;
    const { increaseQty, decreaseQty, removeItem } = useEcomerce();

    function handleRemoveItem(e, productId) {
        e.preventDefault();
        removeItem({ id: productId }, ecomerce.cartItems, 'cart');
    }

    function handleIncreaseItemQty(e, productId) {
        e.preventDefault();
        increaseQty({ id: productId }, ecomerce.cartItems);
    }

    function handleDecreaseItemQty(e, productId) {
        e.preventDefault();
        decreaseQty({ id: productId }, ecomerce.cartItems);
    }

    // View
    let cartItemsViews;
    if (cartItems && cartItems.length > 0) {
        const items = cartItems.map((item) => (
            <tr key={item.id}>
                <td>
                    <ProductCart product={item} />
                </td>
                <td data-label="price" className="price">
                    {symbol}{item.price * exRate}
                </td>
                <td data-label="quantity">
                    <div className="form-group--number">
                        <button
                            className="up"
                            onClick={(e) => handleIncreaseItemQty(e, item.id)}>
                            +
                        </button>
                        <button
                            className="down"
                            onClick={(e) => handleDecreaseItemQty(e, item.id)}>
                            -
                        </button>
                        <input
                            className="form-control"
                            type="text"
                            placeholder={item.quantity}
                            disabled={true}
                        />
                    </div>
                </td>
                <td data-label="total">
                    <strong>{symbol}{((item.price * item.quantity)*exRate).toFixed(2)}</strong>
                </td>
                <td>
                    <a href="#" onClick={(e) => handleRemoveItem(e, item.id)}>
                        <i className="icon-cross"></i>
                    </a>
                </td>
            </tr>
        ));

        cartItemsViews = (
            <>
                <table className="table  ps-table--shopping-cart ps-table--responsive">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{items}</tbody>
                </table>
            </>
        );
    } else {
        cartItemsViews = (
            <Result status="warning" title="No product in cart." />
        );
    }
    return <>{cartItemsViews}</>;
};

export default connect((state) => state)(ModuleEcomerceCartItems);
