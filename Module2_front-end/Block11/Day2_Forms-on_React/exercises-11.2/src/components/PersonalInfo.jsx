import React from "react";
import NameField from './NameField';
import EmailField from './EmailField';
import SocialField from './SocialField';
import AdressField from './AdressField';
import CityField from './CityField';
import StateField from './StateField';
import HousingField from './HousingField';
import PropTypes from 'prop-types';

class PersonalInfo extends React.Component {
  render() {
    const { value: { fullName, email, social, adress, city, state, housing }, handleChange, handleCity } = this.props;
    return (
      <fieldset>
        <legend>Personal Info</legend>
        <NameField value={fullName} handleChange={handleChange}/>
        <EmailField value={email} handleChange={handleChange}/>
        <SocialField value={social} handleChange={handleChange}/>
        <AdressField value={adress} handleChange={handleChange}/>
        <CityField value={city} handleChange={handleChange} handleCity={handleCity}/>
        <StateField value={state} handleChange={handleChange}/>
        <HousingField valu={housing} handleChange={handleChange}/>
      </fieldset>
    )
  }
}

PersonalInfo.propTypes = {
  value: PropTypes.shape({
    fullName: PropTypes.string,
    email: PropTypes.string,
    social: PropTypes.string,
    adress: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    housing: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleCity: PropTypes.func.isRequired,
}

export default PersonalInfo;
