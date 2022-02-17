import React from "react";

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

export default JobDescription;