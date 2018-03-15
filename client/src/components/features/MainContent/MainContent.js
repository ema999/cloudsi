import React, { Component } from 'react';
import './MainContent.css';
import { Switch, Route } from 'react-router-dom'
import DashboardContent from '../DashboardContent/DashboardContent';
import ClientsContent from '../ClientsContent/ClientsContent';

class MainContent extends Component {
  render() {
    return (
      <div className="MainContent">
        <Switch>
          <Route exact path='/' component={DashboardContent}/>
          <Route exact path='/clients' component={ClientsContent}/>
          <Route path='/clients/:number' component={ClientsContent}/>
        </Switch>
      </div>
    );
  }
}

export default MainContent;
