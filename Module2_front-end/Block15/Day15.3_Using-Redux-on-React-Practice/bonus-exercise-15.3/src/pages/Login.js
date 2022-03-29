import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginAction } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      emailIsValid: false,
      passwordIsValid: false,
      sent: false,
    }
  }

  handleChange = ({target: { name, value } }) => {
    const isValid = this.validateField(name, value);
    this.setState({ [name]: value, [`${name}IsValid`]: isValid });
  }

  validateField = (name, value) => {
    switch (name) {
      case 'email':
        const validEmail = value.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/igm);
        if (!validEmail) return false;
        return true;
      case 'password':
        const validPass = value.match(/[a-zA-Z0-9\W]/gm) && value.length >= 6;
        if (!validPass) return false;
        return validPass;
      default:
        return false;
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { logUser } = this.props;
    const { email, password } = this.state;
    logUser(email, password);
    this.setState({ sent: true });
  }

  render() {
    const { email, password, sent, emailIsValid, passwordIsValid } = this.state;
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          value={ email }
          onChange={ this.handleChange }
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={ password }
          onChange={ this.handleChange }
        />
        <button
          onClick={ this.handleSubmit }
          type="button"
          disabled={ !emailIsValid || !passwordIsValid }
        >
          Log in
        </button>
        {sent && <Redirect to="/registered-clients" />}
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logUser: (...payload) => dispatch(loginAction(...payload)),
});

export default connect(null, mapDispatchToProps)(Login);
