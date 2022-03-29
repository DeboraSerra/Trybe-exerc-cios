import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { addToList } from '../redux/actions';

class RegisterClient extends React.Component {
  constructor() {
    super();
    this.state ={
      name: '',
      age: 0,
      email: '',
      sent: false,
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  register = () => {
    const { name, email, age } = this.state;
    const { addToList } = this.props;
    const id = Math.random();
    addToList({ name, age, email, id });
    this.setState({ sent: true });
  }

  render() {
    const { name, email, age, sent } = this.state;
    return (
      <>
        <button type="button"><Link to="/registered-clients">Back</Link></button>
        <form onSubmit={ this.register }>
          <input
            type="text"
            name="name"
            value={ name }
            onChange={ this.handleChange }
          />
          <input
            type="number"
            name="age"
            value={ age }
            onChange={ this.handleChange }
          />
          <input
            type="text"
            name="email"
            value={ email }
            onChange={ this.handleChange }
          />
          <button type="button" onClick={ this.register }>Register</button>
          {sent && <Redirect to="/registered-clients" />}
        </form>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToList: (client) => dispatch(addToList(client)),
});

export default connect(null, mapDispatchToProps)(RegisterClient);
