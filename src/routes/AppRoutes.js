import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from '../pages/Home'
import WelcomeScreen from '../pages/LoginAuth/Welcome'
const AppRoutes = ({match})=>{
    return(
        <Switch>
            <Route path={`${match.path}/`} component={WelcomeScreen}/>
            <Route path={`${match.path}/home`} component={Home}/>
        </Switch>
    )
}
export default AppRoutes;