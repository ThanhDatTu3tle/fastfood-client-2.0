import config from "../../../../config";
import classNames from "classnames/bind";

import styles from './MenuTitles.module.scss';
import Titles, { TitleItem } from '../MenuTitles/Menu';

const cx = classNames.bind(styles)

const MenuTitles: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <Titles>
                <TitleItem title='Promotion' to={config.routes.promotion} icon={null}  />
                <TitleItem title='Order Now' to={config.routes.ordernow} icon={null}  />
                <TitleItem title='Birthday' to={config.routes.birthday} icon={null}  />
                <TitleItem title='Store' to={config.routes.store} icon={null}  />
            </Titles>
        </div>
    )
}

export default MenuTitles;
