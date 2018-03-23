import { connect } from 'react-redux'
import { submitLoginForm, changeLoginFormInputs, submitLoginFormFailed, submitLoginFormSuccess } from '../../actions'
import AuthService from '../../services/AuthService'
import LoginForm from '../features/LoginForm/LoginForm'

const mapStateToProps = (state) => {
  return {
    email: state.account.loginForm.email,
    password: state.account.loginForm.password,
    isFetching: state.account.loginForm.isFetching,
    errorMsg: state.account.loginForm.errorMsg,
    isLogged: state.account.isLogged
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
