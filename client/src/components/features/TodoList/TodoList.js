import React, { Component } from 'react';
import './TodoList.css';
import Todo from '../Todo/Todo'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.onTodoClick(id)
  }

  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => this.handleClick(todo.id)}
          />
        )}
      </ul>
    );
  }

}

export default TodoList;
