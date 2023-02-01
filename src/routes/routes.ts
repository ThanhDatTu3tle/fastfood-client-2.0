import config from "../config";

// Layouts
import { MainLayout } from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home";
import Promotion from "../pages/Promotion";
import BestSeller from "../pages/BestSeller";
import Chicken from "../pages/Chicken";
import ChickenSet from "../pages/ChickenSet";
import Burger from "../pages/Burger";
import Combo from "../pages/Combo";
import RiceAndSpaghetti from "../pages/RiceAndSpaghetti";
import Dessert from "../pages/Dessert";
import Pack from "../pages/Pack";
import Drinks from "../pages/Drinks";

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: MainLayout },
    { path: config.routes.promotion, component: Promotion, layout: MainLayout },
    { path: config.routes.bestseller, component: BestSeller, layout: MainLayout },
    { path: config.routes.chicken, component: Chicken, layout: MainLayout },
    { path: config.routes.chickenset, component: ChickenSet, layout: MainLayout },
    { path: config.routes.burger, component: Burger, layout: MainLayout },
    { path: config.routes.combo, component: Combo, layout: MainLayout },
    { path: config.routes.riceandspaghetti, component: RiceAndSpaghetti, layout: MainLayout },
    { path: config.routes.dessert, component: Dessert, layout: MainLayout },
    { path: config.routes.pack, component: Pack, layout: MainLayout },
    { path: config.routes.drinks, component: Drinks, layout: MainLayout },
]
  
const privateRoutes: any = [
    // { path: config.routes.admin, component: Admin, layout: AdminLayout },
]
  
export { publicRoutes, privateRoutes };
