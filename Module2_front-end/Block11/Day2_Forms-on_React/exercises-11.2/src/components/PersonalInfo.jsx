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
    const { handleChange, handleCity, cityValue } = this.props;
    return (
      <fieldset>
        <legend>Personal Info</legend>
        <NameField handleChange={handleChange}/>
        <EmailField handleChange={handleChange}/>
        <SocialField handleChange={handleChange}/>
        <AdressField handleChange={handleChange}/>
        <CityField cityValue={cityValue} handleChange={handleChange} handleCity={handleCity}/>
        <StateField handleChange={handleChange}/>
        <HousingField handleChange={handleChange}/>
      </fieldset>
    )
  }
}

PersonalInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleCity: PropTypes.func.isRequired,
}

export default PersonalInfo;
