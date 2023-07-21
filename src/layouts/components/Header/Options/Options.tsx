import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import classNames from "classnames/bind";
import Backdrop from '@mui/material/Backdrop';
import 'tippy.js/dist/tippy.css';

import styles from './Options.module.scss';
import axios from '../../../../api/axios';
import Image from '../../../../components/Image';
import Button from '../../../../components/Button';

const cx = classNames.bind(styles)

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PHONE_REGEX = /^\+[1-9]\d{1,14}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = '/register';

const Options: React.FC = () => {

    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleSignIn = () => {
        setOpen(true);
    };

    const phoneNumberRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLInputElement>(null);

    const [phoneNumber, setPhoneNumber] = useState('');
    const [validPhoneNumber, setValidPhoneNumber] = useState(false);
    const [phoneNumberFocus, setPhoneNumberFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        phoneNumberRef.current.focus();
    }, [])

    useEffect(() => {
        setValidPhoneNumber(PHONE_REGEX.test(phoneNumber));
    }, [phoneNumber])

    useEffect(() => {
        setErrMsg('');
    }, [phoneNumber, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = PHONE_REGEX.test(phoneNumber);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ phoneNumber, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setPhoneNumber('');
            setPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Phone number Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('btn-cricle')}>
                <Image
                    className={cx('map-icon')}
                    src="https://www.lotteria.vn/grs-static/images/icon-pos-2.svg"
                    alt="map-icon"
                />
            </div>

            <div className={cx('btn-cricle')} onClick={handleSignIn}>
                <Image
                    className={cx('account-icon')}
                    src="https://www.lotteria.vn/grs-static/images/icon-myaccount.svg"
                    alt="account-icon"
                />
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <div className={cx('login-form')}>
                    <form className={cx('form')} onSubmit={handleSubmit}>
                        <p style={{fontSize: '20px', fontWeight: '600', marginBottom: '15px'}}>Đăng nhập hoặc tạo tài khoản</p>
                        <p style={{fontSize: '16px', fontWeight: '500', marginBottom: '5px'}}>Your phonenumber</p>
                        <input 
                            id='phonenumber'
                            type="text" 
                            ref={phoneNumberRef}
                            value={phoneNumber}
                            required
                            aria-invalid={validPhoneNumber ? "false" : "true"}
                            aria-describedby="uidnote"
                            autoComplete="off"
                            className={cx('input-textfield')} 
                            placeholder='Enter your phone number' 
                            name='phonenumber'
                            onFocus={() => setPhoneNumberFocus(true)}
                            onBlur={() => setPhoneNumberFocus(false)}
                            onChange={(e) => setPhoneNumber(e.target.value)}                         
                        />
                        {/* <p style={{ color: '#ff5b6a', marginTop: '-5px', fontSize: '14px', fontWeight: '500'}}>
                            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                <div>{formik.errors.phoneNumber}</div>
                            ) : null}
                        </p> */}
                        <Button primary>Continue</Button>
                        <br />
                        <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                            <Button style={{color: '#ff5b6a'}}>
                                Checkout as guest
                            </Button>
                            <span className={cx('icon-info')}></span>
                        </div>       
                        <div className={cx('login-others')}>
                            <p className={cx('txt')}>
                                <span>hoặc Đăng nhập bằng</span>
                            </p>
                        </div>
                        <div className={cx('others-options')}>
                            <button className={cx('btn-fb')}>FACEBOOK</button>
                            <button className={cx('btn-gg')}>GOOGLE</button>
                        </div>
                    </form>                   
                    <Image
                        className={cx('right')}
                        src="https://www.lotteria.vn/grs-static/images/login-banner.jpg"
                    />
                </div>
                <button type='button' className={cx('close-btn')} onClick={handleClose}>×</button>
            </Backdrop>

            <div className={cx('btn-cricle')}>
                <Image
                    className={cx('notification-icon')}
                    src="https://www.lotteria.vn/grs-static/images/icon-notification.svg"
                    alt="notification-icon"
                />
            </div>

            <div className={cx('btn-cricle')}>
                <Image
                    className={cx('cart-icon')}
                    src="https://www.lotteria.vn/grs-static/images/icon-cart.svg"
                    alt="cart-icon"
                />
            </div>
        </div>
    )
}

export default Options;
