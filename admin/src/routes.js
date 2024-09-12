import {ADMIN_ROUTE, LOGIN_ROUTE, CLIENTS_ROUTE, BOTS_ROUTE, HISTORY_ROUTE, CLIENT_ROUTE, BEARS_ROUTE} from "./utils/consts";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import History from "./pages/History";
import Bots from "./pages/Bots";
import Bears from "./pages/Bears";
import Clients from "./pages/Clients";
import AboutClient from "./pages/AboutClient";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CLIENTS_ROUTE,
        Component: Clients
    },
    {
        path: BOTS_ROUTE,
        Component: Bots
    },
    {
        path: BEARS_ROUTE,
        Component: Bears
    },
    {
        path: HISTORY_ROUTE,
        Component: History
    },
    {
        path: CLIENT_ROUTE + '/:id',
        Component: AboutClient
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    }
]
