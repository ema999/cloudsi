import { connect } from 'react-redux'
import { toggleTodo } from '../../actions'
import { fetchUsers } from '../../actions'
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

      /*fetch('flores.jpg')
        .then(function(response) {
          return response.blob();
        })
        .then(function(myBlob) {
          var objectURL = URL.createObjectURL(myBlob);
          miImagen.src = objectURL;
        });
      dispatch(fetchUsers())*/
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
