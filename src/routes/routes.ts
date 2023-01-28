import config from "../config";

// Layouts
import { MainLayout } from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home";
import Promotion from "../pages/Promotion";
import BestSeller from "../pages/BestSeller";

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: MainLayout },
    { path: config.routes.promotion, component: Promotion, layout: MainLayout },
    { path: config.routes.bestseller, component: BestSeller, layout: MainLayout },
]
  
const privateRoutes: any = [
    // { path: config.routes.admin, component: Admin, layout: AdminLayout },
]
  
export { publicRoutes, privateRoutes };
