import React from "react";
import PropTypes from 'prop-types';

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

EmailField.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default EmailField;