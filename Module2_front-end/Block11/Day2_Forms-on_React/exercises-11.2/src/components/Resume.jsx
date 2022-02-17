import React from "react";
import PropTypes from 'prop-types';

class Resume extends React.Component {
  render() {
    const { handleChange, value } = this.props
    return (
      <textarea
        maxLength={1000}
        className="resume"
        name="resume"
        placeholder="Resume abstract"
        onChange={handleChange}
        value={value}
        autoComplete='off'
      ></textarea>
    )
  }
}

Resume.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Resume;