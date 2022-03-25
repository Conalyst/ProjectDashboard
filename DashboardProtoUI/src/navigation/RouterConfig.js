import React from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound } from "./NotFound";
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