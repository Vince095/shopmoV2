import React, { Component } from 'react';
import Link from 'next/link';
import Protected from '~/components/middleware/Protected';
import { useSelector } from 'react-redux';
import { baseUrl } from '~/repositories/Repository';

const Addresses = ()=>  {
   
        const accountLinks = [
            {
                text: 'Account Information',
                url: '/account/user-information',
                icon: 'icon-user',
            },
            {
                text: 'Notifications',
                url: '/account/notifications',
                icon: 'icon-alarm-ringing',
            },
            {
                text: 'Invoices',
                url: '/account/invoices',
                icon: 'icon-papers',
            },
            {
                text: 'Address',
                url: '/account/addresses',
                icon: 'icon-map-marker',
                active: true,
            },
            {
                text: 'Recent Viewed Product',
                url: '/account/recent-viewed-product',
                icon: 'icon-store',
            },
            {
                text: 'Wishlist',
                url: '/account/wishlist',
                icon: 'icon-heart',
            },
        ];
        
        const selectUser =  useSelector(state => state.auth.user.data.user) ;
        const check = localStorage.getItem('user')
        const user = selectUser ? selectUser : check;
        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-section__left">
                                <aside className="ps-widget--account-dashboard">
                                    <div className="ps-widget__header">
                                        <img src={`${baseUrl}${user.avatar.url}`} />
                                        <figure>
                                            <figcaption> {user.username}</figcaption>
                                            <p>{user.email}</p>
                                        </figure>
                                    </div>
                                    <div className="ps-widget__content">
                                        <ul>
                                            {accountLinks.map(link => (
                                                <li
                                                    key={link.text}
                                                    className={
                                                        link.active
                                                            ? 'active'
                                                            : ''
                                                    }>
                                                    <Link href={link.url}>
                                                        <a>
                                                            <i
                                                                className={
                                                                    link.icon
                                                                }></i>
                                                            {link.text}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <Link href="/account/my-account">
                                                    <a>
                                                        <i className="icon-power-switch"></i>
                                                        Logout
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-section--account-setting">
                                <div className="ps-section__content">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <figure className="ps-block--address">
                                                <figcaption>
                                                    Billing address
                                                </figcaption>
                                                <div className="ps-block__content">
                                                    <p>
                                                        You Have Not Set Up This
                                                        Type Of Address Yet.
                                                    </p>
                                                    <Link href="/account/edit-address">
                                                        <a>Edit</a>
                                                    </Link>
                                                </div>
                                            </figure>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <figure className="ps-block--address">
                                                <figcaption>
                                                    Shipping address
                                                </figcaption>
                                                <div className="ps-block__content">
                                                    <p>
                                                        You Have Not Set Up This
                                                        Type Of Address Yet.
                                                    </p>
                                                    <Link href="/account/edit-address">
                                                        <a>Edit</a>
                                                    </Link>
                                                </div>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default Protected(Addresses);
