import React from "react";

class CityField extends React.Component {
  render() {
    const { handleChange, handleCity, value } = this.props;
    return (
      <input
        className="city"
        type="text"
        name="city"
        placeholder="City"
        maxLength={28}
        onChange={handleChange}
        onBlur={handleCity}
        value={value}
        autoComplete='off'
      />
    )
  }
}

export default CityField;