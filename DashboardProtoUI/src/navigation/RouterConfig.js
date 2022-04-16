import React from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "./NotFound";
import Dashboard from "../components/Dashboard";
import MainDashboard from "../components/MainDashboard";
import RiskDashboard from "../components/RiskDashboard";
import RecDashboard from "../components/RecDashboard";
import Reports from "../components/Reports";
import VulDashboard from "../components/VulDashboard";
import ThreatsDashboard from "../components/ThreatsDashboard";
import Settings from "../components/Settings";
import AddAsset from "../components/AddAsset";
import ManageList from "../components/ManageList";
import Login from '../components/Login'
import Test from '../components/Test'

import {
    DASHBOARD,
    RISKDASHBOARD,
    MAINDASHBOARD,
    RECDASHBOARD,
    VULDASHBOARD,
    THREATSDASHBOARD,
    REPORTS,
    ADDASSET,
    MANAGELIST,
    SETTINGS,
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
            <Route exact path={MAINDASHBOARD} >
                <MainDashboard/>
            </Route >
            <Route exact path={RISKDASHBOARD} >
                <RiskDashboard/>
            </Route >
            <Route exact path={VULDASHBOARD} >
                <VulDashboard/>
            </Route >
            <Route exact path={THREATSDASHBOARD} >
                <ThreatsDashboard/>
            </Route >
            <Route exact path={REPORTS} >
                <Reports/>
            </Route >
            <Route exact path={SETTINGS} >
                <Settings/>
            </Route >
            <Route exact path={ADDASSET} >
                <AddAsset/>
            </Route >
            <Route exact path={MANAGELIST} >
                <ManageList/>
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