import React from "react";
import PropTypes from 'prop-types';

class AdressField extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <input
        className="adress"
        type="text"
        name="adress"
        placeholder="Adress"
        maxLength={200}
        value={value}
        onChange={handleChange}
        autoComplete='off'
      />
    )
  }
}

AdressField.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default AdressField;