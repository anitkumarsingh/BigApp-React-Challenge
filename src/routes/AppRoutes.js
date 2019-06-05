import React,{ Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import Home from '../pages/Home';
import WelcomeScreen from '../pages/LoginAuth/Welcome';

class App extends Component {
    render() {
      const { match } = this.props;
         return (
          <Switch>
            <Route path={`${match.path}home`} component={Home} />
            <Route path={`${match.path}/`} component={WelcomeScreen}/>
          </Switch>
      );
    }
  }
  
  export default (App);