import * as React from 'react';
import { useState, useEffect } from 'react';
import classNames from "classnames/bind";

import styles from './BestSeller.module.scss';
import MenuList from '../../layouts/components/MenuList/MenuList';
import Title from '../../components/Title';
import Product from '../../components/Product';

const cx = classNames.bind(styles)

const BestSeller: React.FC = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch(`${process.env.REACT_APP_SERVER_BASE_URL}category/63d895fd9c55b5009153c269`)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.products);
          console.log(data.products)
        });
    }, []);
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu-list')}>
                <MenuList />
            </div>

            <div className={cx('special-promotion')}>
                <Title content='BESTSELLER'/>
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
        </div>
    )
}

export default BestSeller;
