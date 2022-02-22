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
        autoComplete='off'
      />
    )
  }
}

SocialField.propTypes = {

  handleChange: PropTypes.func.isRequired,
}

export default SocialField;