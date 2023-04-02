import React, { Component } from 'react';
import Link from 'next/link';
import { baseUrl } from '~/repositories/Repository';
import Protected from '~/components/middleware/Protected';

const MyAccount = ()=>{
    const selectUser =  useSelector(state => state.auth.user.data.user) ;
    const check = localStorage.getItem('user')
    const foundUser = JSON.parse(check)
    const user = selectUser ? selectUser : foundUser.data.user;
    
        return (
            
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <div className="ps-section__left">
                                <aside className="ps-widget--account-dashboard">
                                    <div className="ps-widget__header">
                                        <img src={`${baseUrl}${user.avatar.url}`} />
                                        <figure>
                                            <figcaption>{user.username}</figcaption>
                                            <p>{user.email}</p>
                                        </figure>
                                    </div>
                                    <div className="ps-widget__content">
                                        <ul>
                                            <li className="active">
                                                <Link href="/account/my-account">
                                                    <a>Dashboard</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/account/my-account">
                                                    <a>Orders</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/account/my-account">
                                                    <a>Addresses</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/account/my-account">
                                                    <a>Account Details</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/account/my-account">
                                                    <a>Logout</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="ps-page__content">
                                <div className="ps-page__dashboard">
                                    <p>
                                        {user.username} <strong>{user.email}</strong>!
                                    </p>
                                    <p>
                                        From your account dashboard you can view
                                        your{' '}
                                        <Link href="/account/orders">
                                            <a>recent orders</a>
                                        </Link>
                                        , manage your{' '}
                                        <Link href="/account/user-information">
                                            <a>
                                                shipping and billing addresses
                                            </a>
                                        </Link>
                                        , and{' '}
                                        <Link href="/account/user-information">
                                            <a>
                                                edit your password and account
                                                details
                                            </a>
                                        </Link>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
     }

export default Protected(MyAccount);
