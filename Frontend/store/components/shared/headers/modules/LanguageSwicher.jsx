import React, {useState} from 'react';
import { notification } from 'antd';
import currency from '~/utilities/currency-helper';

const  LanguageSwicher = ()=> {
    const [country, setCountry] = useState('');

    const countryList = [
        {
            name: 'Lesotho',
            flag : '/static/img/flag/ls.svg'
        },
        {
            name: 'South Africa',
            flag : '/static/img/flag/za.svg'
        },
        {
            name: 'Nigeria',
            flag : '/static/img/flag/ng.svg'
        },

    ]
    
   const handleFeatureWillUpdate =(e) => {

        e.preventDefault();

        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }
        return (
            <div className="ps-dropdown language" >
                <a href="#" onClick={handleFeatureWillUpdate}
                >
                    <img src="/static/img/flag/ls.svg" alt="shopmo" />
                    Lesotho
                </a>
                <ul className="ps-dropdown-menu">
                    <li>
                        <a
                            href="#"
                            onClick={handleFeatureWillUpdate}>
                            <img src="/static/img/flag/ng.svg" alt="shopmo" />
                            Nigeria
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            onClick={handleFeatureWillUpdate}>
                            <img src="/static/img/flag/za.svg" alt="shopmo" />
                            South Africa
                        </a>
                    </li>
                </ul>
            </div>
        );
    }

export default LanguageSwicher;
