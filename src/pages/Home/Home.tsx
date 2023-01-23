import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Home.module.scss';
import config from '../../config';
import HighLights from './MenuHighLights/MenuHighLights';
import Title from '../../components/Title';

const cx = classNames.bind(styles)

const Home: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-highlight')}>
                <HighLights />
            </div>

            <div className={cx('special-promotion')}>
                <div className={cx('title')}>
                    <Title content='SPECIAL PROMOTION'/>

                    <div className={cx('see-all')}>
                        <Link to={config.routes.promotion}>
                            <button className={cx('btn-see-all')}>
                                See all →
                            </button>
                        </Link>                     
                    </div>
                </div>
                <div className={cx('content')}>

                </div>
            </div>
        </div>
    )
}

export default Home;
