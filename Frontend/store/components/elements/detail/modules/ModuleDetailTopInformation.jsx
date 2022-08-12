import React from 'react';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';
import currency from '~/utilities/currency-helper';

const ModuleDetailTopInformation = ({ product }) => {
    // Views
    let priceView;
    const symbol = currency().symbol;
    const exRate = currency().exRate;

    if (product.is_sale) {
        priceView = (
            <h4 className="ps-product__price sale">
              {product.sale_price &&  <del className="mr-2">{symbol}{(product.price*exRate).toFixed(2)}</del>}
              {symbol}{product.sale_price?(product.sale_price*exRate).toFixed(2): (product.price*exRate).toFixed(2) }
            </h4>
        );
    } else {
        priceView = <h4 className="ps-product__price">{symbol}{product.sale_price?(product.sale_price*exRate).toFixed(2): (product.price*exRate).toFixed(2) }</h4>;
    }
    return (
        <header>
            <h1>{product.title}</h1>
            <div className="ps-product__meta">
                <p>
                    Brand:
                    <Link href={`/store/${product.vendor}`}>
                        <a className="ml-2 text-capitalize">{product.vendor}</a>
                    </Link>
                </p>
                <div className="ps-product__rating">
                    <Rating review={product.review} />
                    <span>({product.review} rating)</span>
                </div>
            </div>
            {priceView}
        </header>
    );
};

export default ModuleDetailTopInformation;
