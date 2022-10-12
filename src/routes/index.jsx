import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Video from "../pages/Video";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/video", component: Video },
  // { path: "/category/search/:keyword", component: Catalog },
  // { path: "/category/:id", component: Detail },
  // { path: "/category/", component: Catalog },
];
export { publicRoutes };
