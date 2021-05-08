import About from "../components/Pages/About";
import Contact from "../components/Pages/Contact";
import Home from "../components/Pages/Home";
import ROUTE_PATH from "../constants/Routes";

const routes = [
  { path: ROUTE_PATH.HOME, component: Home, exact: true },
  { path: ROUTE_PATH.ABOUT, component: About, exact: true },
  { path: ROUTE_PATH.CONTACT, component: Contact, exact: true },
];

export default routes;
