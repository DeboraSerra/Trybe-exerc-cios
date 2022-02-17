import React from "react";
import PropTypes from 'prop-types';

class HousingField extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <section className="housing">
        <label htmlFor="house">
          <input
            type="radio"
            name="housing"
            value="House"
            id="house"
            onChange={handleChange}
          />
          House
        </label>
        <label htmlFor="apt">
          <input 
            type="radio"
            name="housing"
            value="Apartment"
            id="apt"
            onChange={handleChange}
          />
          Apartment
        </label>
      </section>
    )
  }
}

HousingField.propTypes = {
  handleChange: PropTypes.func.isRequired,
}

export default HousingField;