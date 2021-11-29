import React from 'react';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './pages/sidebar/Dashboard';
import Sidebar from './pages/sidebar/Sidebar';
import NotFoundPage from './pages/notfound/NotFoundPage';
import MoldReq from './pages/moldrequest/MoldReq';

function App() {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return <Login />;
  }

  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/login' />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='*'>
            <NotFoundPage />
          </Route>
          <Route exact path='/mold-request'>
            <Dashboard />
            <MoldReq />
          </Route>
          <Route exact path='/product-specification'>
            <Dashboard />
          </Route>
          <Route exact path='/dfmea-form'>
            <Dashboard />
          </Route>
          <Route exact path='/bom-form'>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
