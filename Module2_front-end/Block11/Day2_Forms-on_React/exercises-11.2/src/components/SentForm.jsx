import React from "react";
import PropTypes from 'prop-types';

class SentForm extends React.Component {
  render() {
    const { currentState: {
      fullName, email, social, adress, city, state, housing, resume, position, jobDescription
    } } = this.props;
    return (
      <div className="resume-form">
        <h1 className="resume-name">{fullName}</h1>
        <p className="resume-info">Email: {email}, Social security number: {social}.</p>
        <p className="resume-info">Adress: {adress} ({housing}) - {city}/{state}</p>
        <p className="resume-info">{resume}</p>
        <h2 className="resume-previous">Previous Job</h2>
        <p className="resume-info">{position} - {jobDescription}</p>
      </div>
    )
  }
}

SentForm.propTypes = {
  currentState: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    social: PropTypes.string,
    adress: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    housing: PropTypes.string,
    resume: PropTypes.string,
    position: PropTypes.string,
    jobDescription: PropTypes.string,
  }).isRequired,
}

export default SentForm;
