import { connect } from 'react-redux'
import { toggleTodo } from '../../actions'
import { fetchUsers } from '../../actions'
import AuthService from '../../services/AuthService'
import TodoList from '../features/TodoList/TodoList'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    fetchUsers: () => {

      AuthService.login({user:'user',pass:'password'}).then((response) => {
        console.log(response);
      })

      dispatch(fetchUsers())
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
