import { useEffect } from "react";
import classNames from "classnames/bind";
import axios from 'axios';

import styles from './Product.module.scss';
import Image from "../Image";
import Button from "../Button";

const cx = classNames.bind(styles)

const Product: React.FC<any> = ({ data }) => {

    return (
        <div className={cx('wrapper')}>
            <Image src={data.image}/>
            <h3>
                <a title="Combo Sum Vầy 1" href="/category/product">Combo Sum Vầy 1</a>
            </h3>
            <span>02 Fried Chicken</span>
            <span>01 Shrim Burger</span>
            Price
            <Button primary>Add to cart</Button>
        </div>
    )
}

export default Product;
