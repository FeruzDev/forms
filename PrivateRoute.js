import React from 'react';
import { AUTH } from '../tools/Const';
import {Route, Redirect} from 'react-router-dom'
import NotFound from "./NotFound";
import {TOKEN_NAME} from "./tools/constants";
const PrivateRoute = (props) => {
    return (
        localStorage.getItem(AUTH) ?
            <Route component={props.component} path={props.path} exact={props.exact}/>
            : <Route component={NotFound}/>

        // : <Redirect to="/login"/>
    );
};

export default PrivateRoute;