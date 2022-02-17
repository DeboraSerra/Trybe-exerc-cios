import React from "react";

class EmailField extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <input
      className="email"
        type="text"
        name="email"
        placeholder="E-mail"
        maxLength={50}
        onChange={handleChange}
        value={value}
        autoComplete='off'
      />
    )
  }
}

export default EmailField;