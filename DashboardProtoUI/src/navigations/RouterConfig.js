import React from "react";
import { Switch, Route } from "react-router-dom";
import  { Login }  from "../components/Login";
import  { Dashboard }  from "../components/Dashboard";
import { NotFound } from "./NotFound";
import {
  ROOT,
  LOGIN,
  DASHBOARD,  
} from "./CONSTANTS";


export const RouterConfig = (props) => {
  
  return (
    <Switch>
      List all public routes here
      <Route exact path={DASHBOARD} component={Dashboard}>        
        </Route >
      <Route exact path={LOGIN} component={Login} ></Route >
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default RouterConfig;