import React from 'react';
import { Progress } from 'antd';
import Link from 'next/link';
import { formatCurrency } from '~/utilities/product-helper';
import Rating from '~/components/elements/Rating';
import CountDown from '~/components/elements/CountDown';
import ThumbnailWithBadge from '~/components/elements/detail/thumbnail/ThumbnailWithBadge';
import useProduct from '~/hooks/useProduct';
import currency from '~/utilities/currency-helper';

const ProductDealHot = ({ product }) => {
    const { thumbnailImage, price, badge } = useProduct();
    const symbol = currency().symbol
    const exRate = currency().exRate

    return (
        <div className="ps-product--detail ps-product--hot-deal">
            <div className="ps-product__header">
                <ThumbnailWithBadge product={product} />
                <div className="ps-product__info">
                    <h5>Investor</h5>
                    <h3 className="ps-product__name">
                        <Link
                            href="/product/[pid]"
                            as={`/product/${product.id}`}>
                            <a>{product.title}</a>
                        </Link>
                    </h3>

                    <div className="ps-product__meta">
                        {product.is_sale === true ? (
                            <h4 className="ps-product__price sale">
                                <del className="mr-2">
                                    {price(product.sale_price)}
                                </del>
                                {symbol}{(formatCurrency(product.price) * exRate).toFixed(2)}
                            </h4>
                        ) : (
                            <h4 className="ps-product__price">
                                {symbol}{(formatCurrency(product.price) * exRate).toFixed(2)}
                            </h4>
                        )}
                        <div className="ps-product__rating">
                            <Rating review={product.review}/>
                            <span>({product.review} review)</span>
                        </div>
                        <div className="ps-product__specification">
                            <p>
                                Status:
                                <strong className="in-stock">In Stock</strong>
                            </p>
                        </div>
                    </div>
                    <div className="ps-product__expires">
                        <p>Expires In</p>
                        <CountDown
                            timeTillDate="12 31 2021, 6:00 am"
                            timeFormat="MM DD YYYY, h:mm a"
                        />
                    </div>
                    <div className="ps-product__processs-bar">
                        <Progress percent={60} showInfo={false} />
                        <p>
                            <strong>4/79</strong> Sold
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDealHot;
