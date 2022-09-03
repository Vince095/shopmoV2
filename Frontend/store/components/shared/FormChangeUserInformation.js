import React , {useState} from 'react';
import { DatePicker, Form, Input, Radio } from 'antd';
import useEcomerce from '~/hooks/useEcomerce';
import SubscribePopup from './SubscribePopup';
import { Cookies } from 'react-cookie';

const FormChangeUserInformation = () => {
    const userFound = localStorage.getItem('user'); 
    const user = JSON.parse(userFound).data.user;

    const [userInfo, setUserInfo] = useState({
        username: user.username,
        firstName: '',
        lastName: '',
        email:'',
        contact:'',
        address:'',
        city:'',
        country:''
    })
    const {saveShipping} = useEcomerce();
    

   
    
    const handleSubmit = e =>{
        e.preventDefault();
        saveShipping(userInfo)
        
        console.log(userInfo)
        
    }

    const onChange= (e)=>{
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
       
    
    }
    
    return (
        
        <form className="ps-form--account-setting" onSubmit={handleSubmit}>
            <div className="ps-form__header">
                <h3>Account Information</h3>
            </div>
            <div className="ps-form__content">
                <div className="form-group">
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message:
                                    'Please input your username!',
                            },
                        ]}>
                        <Input
                            className="form-control"
                            type="text"
                            name='username'
                            placeholder="Username or email address"
                            value={user.username}
                            onChange={onChange}
                        
                         />
                    </Form.Item>
                    
                    
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item 
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Please input your first name!',
                                },
                            ]}>
                                 <Input
                                className="form-control"
                                type="text"
                                placeholder="First name"
                                name='firstName'
                                onChange={onChange}
                                
                            />

                            </Form.Item>
                           
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                 rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please input your Last name',
                                    },
                                ]}>
                                    <Input
                                        className="form-control"
                                        type="text"
                                        placeholder="Last name"
                                        name='lastName'
                                        onChange={onChange}
                             
                                     />
                           </Form.Item>
                            
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                     rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your contact!',
                                        },
                                    ]}
                                    >
                                    <Input
                                    className="form-control"
                                    type="text"
                                    name='contact'
                                    placeholder="Phone Number"
                                    onChange={onChange}
                                
                            />
                          </Form.Item>
                            
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please input your email!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    name='email'
                                    placeholder="Email Address"
                                    value ={user.email}
                                    onChange={onChange}
                                    
                            />
                            </Form.Item>

                            
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please input your address!',
                                    },
                                ]}>
                           <Input
                                className="form-control"
                                type="text"
                                name='address'
                                placeholder="Address"
                                onChange={onChange}
                                
                            />
                            </Form.Item>
                           
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please input your city!',
                                    },
                                ]}>
                                <Input
                                    className="form-control"
                                    type="text"
                                    placeholder="City"
                                    name='city'
                                    onChange={onChange}
                                    
                            />
                            </Form.Item>
                            
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <Form.Item
                                 rules={[
                                    {
                                        required: true,
                                        message:
                                            'Please input your country!',
                                    },
                                ]}>
                           <Input
                                className="form-control"
                                type="text"
                                name="country"
                                placeholder="Country"
                                onChange={onChange}
                               
                            />
                            </Form.Item>
                          
                        </div>
                    </div>
                </div>

                <div className="form-group submit">
                    <button className="ps-btn" type='submit'>Update profile</button>
                </div>
            </div>
        </form>
    );
};

export default FormChangeUserInformation;
