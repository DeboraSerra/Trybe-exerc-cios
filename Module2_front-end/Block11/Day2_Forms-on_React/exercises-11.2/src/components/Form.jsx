import React from "react";
import CreateButton from "./Button";
import SentForm from './SentForm';
import PersonalInfo from "./PersonalInfo";
import JobInfo from "./JobInfo";
import NotValid from './NotValid';

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
  formError: {},
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
        [name]: name === 'email' || name === 'social' ? this.formValidate(name, value) : '',
      }
    }));
  }

  formValidate(field, value) {
    // if (field !== 'email' || field !== 'social') stop;
    switch (field) {
      case 'email':
        const validEmail = value.match(/[\w.!#$%&'*+=?^_`{|}~-]+@[\w.-]+\.[A-Z]{2,}/gi);
        return validEmail ? '' : 'Invalid email';
      case 'social':
        const validateSocial = value.split('').some((num) => isNaN(num));
        return !validateSocial ? '' : 'Must contain only numbers';
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
    let { value } = target;
    if (!isNaN(value[0])) {
      value = '';
      this.updateState('city', value);
    }
  }

  handleAdress(value) {
    const newValue = value.replace(/[^\w\s]/gi, '')
    return newValue;
  }

  handleChange({ target }) {
    let { name, value } = target;
    if (name === 'fullName') value = value.toUpperCase();
    if (name === 'adress') value = this.handleAdress(value);
    this.updateState(name, value);
  }

  render() {
    const { sent, formError } = this.state;
    return (
      <section>
        <header>
          <h1 className="title">Fill your resume</h1>
        </header>
        <form>
          <PersonalInfo value={this.state} handleChange={this.handleChange} handleCity={this.handleCity}/>
          <JobInfo value={this.state} handleChange={this.handleChange} createPositionAlert={this.createPositionAlert}/>
          <section className="btn-container">
            <CreateButton
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
        {formError && <NotValid formError={this.state.formError}/>}
        {sent && <SentForm currentState={this.state} />}
      </section>
    );
  }
}

export default Form;
