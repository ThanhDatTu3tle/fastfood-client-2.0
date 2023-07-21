import * as React from 'react';
import { useState, useEffect } from 'react';
import classNames from "classnames/bind";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './Promotion.module.scss';
import MenuList from '../../layouts/components/MenuList/MenuList';
import Product from '../../components/Product';
import Title from '../../components/Title';

const cx = classNames.bind(styles)

const Promotion: React.FC = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch(`${process.env.REACT_APP_SERVER_BASE_URL}category/63d133ab7abbc1799c72eeb4`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.products);
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu-list')}>
                <MenuList />
            </div>

            <div className={cx('special-promotion')}>
                <Title content='PROMOTION'/>
                <div className={cx('content')}>
                    {products !== null ? (
                        <>
                            <div className={cx('products')}>
                                {products.map((data) => (
                                    <Product key={data} data={data} /> 
                                )) || <Skeleton height={300} duration={5} baseColor="#202020" highlightColor="#444" containerClassName="flex-1"/>}
                            </div>
                        </>
                        ) : (
                        <>
                            <Skeleton height={300} duration={5} baseColor="#202020" highlightColor="#444" containerClassName="flex-1"/>
                        </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Promotion;
