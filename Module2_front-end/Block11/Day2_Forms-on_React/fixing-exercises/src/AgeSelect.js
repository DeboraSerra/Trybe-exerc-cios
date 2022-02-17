import React from "react";
import PropTypes from 'prop-types';

class Age extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <section>
        <select
          name="age"
          onChange={handleChange}
          value={value}
        >
          <option value=''>Choose your age range</option>
          <option value="minor">Less than 18</option>
          <option value="adult">More than 18 and less than 60</option>
          <option value="senior">More than 60</option>
        </select>
        { !value.length ? 'You must select your age range' : ''}
      </section>
    )
  }
}

Age.proTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Age;