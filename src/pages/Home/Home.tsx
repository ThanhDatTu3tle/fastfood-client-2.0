import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Home.module.scss';
import Image from '../../components/Image';
import HighLights from './MenuHighLights/MenuHighLights';

const cx = classNames.bind(styles)

const Home: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-highlight')}>
                <HighLights />
            </div>

            <div className={cx('special-promotion')}>
                SPECIAL PROMOTION
            </div>
        </div>
    )
}

export default Home;
