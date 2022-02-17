import React from "react";

class NameField extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <input
        className="full-name"
        type="text"
        name="fullName"
        placeholder="Full Name"
        maxLength={40}
        onChange={handleChange}
        value={value}
        autoComplete='off'
      />
    )
  }
}

export default NameField;
