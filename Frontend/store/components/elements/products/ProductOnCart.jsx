import React from 'react';
import Link from 'next/link';
import useProduct from '~/hooks/useProduct';
import currency from '~/utilities/currency-helper';

const ProductOnCart = ({ product, children }) => {
    const { thumbnailImage, title } = useProduct();
    const symbol = currency().symbol;
    const exRate = currency().exRate;

    return (
        <div className="ps-product--cart-mobile">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    <a>{thumbnailImage(product)}</a>
                </Link>
            </div>
            <div className="ps-product__content">
                {title(product)}
                <p>
                    <small>
                        {symbol}{(product.price * exRate).toFixed(2)} x {product.quantity}
                    </small>
                </p>{' '}
                {children}
            </div>
        </div>
    );
};

export default ProductOnCart;
