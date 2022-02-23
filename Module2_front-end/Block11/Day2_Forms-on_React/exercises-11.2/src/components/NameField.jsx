import React from "react";
import PropTypes from 'prop-types';

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
        autoComplete='off'
      />
    )
  }
}

NameField.propTypes = {

  handleChange: PropTypes.func.isRequired,
}

export default NameField;
