import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ClientsList from '../components/ClientList';

class RegisteredClients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
    }
  }

  render() {
    const { email } = this.state;
    return (
      <section>
        {!email && (
          <>
            <p>User not logged</p>
            <button><Link to="/login">Log in</Link></button>
          </>
        )}
        {email && (
          <>
            <ClientsList />
            <button type="button"><Link to="/register-client">Register client</Link></button>
          </>
        )}
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.loginReducer.email,
});

export default connect(mapStateToProps, null)(RegisteredClients);
