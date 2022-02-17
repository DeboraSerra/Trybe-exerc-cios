import React from "react";

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

export default Resume;