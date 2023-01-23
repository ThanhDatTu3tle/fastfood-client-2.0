import config from "../../../config";
import classNames from "classnames/bind";

import styles from './MenuHighLights.module.scss';
import HighLights, { HighLightItem } from '../MenuHighLights/Menu';

const cx = classNames.bind(styles)

const MenuHighLights: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <HighLights>
                <HighLightItem title='BESTSELLER' to={config.routes.promotion} icon={null}  />
                <HighLightItem title='ORDER NOW' to={config.routes.ordernow} icon={null}  />
                <HighLightItem title='BIRTHDAY' to={config.routes.birthday} icon={null}  />
                <HighLightItem title='STORE' to={config.routes.store} icon={null}  />
            </HighLights>
        </div>
    )
}

export default MenuHighLights;
