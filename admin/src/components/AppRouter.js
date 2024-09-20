import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {ADMIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import { useStore } from '../state/State';

const AppRouter = observer(() => {
    const isAuth = useStore((state) => state.isAuth);
    return (
        <Switch>
            {isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact/>
            )}
            <Redirect to={ADMIN_ROUTE}/>
        </Switch>
    );
});

export default AppRouter;
