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
        autoComplete='off'
      ></textarea>
    )
  }
}

Resume.propTypes = {

  handleChange: PropTypes.func.isRequired,
}

export default Resume;