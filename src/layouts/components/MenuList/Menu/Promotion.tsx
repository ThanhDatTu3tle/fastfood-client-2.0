import { NavLink } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './List.module.scss';
import Image from '../../../../components/Image';

const cx = classNames.bind(styles)

const Promotion: React.FC<any> = ({ title, to, icon }) => {
    return (
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            <div className={cx('hover')}>
                <Image src='https://www.lotteria.vn/media/catalog/tmp/category/Promotion-01_2.jpg'/>
            </div>
            {title}
        </NavLink>
    )
}

export default Promotion;
