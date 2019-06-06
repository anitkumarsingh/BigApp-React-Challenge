import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import OuterFooter from'./components/Footer/OuterFooter';
import AppRoutes from './routes/AppRoutes';
import withRoot from './withRoot';
import styles from './theme/styles';
import { withStyles } from '@material-ui/core/styles';

const AppContainer = () => (
  <Router>
    <div>
      <Route component={NavBar} />
      <div className="App">
        <Switch>
          <Route path="/" component={AppRoutes} />
        </Switch>
      </div>
      { sessionStorage.getItem("userData")
      ?(<Route component={Footer} />)
      :(<Route component={OuterFooter} />)
      }
    </div>
  </Router>
);

const App = () => (
  <Router>
   <Route
      component={withRoot(
        withStyles(styles, { withTheme: true })(AppContainer)
      )}
    />
  </Router>
);

export default App;