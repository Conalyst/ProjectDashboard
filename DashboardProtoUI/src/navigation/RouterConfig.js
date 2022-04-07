import React from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "./NotFound";
import Dashboard from "../components/Dashboard";
import RecDashboard from "../components/RecDashboard";
import VulDashboard from "../components/VulDashboard";
import ThreatsDashboard from "../components/ThreatsDashboard";
import AddAsset from "../components/AddAsset";
import Login from '../components/Login'
import Test from '../components/Test'

import {
    DASHBOARD,
    RECDASHBOARD,
    VULDASHBOARD,
    THREATSDASHBOARD,
    ADDASSET,
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
            <Route exact path={THREATSDASHBOARD} >
                <ThreatsDashboard/>
            </Route >
            <Route exact path={ADDASSET} >
                <AddAsset/>
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