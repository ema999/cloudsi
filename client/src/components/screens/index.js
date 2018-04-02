import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import AuthService from '../../services/AuthService';
import ClientsContent from '../features/ClientsContent/ClientsContent';
import Login from './Login';
import Dashboard from './Dashboard';
import Clients from './Clients';
import Users from './Users';

class Index extends Component {

  requireAuth(props) {
    if ( !AuthService.isLogged() ) {
        return <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
    }
    return false
  }

  render() {
    return (
      <div className="Dashboard">
        <Switch>
          <Route exact path='/' render={(props) => (this.requireAuth(props) || <Dashboard/>)}/>
          <Route exact path='/clients' render={(props) => (this.requireAuth(props) || <Clients/>)}/>
          <Route path='/clients/:number' component={ClientsContent}/>
          <Route exact path='/users' render={(props) => (this.requireAuth(props) || <Users/>)}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </div>
    );
  }
}

export default Index;
