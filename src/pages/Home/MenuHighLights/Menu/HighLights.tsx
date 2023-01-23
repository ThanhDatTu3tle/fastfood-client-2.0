import classNames from "classnames/bind";

import styles from './HighLights.module.scss';

const cx = classNames.bind(styles)

const HighLights: React.FC<any> = ({ children }) => {
    return (
        <div className={cx('wrapper')}> 
            {children}
        </div>
    )
}

export default HighLights;
