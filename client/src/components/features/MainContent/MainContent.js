import React, { Component } from 'react';
import './MainContent.css';
import { Switch, Route } from 'react-router-dom'
import DashboardContent from '../DashboardContent/DashboardContent';
import PartnersContent from '../PartnersContent/PartnersContent';

class MainContent extends Component {
  render() {
    return (
      <div className="MainContent">
        <Switch>
          <Route exact path='/' component={DashboardContent}/>
          <Route exact path='/partners' component={PartnersContent}/>
          <Route path='/partners/:number' component={PartnersContent}/>
        </Switch>
      </div>
    );
  }
}

export default MainContent;
