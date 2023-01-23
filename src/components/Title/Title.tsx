import * as React from 'react';
import classNames from 'classnames/bind';

import styles from './Title.module.scss';

const cx = classNames.bind(styles)

const Title: React.FC<any> = ({ content, ...props }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('line-content')}>
                <div className={cx('line')}></div>
                <span className={cx('content')}>{content}</span>
            </div>
        </div>
    )
}

export default Title;
