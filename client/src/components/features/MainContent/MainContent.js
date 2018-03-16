import React, { Component } from 'react';
import './MainContent.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import DashboardContent from '../DashboardContent/DashboardContent';
import ClientsContent from '../ClientsContent/ClientsContent';
import LoginContent from '../LoginContent/LoginContent';
import AuthService from '../../../services/AuthService';

class MainContent extends Component {

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
      <div className="MainContent">
        <Switch>
          <Route exact path='/' render={(props) => (this.requireAuth(props) || <DashboardContent/>)}/>
          <Route exact path='/clients' render={(props) => (this.requireAuth(props) || <ClientsContent/>)}/>
          <Route path='/clients/:number' component={ClientsContent}/>
          <Route exact path='/login' component={LoginContent}/>
        </Switch>
      </div>
    );
  }
  
}

export default MainContent;
