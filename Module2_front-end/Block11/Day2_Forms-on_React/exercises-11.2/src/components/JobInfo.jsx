import React from "react";
import Resume from "./Resume";
import PositionField from "./PositionFIeld";
import JobDescription from "./JobDescription";
import PropTypes from 'prop-types';

class JobInfo extends React.Component {
  render() {
    const { handleChange, createPositionAlert, value: { resume, position, jobDescription } } = this.props
    return (
      <fieldset>
        <legend>Job Info</legend>
        <Resume value={resume} handleChange={handleChange}/>
        <PositionField value={position} handleChange={handleChange} createPositionAlert={createPositionAlert}/>
        <JobDescription value={jobDescription} handleChange={handleChange}/>
      </fieldset>
    )
  }
}

JobInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  createPositionAlert: PropTypes.func.isRequired,
  value: PropTypes.shape({
    resume: PropTypes.string,
    position: PropTypes.string,
    jobDescription: PropTypes.string,
  }).isRequired,
}

export default JobInfo;
