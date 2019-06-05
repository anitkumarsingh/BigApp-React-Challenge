import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import './App.css';

const AppContainer = ()=>{
  return(
    <Router>
     <Route component={Nav}/>
     <Switch>
       <Route component={AppRoutes}/>
     </Switch>
     <Route  component={Footer}/>
    </Router>
  )
}
const App = () =>{
  return (
   <Router>
     <Route component={AppContainer}/>
    </Router>
  );
}

export default App;
