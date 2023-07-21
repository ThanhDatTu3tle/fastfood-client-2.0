import * as React from 'react';
import { useState, useEffect } from 'react';
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
        fetch(`${process.env.REACT_APP_SERVER_BASE_URL}category/63d133ab7abbc1799c72eeb4`)
          .then((response) => response.json())
          .then((data) => {
            setProducts(data.products);
            // console.log(data.products)
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
                                    <Product key={data} data={data} />
                                ))}
                            </div>
                        </>
                        ) : (
                        <></>
                        )
                    }
                </div>
            </div>

            <div className={cx('news')}>
                <div className={cx('title')}>
                    <Title content='NEWS'/>

                    <div className={cx('see-all')}>
                        <Link to={config.routes.promotion}>
                            <button className={cx('btn-see-all')}>
                                See all →
                            </button>
                        </Link>                     
                    </div>
                </div>
                {/* <div className={cx('content')}>
                    {products !== null ? (
                        <>
                            <div className={cx('products')}>
                                {products.map((data) => (
                                    <Product key={data} data={data} />
                                ))}
                            </div>
                        </>
                        ) : (
                        <></>
                        )
                    }
                </div> */}
            </div>
        </div>
    )
}

export default Home;
