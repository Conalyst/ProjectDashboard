import React from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "./NotFound";
import Dashboard from "../components/Dashboard";
<<<<<<< HEAD
import Test from '../components/Test';
import Login from '../components/Login';
=======
import Login from '../components/Login'
import Test from '../components/Test'
>>>>>>> origin/Frontend

import {
    DASHBOARD,
    LOGIN,
    TEST
} from "./CONSTANTS";

<<<<<<< HEAD
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
=======

export const RouterConfig = (props) => {
    return (
        <Switch>
            <Route exact path={DASHBOARD} >
                <Dashboard/>
            </Route >
            <Route exact path={TEST} >
                <Test/>
            </Route >
            <Route exact path={LOGIN} >
                <Login/>
            </Route >
>>>>>>> origin/Frontend
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    );
};

export default RouterConfig;