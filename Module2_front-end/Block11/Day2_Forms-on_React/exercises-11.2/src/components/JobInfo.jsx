import React from "react";
import CreateInput from "./CreateInput";
import CreateTextarea from "./CreateTextarea";
import PropTypes from 'prop-types';

class JobInfo extends React.Component {
  render() {
    const { handleChange, createPositionAlert, value: { resume, position, jobDescription } } = this.props
    return (
      <fieldset>
        <legend>Job Info</legend>
        <CreateTextarea
          className='resume'
          text="Resume abstract"
          onChange={handleChange}
          name='resume'
          value={resume}
          onMouseEnter={null}
        />
        <CreateTextarea
          className='position'
          text="Position"
          onChange={handleChange}
          name='position'
          value={position}
          onMouseEnter={createPositionAlert}
        />
        <CreateInput
          className='job-description'
          text='Job Description'
          onChange={handleChange}
          name='jobDescription'
          value={jobDescription}
          onBlur={null}
        />
      </fieldset>
    )
  }
}

JobInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  createPositionAlert: PropTypes.func.isRequired,

}

export default JobInfo;
