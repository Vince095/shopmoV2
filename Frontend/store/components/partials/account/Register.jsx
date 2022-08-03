import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { login, loginFailed, loginSuccess } from '../../../store/auth/action';

import { Form, Input, notification, Upload } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { useForm } from 'antd/lib/form/Form';
import AuthRepository  from '~/repositories/AuthRepository';

const Register = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [form] = useForm()
    const dispatch = useDispatch()

    const [avatar, setAvatar] = useState('/static/img/users/1.png')
    const [imageFile, setFiles] = useState('')

    const { username, email, password } = user;


    const handleRegisterSubmit = async e => {
       // e.preventDefault();

        const formData = new FormData();
        const formData1 = new FormData();
        
        formData.set('username', username);
        formData.set('email', email);
        formData.set('password', password);
        formData1.append('files', imageFile)
       
                
        let uploadImage = await AuthRepository.uploadImage(formData1)
        let uploadRespose = JSON.parse(uploadImage)
    
        let obj = {...user,'avatar':{'id': uploadRespose.data[0].id}}
      
        console.log( obj)

        let response = await AuthRepository.registerUser(obj)
        let data = JSON.parse(response)

        if (data.message ){
            console.log(data)
            notification.open({
                message: data.name,
                description: data.message ,
                duration: 5000,})
        }else{
              Router.push('/')
              localStorage.setItem('user',data)
              dispatch(loginSuccess(data))
            
        }
           
    }
        
   const onChange = e =>{
      console.log(e.target.name)
      
        if(e.target.name === 'avatar'){
            const img = e.target.files[0]
            setFiles(img)
            

            const reader = new FileReader()
            reader.readAsDataURL(img)
            console.log(reader)
            reader.onload=()=>{
                
                if(reader.readyState === 2){
                    setAvatar(reader.result)
                    console.log('loaded')
                }
            }
        }
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(avatar)
    }

        return (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        
                        className="ps-form--account"
                        onFinish={handleRegisterSubmit}
                        encType="multipart/form-data">
                        <ul className="ps-tab-list">
                            <li>
                                <Link href="/account/login">
                                    <a>Login</a>
                                </Link>
                            </li>
                            <li className="active">
                                <Link href="/account/register">
                                    <a>Register</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="register">
                            <div className="ps-form__content">
                                <h5>Register An Account</h5>
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
                                            name="username"
                                            className="form-control"
                                            type="text"
                                            placeholder="Username"
                                            onChange={onChange}
                                            required
                                        />
                                    </Form.Item>
                                    <Form.Item
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your email!',
                                            },
                                        ]}>
                                        <Input  
                                            name="email"
                                            className="form-control"
                                            type="email"
                                            placeholder="Email address"
                                            onChange={onChange}
                                            required
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your password!',
                                            },
                                        ]}>
                                        <Input
                                            name="password"
                                            className="form-control"
                                            type="password"
                                            placeholder="Password..."
                                            onChange={onChange}
                                            required
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        
                                        rules={[
                                            {
                                                required: false,
                                                message:
                                                    'Please input your password!',
                                            },
                                        ]}>
                                        <Input
                                            name="avatar"
                                            className="form-control ps-btn ps-btn--fullwidth"
                                            type="file"
                                            accept="images/*"
                                            placeholder="input avatar"
                                            onChange={onChange}
                                        />
                                        <figure className='ps-widget__header'>
                                        <img
                                            src={avatar}
                                            className='rounded-circle'
                                            alt='Avatar Preview'
                                            width={50} height={50}
                                        />
                                       
                                    </figure>

                                        <label>
                                            choose avatar
                                        </label>
                                    </Form.Item>
                                </div>
                                <div className="form-group submit">
                                    <button
                                        type="submit"
                                        className="ps-btn ps-btn--fullwidth">
                                        Register
                                    </button>
                                </div>
                            </div>
                            <div className="ps-form__footer">
                                <p>Connect with:</p>
                                <ul className="ps-list--social">
                                    <li>
                                        <a className="facebook" href="#">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="instagram" href="#">
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        );
}
    
const mapStateToProps = state => {
    return state.auth;
};
export default connect(mapStateToProps)(Register);
