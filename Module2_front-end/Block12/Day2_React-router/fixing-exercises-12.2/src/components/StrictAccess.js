import React from "react";
import { Redirect } from "react-router-dom";

class StrictAccess extends React.Component {
  render(){
    const { user: { username, password } } = this.props;
    if (username === 'joao' && password === '1234') {
      return <p>Welcome, João!</p>
    } else {
      alert('Access denied');
      return <Redirect to="/" />
    }
  }
}

export default StrictAccess;
