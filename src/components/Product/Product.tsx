import classNames from "classnames/bind";

import styles from './Product.module.scss';
import Image from "../Image";
import Button from "../Button";

const cx = classNames.bind(styles)

const Product: React.FC<any> = () => {
    return (
        <div className={cx('wrapper')}>
            <Image src='https://api2.lotteria.vn/media/catalog/product/cache/2e1628f5f7131a9eb328ec1fb2c22fd3/p/r/product_tet_sum_vay-01.png'/>
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
