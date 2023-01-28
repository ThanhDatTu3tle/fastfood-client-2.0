import classNames from "classnames/bind";

import styles from './List.module.scss';

const cx = classNames.bind(styles)

const List: React.FC<any> = ({ children }) => {
    return (
        <div className={cx('wrapper')}> 
            {children}
        </div>
    )
}

export default List;
