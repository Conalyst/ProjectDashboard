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
import Login from '../components/Login';
import AddAsset from "../components/Add/AddAsset";
import EditAsset from "../components/Edit/EditAsset";
import AddRec from "../components/Add/AddRec";
import EditRec from "../components/Edit/EditRec";
import AddVul from "../components/Add/AddVul";
import EditVul from "../components/Edit/EditVul";
import AddRisk from "../components/Add/AddRisk";
import EditRisk from "../components/Edit/EditRisk";
import AddThreat from "../components/Add/AddThreat";
import EditThreat from "../components/Edit/EditThreat";
import Test from '../components/Test'

import {
    DASHBOARD,
    RISKDASHBOARD,
    MAINDASHBOARD,
    RECDASHBOARD,
    VULDASHBOARD,
    THREATSDASHBOARD,
    REPORTS,
    SETTINGS,
    LOGIN,
    ADDASSET,
    EDITASSET,
    ADDREC,
    EDITREC,
    ADDTHREAT,
    EDITTHREAT,
    ADDVUL,
    EDITVUL,
    ADDRISK,
    EDITRISK,
    TEST
} from "./CONSTANTS";

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
            <Route exact path={EDITASSET} >
                <EditAsset/>
            </Route >
            <Route exact path={TEST} >
                <Test/>
            </Route >
            <Route exact path={LOGIN} >
                <Login/>
            </Route >
            <Route exact path={ADDREC} >
                <AddRec/>
            </Route >
            <Route exact path={EDITREC} >
                <EditRec/>
            </Route >
            <Route exact path={ADDVUL} >
                <AddVul/>
            </Route >
            <Route exact path={EDITVUL} >
                <EditVul/>
            </Route >
            <Route exact path={ADDTHREAT} >
                <AddThreat/>
            </Route >
            <Route exact path={EDITTHREAT} >
                <EditThreat/>
            </Route >
            <Route exact path={ADDRISK} >
                <AddRisk/>
            </Route >
            <Route exact path={EDITRISK} >
                <EditRisk/>
            </Route >
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    );
};