import * as React from 'react';
import classNames from "classnames/bind";

import styles from './BestSeller.module.scss';
import MenuList from '../../layouts/components/MenuList/MenuList';
import Title from '../../components/Title';

const cx = classNames.bind(styles)

const BestSeller: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu-list')}>
                <MenuList />
            </div>

            <div className={cx('special-promotion')}>
                <Title content='BESTSELLER'/>
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

export default BestSeller;
