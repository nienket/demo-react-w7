import Upload from "../components/upload";
import Dashboard from "../pages/admin/Dashboard";
import About from "../pages/main/about";
import Blog from "../pages/main/blog";
import Contact from "../pages/main/contact";
import Err from "../pages/main/err";
import Home from "../pages/main/home";
import Landing from "../pages/main/landing";
import Pricing from "../pages/main/pricing";
import Services from "../pages/main/services";

export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/landing",
    exact: true,
    Component: Landing,
  },
  {
    path: "/pricing",
    exact: true,
    Component: Pricing,
  },
  {
    path: "/services",
    exact: true,
    Component: Services,
  },
  {
    path: "/contact",
    exact: true,
    Component: Contact,
  },
  {
    path: "/blog",
    exact: true,
    Component: Blog,
  },
  {
    path: "/about",
    exact: true,
    Component: About,
  },
  {
    path: "/upload",
    exact: true,
    Component: Upload,
  },
  {
    Component: Err,
  },
];
// export const signRouter = [
//   {
//     path: "/login",
//     exact: false,
//     Component: Login,
//   },
//   {
//     path: "/register",
//     exact: false,
//     Component: Register,
//   },
// ];
export const adminRouter = [
  {
    path: "/dashboard",
    exact: true,
    Component: Dashboard,
  },
];
