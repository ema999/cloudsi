import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="Todo" onClick={this.props.onClick}>
        <div>{this.props.text}</div><span>{this.props.completed ? 'completada': 'incompleta'}</span>
      </div>
    );
  }
}

export default Todo;
