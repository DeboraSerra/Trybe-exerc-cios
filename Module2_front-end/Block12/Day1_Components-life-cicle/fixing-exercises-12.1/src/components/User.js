import React from "react";

class User extends React.Component {
  render() {
    const { name, email, age, photo } = this.props;
    return (
      <section className="user-card">
        <h1>{name}, {age}</h1>
        <img src={photo} alt={name} />
        <p>{email}</p>
      </section>
    )
  }
}

export default User;