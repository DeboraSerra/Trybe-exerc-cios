import React from "react";
import CreateInput from "./CreateInput";
import StateField from './StateField';
import HousingField from './HousingField';
import PropTypes from 'prop-types';

class PersonalInfo extends React.Component {
  render() {
    const { handleChange, handleCity, value: { fullName, email, social, adress, city, state, housing } } = this.props;
    return (
      <fieldset>
        <legend>Personal Info</legend>
        <CreateInput
          className='full-name'
          text='Full Name'
          onChange={handleChange}
          name='fullName'
          value={fullName}
          onBlur={null}
        />
        <CreateInput
          className='email'
          text='E-mail'
          onChange={handleChange}
          name='email'
          value={email}
          onBlur={null}
        />
        <CreateInput
          className='social'
          text='Social security number'
          onChange={handleChange}
          name='social'
          value={social}
          onBlur={null}
        />
        <CreateInput
          className='adress'
          text='Adress'
          onChange={handleChange}
          name='adress'
          value={adress}
          onBlur={null}
        />
        <CreateInput
          className='city'
          text='City'
          onChange={handleChange}
          name='city'
          value={city}
          onBlur={handleCity}
        />
        <StateField
          value={state}
          handleChange={handleChange}
        />
        <HousingField
          value={housing}
          handleChange={handleChange}
        />
      </fieldset>
    )
  }
}

PersonalInfo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleCity: PropTypes.func.isRequired,
}

export default PersonalInfo;
