import React, { Component } from 'react';
import './LoginForm.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import Error from 'material-ui/svg-icons/alert/error';
import { Redirect } from 'react-router-dom'

class LoginForm extends Component {

  render() {
    if (this.props.isFetching) return (<CircularProgress />)
    if (this.props.isLogged) return (<Redirect to="/" push />)
    let errorLogin = this.props.errorMsg ? (<div><Error /><br/>{this.props.errorMsg}</div>) : null;
    return (
      <form>
        <div>{errorLogin}</div>
        <TextField
          hintText="E-mail"
          floatingLabelText="E-mail"
          onChange={(event)=>{ this.props.onInputFormChange({email: event.target.value}) }}
        />
        <br/>
        <TextField
          hintText="Contraseña"
          floatingLabelText="Contraseña"
          type="password"
          onChange={(event)=>{ this.props.onInputFormChange({password: event.target.value}) }}
        />
        <br/>
        <RaisedButton label="INGRESAR" primary={true} style={{margin: 40}} disabled={!this.props.email || !this.props.password}
        onClick={(event) => this.props.onSubmit({email: this.props.email, password: this.props.password})}/>
      </form>
    );
  }

}

export default LoginForm;
