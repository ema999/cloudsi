let nextTodoId = 0

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const fetchUsers = () => {
  return {
    type: 'FETCH_USERS_REQUEST'
  }
}

export const changeLoginFormInputs = (input) => {
  return {
    type: 'CHANGE_LOGIN_FORM_INPUTS',
    input
  }
}

export const submitLoginForm = () => {
  return {
    type: 'SUBMIT_LOGIN_FORM'
  }
}

export const submitLoginFormFailed = (errorMsg) => {
  return {
    type: 'SUBMIT_LOGIN_FORM_FAILED',
    errorMsg
  }
}
