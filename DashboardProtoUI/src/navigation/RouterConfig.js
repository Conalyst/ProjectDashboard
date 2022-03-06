import React from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "./NotFound";
import Dashboard from "../components/Dashboard";
import Test from '../components/Test';
import Login from '../components/Login';

import {
    DASHBOARD,
    LOGIN,
    TEST
} from "./CONSTANTS";

export const RouterConfig = (props) => {
    return (
        <Switch>
            <Route exact path={LOGIN} >
                <Login/>
            </Route>
            <Route exact path={DASHBOARD} >
                <Dashboard/>
            </Route>
            <Route exact path={TEST} >
                <Test/>
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    );
};

export default RouterConfig;