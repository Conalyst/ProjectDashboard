import React from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "./NotFound";
<<<<<<< HEAD
import Test from '../components/Test'
import Login from '../components/login'
import {
 LOGIN,
 TEST
} from "./constants";
export const RouterConfig = (props) => {
 
  return (
    <Switch>
   
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

export default RouterConfig;
=======
import Dashboard from "../components/Dashboard";
import Login from '../components/Login'
import Test from '../components/Test'

import {
    DASHBOARD,
    LOGIN,
    TEST
} from "./CONSTANTS";

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
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    );
};
>>>>>>> Frontend
