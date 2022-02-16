import React from "react";

class FullName extends React.Component {
  
  render() {
    const { value, handleChange } = this.props
    return (
      <section>
        <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={value}
        onChange={handleChange}
        />
        {value.split(' ').length < 2 ? 'You must add name and last name' : ''}
        {value.length >= 50 ? 'Text is too long' : ''}
      </section>
    )
  }
}

export default FullName;
