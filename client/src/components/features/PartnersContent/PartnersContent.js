import React, { Component } from 'react';
import './PartnersContent.css';
import TodoListContainer from '../../containers/todoListContainer'

class PartnersContent extends Component {
  render() {
    return (
      <div className="PartnersContent">
        <TodoListContainer />
      </div>
    );
  }
}

export default PartnersContent;
