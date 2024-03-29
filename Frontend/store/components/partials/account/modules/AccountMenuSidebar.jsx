import React from 'react';
import Link from 'next/link';
import { baseUrl } from '~/repositories/Repository';

const userFound = localStorage.getItem('user');
const user = JSON.parse(userFound).data.user;

const AccountMenuSidebar = ({ data }) => (
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
                {data.map(link => (
                    <li key={link.text} className={link.active ? 'active' : ''}>
                        <Link href={link.url}>
                            <a>
                                <i className={link.icon}></i>
                                {link.text}
                            </a>
                        </Link>
                    </li>
                ))}
                <li>
                    <Link href="/account/my-account">
                        <a>Logout</a>
                    </Link>
                </li>
            </ul>
        </div>
    </aside>
);

export default AccountMenuSidebar;
