import { useState } from "react";
import classNames from "classnames/bind";
import Skeleton from 'react-loading-skeleton';

import styles from './Product.module.scss';
import Image from "../Image";
import Button from "../Button";

const cx = classNames.bind(styles)

const Product: React.FC<any> = ({ data }) => {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Image src={data.image || <Skeleton height={300} duration={5}/>}/>
                <h3>
                    <a title="Combo Sum Vầy 1" href="/category/product">{data.name || <Skeleton count={1} duration={5}/>}</a>
                </h3>
                <div className={cx('descriptions')}>
                    {data.description.map((content: string) => (
                        <div className={cx('description')}>{content || <Skeleton count={1} duration={5}/>}</div>
                    ))}
                </div>
                <div className={cx('product-price')}>
                    {data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ
                </div>
                <Button primary>Add to cart</Button>
            </div>
        </div>
    )
}

export default Product;
