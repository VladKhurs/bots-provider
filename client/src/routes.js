import {PROFILE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, SETTINGS_ROUTE} from "./utils/consts";
import Profile from "./pages/Profile/Prifile";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import Settings from "./pages/Settings"

export const authRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: SETTINGS_ROUTE,
        Component: Settings
    },

]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]
