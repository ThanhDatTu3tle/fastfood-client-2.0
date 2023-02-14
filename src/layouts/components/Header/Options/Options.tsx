import * as React from 'react';
import classNames from "classnames/bind";
import Backdrop from '@mui/material/Backdrop';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Options.module.scss';
import Image from '../../../../components/Image';

const cx = classNames.bind(styles)

const Options: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('btn-cricle')}>
                <Image
                    className={cx('map-icon')}
                    src="https://www.lotteria.vn/grs-static/images/icon-pos-2.svg"
                    alt="map-icon"
                />
            </div>

            <div className={cx('btn-cricle')}>
                <Image
                    className={cx('account-icon')}
                    src="https://www.lotteria.vn/grs-static/images/icon-myaccount.svg"
                    alt="account-icon"
                />
            </div>

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
