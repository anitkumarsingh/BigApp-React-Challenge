import React,{ Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import Home from '../pages/Home';
import WelcomeScreen from '../pages/LoginAuth/Welcome';
import ErrorPage from '../pages/Error/Error';
import DragNdrop from '../pages/DragNDrop';
import userInfo from '../utility/UserInfo';

class App extends Component {
    render() {
      const { match } = this.props;
         return (
          <Switch>
             { userInfo.checkUser()
             ?(<Route path={`${match.path}home`} component={Home} />)
             :(<Route path={`${match.path}home`} component={ErrorPage}/>)}

             { userInfo.checkUser()
             ?(<Route path={`${match.path}drag`} component={DragNdrop} />)
             :(<Route path={`${match.path}drag`} component={ErrorPage}/>)}
            <Route path={`${match.path}/`} component={WelcomeScreen}/>
          </Switch>
      );
    }
  }
  
  export default (App);