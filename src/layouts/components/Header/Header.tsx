import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Header.module.scss';
import config from '../../../config';
import Titles from './MenuTitles/MenuTitles';
import Options from './Options';

const cx = classNames.bind(styles)

const Header: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home}>
                        LOGO
                    </Link>
                </div>
                <div className={cx('titles')}>
                    <Titles />
                </div>
                <div className={cx('options')}>
                    <Options />
                </div>
            </div>
        </div>
    )
}

export default Header;
