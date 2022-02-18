import React from "react";
import NameField from "./NameField";
import EmailField from "./EmailField";
import SocialField from "./SocialField";
import AdressField from "./AdressField";
import CityField from "./CityField";
import StateField from "./StateField";
import HousingField from "./HousingField";
import Resume from "./Resume";
import PositionField from "./PositionFIeld";
import JobDescription from "./JobDescription";
import CreateButton from "./Button";
import SentForm from './SentForm';

const initialState = {
  fullName: "",
  email: "",
  social: "",
  adress: "",
  city: "",
  state: "",
  housing: "",
  resume: "",
  position: "",
  jobDescription: "",
  alert: false,
  sent: false,
  validForm: true,
}

class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleAdress = this.handleAdress.bind(this);
    this.createPositionAlert = this.createPositionAlert.bind(this);
    this.handleCity = this.handleCity.bind(this)
    this.sendForm = this.sendForm.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.updateState = this.updateState.bind(this);
    this.state = {
      fullName: "",
      email: "",
      social: '',
      adress: "",
      city: "",
      state: "",
      housing: "",
      resume: "",
      position: "",
      jobDescription: "",
      alert: false,
      sent: false,
      formError: {},
    };
  }

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
      formError: {
        ...state.formError,
        [name]: this.formValidate(name, value),
      }
    }));
  }

  formValidate(field, value) {
    switch (field) {
      case 'name':
        return value ? '' : 'Required field';
      case 'email':
        const valid = value.includes('@')
        return valid ? '' : 'Invalid email';
      case 'social':
        const validateSocial = value.split('').some((num) => isNaN(num));
        console.log(validateSocial)
        return !validateSocial ? '' : 'Must contain only numbers';
      case 'adress':
        return value ? '' : 'Required field';
      case 'city':
        return value ? '' : 'Required field';
      case 'state':
        return value ? '' : 'Select a State';
      case 'housing':
        return value ? '' : 'Select a housing type';
      case 'resume':
        return value ? '' : 'Required field';
      case 'position':
        return value ? '' : 'Required field';
      case 'jobDescription':
        return value ? '' : 'Required field';
      default:
        break;
    }
  }

  clearForm() {
    this.setState(initialState);
  }

  sendForm(event) {
    event.preventDefault();
    this.setState({ sent: true });
  }

  createPositionAlert() {
    if (!this.state.alert) {
      this.setState({ alert: true });
      alert("Fill this information carefully");
    }
  }

  handleCity({ target }) {
    const { value } = target;
    if (typeof parseInt(value[0]) === "number") {
      target.innerHtml = "";
      this.updateState('city', value);
    }
  }

  handleAdress(value) {
    const newValue = value.replace(/[\W{1,}]/gi, ' ')
    return newValue;
  }

  handleChange({ target }) {
    let { name, value } = target;
    if (value && name === 'fullName') value = value.toUpperCase();
    if (value && name === 'adress') value = this.handleAdress(value);
    this.updateState(name, value);
  }

  render() {
    const { fullName, email, social, adress, city, state, housing, resume, position, jobDescription, sent } = this.state;
    return (
      <section>
        <header>
          <h1 className="title">Fill your resume</h1>
        </header>
        <form>
          <fieldset>
            <legend>Personal Info</legend>
            <NameField
              handleChange={this.handleChange}
              value={fullName}
            />
            <EmailField
              handleChange={this.handleChange}
              value={email}
            />
            <SocialField
              handleChange={this.handleChange}
              value={social}
            />
            <AdressField
              handleChange={this.handleChange}
              value={adress}
            />
            <CityField
              handleChange={this.handleChange}
              handleCity={this.handleCity}
              value={city}
            />
            <StateField
              handleChange={this.handleChange}
              value={state}
            />
            <HousingField
              handleChange={this.handleChange}
              value={housing}
            />
          </fieldset>
          <fieldset>
            <legend>Job info</legend>
            <Resume
              handleChange={this.handleChange}
              value={resume}
            />
            <PositionField
              handleChange={this.handleChange}
              createPositionAlert={this.createPositionAlert}
              value={position}
            />
            <JobDescription
              handleChange={this.handleChange}
              value={jobDescription}
            />
          </fieldset>
          <section className="btn-container">
            <CreateButton
              type={'submit'}
              text={'Send'}
              funct={this.sendForm}
            />
            <CreateButton
              type={'reset'}
              text={'Clear'}
              funct={this.clearForm}
            />
          </section>
        </form>
        {sent && <SentForm currentState={this.state} />}
      </section>
    );
  }
}

export default Form;
