const account = (state = [], action) => {
  switch (action.type) {
    case 'CHANGE_LOGIN_FORM_INPUTS':
      return {
        ...state,
        loginForm: {...state.loginForm, ...action.input}
      }
    case 'SUBMIT_LOGIN_FORM':
      return {
        ...state,
        loginForm: {...state.loginForm, isFetching: true}
      }
    case 'SUBMIT_LOGIN_FORM_FAILED':
      return {
        ...state,
        loginForm: {...state.loginForm,
          isFetching: false,
          errorMsg: action.errorMsg,
          email: undefined,
          password: undefined
        }
      }
    case 'SUBMIT_LOGIN_FORM_SUCCESS':
      return {
        ...state,
        loginForm: {...state.loginForm,
          isFetching: false,
          errorMsg: undefined,
          email: undefined,
          password: undefined
        },
        isLogged : true
      }
    default:
      return state
  }
}


export default account
