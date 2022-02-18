import React from "react";
import PropTypes from 'prop-types';

class JobDescription extends React.Component {
  render() {
    const { handleChange, value } = this.props
    return (
      <input
        className="job-description"
        name='jobDescription'
        type="text"
        maxLength={500}
        placeholder="Job Description"
        onChange={handleChange}
        value={value}
        required
        autoComplete='off'
      />
    )
  }
}

JobDescription.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default JobDescription;