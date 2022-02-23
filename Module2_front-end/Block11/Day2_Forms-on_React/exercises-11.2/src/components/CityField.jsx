import React from "react";
import PropTypes from 'prop-types';

class CityField extends React.Component {
  render() {
    const { handleChange, handleCity, cityValue } = this.props;
    return (
      <input
        className="city"
        type="text"
        name="city"
        placeholder="City"
        maxLength={28}
        onChange={handleChange}
        onBlur={handleCity}
        value={cityValue}
        autoComplete='off'
      />
    )
  }
}

CityField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleCity: PropTypes.func.isRequired,

}

export default CityField;