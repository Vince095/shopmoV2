import React from 'react';
import LazyLoad from 'react-lazyload';
import { baseUrl } from '~/repositories/Repository';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import currency from './currency-helper';

export function formatCurrency(num) {
    if (num !== undefined) {
        return parseFloat(num)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
    }
}

export function getColletionBySlug(collections, slug) {
    if (collections.length > 0) {
        const result = collections.find(
            (item) => item.slug === slug.toString()
        );
        if (result !== undefined) {
            return result.products;
        } else {
            return [];
        }
    } else {
        return [];
    }
}

export function getItemBySlug(banners, slug) {
    if (banners.length > 0) {
        const banner = banners.find((item) => item.slug === slug.toString());
        if (banner !== undefined) {
            return banner;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

export function convertSlugsQueryString(payload) {
    let query = '';
    if (payload.length > 0) {
        payload.forEach((item) => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
    }
    return query;
}

export function StrapiProductPriceExpanded(product) {
    let view;
    const exRate = currency().exRate
    const symbol = currency().symbol
    //const symbol = useSelector(state => state.setting.currency.symbol)
    if (product.is_sale === true) {
        view = (
            <p className="ps-product__price sale">
                {symbol}{(formatCurrency(product.price) * exRate).toFixed(2)}
                <del className="ml-2">
                {symbol}{(formatCurrency(product.sale_price) *exRate).toFixed(2)}
                </del>
                <small>{((((product.price -product.sale_price)/product.price).toFixed(2)))*100}% off</small>
            </p>
        );
    } else {
        view = (
            <p className="ps-product__price">
                {symbol}{(formatCurrency(product.price)* exRate).toFixed(2)}
            </p>
        );
    }
    return view;
}

export function StrapiProductThumbnail(product) {
    let view;

    if (product.thumbnail) {
        view = (
            <Link href="/product/[pid]" as={`/product/${product.id}`}>
                <a>
                    <LazyLoad>
                        <img
                            src={`${baseUrl}${product.thumbnail.url}`}
                            alt={product.title}
                        />
                    </LazyLoad>
                </a>
            </Link>
        );
    } else {
        view = (
            <Link href="/product/[pid]" as={`/product/${product.id}`}>
                <a>
                    <LazyLoad>
                        <img src="/static/img/not-found.jpg" alt="shopmo" />
                    </LazyLoad>
                </a>
            </Link>
        );
    }

    return view;
}
