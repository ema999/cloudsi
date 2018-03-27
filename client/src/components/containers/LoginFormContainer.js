import { connect } from 'react-redux'
import { submitLoginForm, changeLoginFormInputs, submitLoginFormFailed, submitLoginFormSuccess } from '../../actions'
import AuthService from '../../services/AuthService'
import LoginForm from '../features/LoginForm/LoginForm'

const mapStateToProps = (state) => {
  let account = state.account ||  {}
  let loginForm = state.account.loginForm ?  state.account.loginForm : {}
  return {
    email: loginForm.email,
    password: loginForm.password,
    isFetching: loginForm.isFetching,
    errorMsg: loginForm.errorMsg,
    isLogged: account.isLogged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (credentials) => {

      dispatch(submitLoginForm())
      AuthService.login({email: credentials.email, password: credentials.password}).then((response) => {

        if (!response.token) return dispatch(submitLoginFormFailed('Email o contraseña incorrecta'));

        localStorage.setItem('account', JSON.stringify({token: response.token}));

        AuthService.currentAccount().then((account) => {
          dispatch(submitLoginFormSuccess(account))
        })

      }, (err) => {
        dispatch(submitLoginFormFailed('Email o contraseña incorrecta'))
      })

    },

    onInputFormChange: (input) => {
      dispatch(changeLoginFormInputs(input))
    }
  }
}

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)

export default LoginFormContainer
