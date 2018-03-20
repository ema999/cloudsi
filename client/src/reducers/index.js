import { combineReducers } from 'redux'
import todos from './todos'
import users from './users'
import account from './account'

const todoApp = combineReducers({
  todos,
  users,
  account
})

export default todoApp
