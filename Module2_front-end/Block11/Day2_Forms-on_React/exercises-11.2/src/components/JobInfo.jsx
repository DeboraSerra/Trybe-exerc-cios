import React from "react";
import Resume from "./Resume";
import PositionField from "./PositionFIeld";
import JobDescription from "./JobDescription";
import PropTypes from 'prop-types';

class JobInfo extends React.Component {
  render() {
    const { handleChange, createPositionAlert } = this.props
    return (
      <fieldset>
        <legend>Job Info</legend>
        <Resume handleChange={handleChange}/>
        <PositionField handleChange={handleChange} createPositionAlert={createPositionAlert}/>
        <JobDescription handleChange={handleChange}/>
      </fieldset>
    )
  }
}

JobInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  createPositionAlert: PropTypes.func.isRequired,

}

export default JobInfo;
