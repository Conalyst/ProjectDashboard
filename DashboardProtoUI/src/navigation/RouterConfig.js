import React from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "./NotFound";
import Dashboard from "../components/Dashboard";
import RecDashboard from "../components/RecDashboard";
import VulDashboard from "../components/VulDashboard";
import Login from '../components/Login'
import Test from '../components/Test'

import {
    DASHBOARD,
    RECDASHBOARD,
    VULDASHBOARD,
    LOGIN,
    TEST
} from "./constants";

export const RouterConfig = (props) => {
    return (
        <Switch>
            <Route exact path={DASHBOARD} >
                <Dashboard/>
            </Route >
            <Route exact path={RECDASHBOARD} >
                <RecDashboard/>
            </Route >
            <Route exact path={VULDASHBOARD} >
                <VulDashboard/>
            </Route >
            <Route exact path={TEST} >
                <Test/>
            </Route >
            <Route exact path={LOGIN} >
                <Login/>
            </Route >
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    );
};