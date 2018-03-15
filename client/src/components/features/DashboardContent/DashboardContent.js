import React, { Component } from 'react';
import './DashboardContent.css';
import TodoListContainer from '../../containers/todoListContainer'

class DashboardContent extends Component {
  render() {
    return (
      <div className="DashboardContent">
        <TodoListContainer />
      </div>
    );
  }
}

export default DashboardContent;
