import React, { Component } from 'react';
import { notification } from 'antd';
import { connect } from 'react-redux';

import { changeCurrency } from '../../../../store/setting/action';
import currency from '~/utilities/currency-helper';

let symbol = currency.symbol;
let exRate = currency.exRate;
class CurrencyDropdown extends Component {
    constructor(props) {
        super(props);
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    handleChangeCurrency = (e, currency) => {
        e.preventDefault();
        this.props.dispatch(changeCurrency(currency));
    };

    render() {
        const { currency } = this.props;
        return (
            <div className="ps-dropdown">
                {currency ? (
                    <a href="/" onClick={e => e.preventDefault()}>
                        {currency.text}
                    </a>
                ) : (
                    ''
                )}

                <ul className="ps-dropdown-menu">
                    <li>
                        <a
                            href="/"
                            onClick={e =>
                                this.handleChangeCurrency(e, {
                                    symbol: '$',
                                    text: 'USD',
                                })
                            }>
                            USD
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            onClick={e =>
                                this.handleChangeCurrency(e, {
                                    symbol: symbol,
                                    text: 'EURO',
                                })
                            }>
                            EURO
                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            onClick={e =>
                                this.handleChangeCurrency(e, {
                                    symbol: '£',
                                    text: 'GBP',
                                })
                            }>
                            GBP
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return state.setting;
};

export default connect(mapStateToProps)(CurrencyDropdown);
