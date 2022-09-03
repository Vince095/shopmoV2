import React, {useState} from 'react';
import { notification } from 'antd';
import currency from '~/utilities/currency-helper';

const  LanguageSwicher = ()=> {
    const [country, setCountry] = useState('');

    const countryList = [
        {
            id: 0,
            name: 'Lesotho',
            flag : '/static/img/flag/ls.svg'
        },
        {
            id: 1,
            name: 'South Africa',
            flag : '/static/img/flag/za.svg'
        },
        {
            id: 2,
            name: 'Nigeria',
            flag : '/static/img/flag/ng.svg'
        },

    ]
    
   const handleFeatureWillUpdate =(e) => {

        e.preventDefault();
        console.log(no)

        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }
        return (
            <div className="ps-dropdown language" >
                <a href="#" >
                    <img src={countryList[0].flag} alt="shopmo" />
                    {countryList[0].name}
                </a>
                <ul className="ps-dropdown-menu">
                   
                {countryList.map(country => (
                   <li>
                        <a   href="#" onClick={handleFeatureWillUpdate}>  
                            <img src={country.flag} alt="shopmo" />
                            {country.name}
                            
                        </a>
                    </li>
                       
                    ))} 
                    
                </ul>
            </div>
        );
    }

export default LanguageSwicher;
