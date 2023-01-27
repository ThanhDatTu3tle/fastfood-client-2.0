import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Home.module.scss';
import config from '../../config';
import HighLights from './MenuHighLights/MenuHighLights';
import Title from '../../components/Title';
import Product from '../../components/Product';

const cx = classNames.bind(styles)

const Home: React.FC<any> = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch(`${process.env.REACT_APP_SERVER_BASE_URL}product`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data);
        });
    }, []);

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
                    {products !== null ? (
                        <>
                            <div className={cx('products')}>
                                {products.map((data) => (
                                    <Product data={data} />
                                ))}
                            </div>
                        </>
                        ) : (
                        <></>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;
