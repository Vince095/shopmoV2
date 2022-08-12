import React from 'react';
import Link from 'next/link';

const WidgetSaleOnSite = () => {
    return (
        <aside className="widget widget_sell-on-site">
            <p>
                <i className="icon-store"></i> Sell on Shopmo?
                <Link href="/vendor/become-a-vendor">
                    <a> Register Now !</a>
                </Link>
            </p>
        </aside>
    );
};

export default WidgetSaleOnSite;
