import config from "../../../config";
import classNames from "classnames/bind";

import styles from './MenuList.module.scss';
import List, { 
    BestSeller, 
    Promotion,
    Chicken,
    ChickenSet,
    Burger, 
    Combo,
    RiceAndSpaghetti,
    Dessert,
    Pack,
    Drinks
} from '../MenuList/Menu';

const cx = classNames.bind(styles)

const MenuList: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <List>
                <BestSeller title='Bestseller' to={config.routes.bestseller} icon={null}  />
                <Promotion title='Promotion' to={config.routes.promotion} icon={null}  />
                <Chicken title='Chicken' to={config.routes.chicken} icon={null}  />
                <ChickenSet title='Chicken Set' to={config.routes.chickenset} icon={null}  />
                <Burger title='Burger' to={config.routes.burger} icon={null}  />
                <Combo title='Combo' to={config.routes.combo} icon={null}  />
                <RiceAndSpaghetti title='Rice & Spaghetti' to={config.routes.riceandspaghetti} icon={null}  />
                <Dessert title='Dessert' to={config.routes.dessert} icon={null}  />
                <Pack title='Pack' to={config.routes.pack} icon={null}  />
                <Drinks title='Drinks' to={config.routes.drinks} icon={null}  />
            </List>
        </div>
    )
}

export default MenuList;
