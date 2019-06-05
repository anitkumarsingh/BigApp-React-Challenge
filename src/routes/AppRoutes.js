import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Home from '../pages/Home'

const AppRoutes = ({match})=>{
    return(
        <Switch>
            <Route path={`${match.path}/`} component={Home}/>
        </Switch>
    )
}
export default AppRoutes;