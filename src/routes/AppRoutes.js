import React,{ Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import Home from '../pages/Home';
import WelcomeScreen from '../pages/LoginAuth/Welcome';
import ErrorPage from '../pages/Error/Error';
import DragNdrop from '../pages/DragNDrop/';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return sessionStorage.getItem("userData") ? (
        <Component {...props} />
      ) : (
          <ErrorPage {...props}  />
        );
    }}
  />
);

class App extends Component {
    render() {
      const { match } = this.props;
         return (
          <Switch>
             <PrivateRoute
              path={`${match.path}home`}
              component={Home}
             />
           <PrivateRoute
              path={`${match.path}drag-n-drop`}
              component={DragNdrop}
            />
            <Route path={`${match.path}/`} component={WelcomeScreen}/>
          </Switch>
      );
    }
  }
  
  export default (App);