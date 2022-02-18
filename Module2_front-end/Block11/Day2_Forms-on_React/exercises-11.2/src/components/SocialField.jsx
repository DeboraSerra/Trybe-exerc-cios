import React from "react";
import PropTypes from 'prop-types';

class SocialField extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <input
        type="text"
        name="social"
        placeholder="Social Security Number"
        maxLength={11}
        onChange={handleChange}
        value={value}
        autoComplete='off'
      />
    )
  }
}

SocialField.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default SocialField;