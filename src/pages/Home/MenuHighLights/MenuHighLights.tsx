import config from "../../../config";
import classNames from "classnames/bind";

import styles from './MenuHighLights.module.scss';
import HighLights, { BestSeller, OrderNow, Birthday, Store } from '../MenuHighLights/Menu';

const cx = classNames.bind(styles)

const MenuHighLights: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <HighLights>
                <BestSeller title='BESTSELLER' to={config.routes.bestseller} icon={null}  />
                <OrderNow title='ORDER NOW' to={config.routes.ordernow} icon={null}  />
                <Birthday title='BIRTHDAY' to={config.routes.birthday} icon={null}  />
                <Store title='STORE' to={config.routes.store} icon={null}  />
            </HighLights>
        </div>
    )
}

export default MenuHighLights;
