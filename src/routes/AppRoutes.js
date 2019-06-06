import React,{ Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import Home from '../pages/Home';
import WelcomeScreen from '../pages/LoginAuth/Welcome';
import Error from '../pages/Error/Error'

class App extends Component {
    render() {
      const { match } = this.props;
         return (
          <Switch>
            { sessionStorage.getItem("userData")
             ?(<Route path={`${match.path}home`} component={Home} />)
             :(<Route path={`${match.path}home`} component={Error}/>)}
            
            <Route path={`${match.path}/`} component={WelcomeScreen}/>
          </Switch>
      );
    }
  }
  
  export default (App);