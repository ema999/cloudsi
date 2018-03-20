import React, { Component } from 'react';
import './LoginForm.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

class LoginForm extends Component {

  render() {
    if (this.props.isFetching) return (<CircularProgress />)
    return (
      <form>
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
