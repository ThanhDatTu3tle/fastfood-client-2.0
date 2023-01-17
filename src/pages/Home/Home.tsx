import * as React from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Home.module.scss';

const cx = classNames.bind(styles)

const Home: React.FC = () => {
    return (
        <div>
            Home page
        </div>
    )
}

export default Home;
