import { NavLink } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './HighLights.module.scss';

const cx = classNames.bind(styles)

const Birthday: React.FC<any> = ({ title, to, icon }) => {
    return (
        <NavLink className={(nav) => cx('menu-item-birthday', { active: nav.isActive })} to={to}>
            <div className={cx('hover-birthday')}>
                {title}
            </div>
        </NavLink>
    )
}

export default Birthday;
