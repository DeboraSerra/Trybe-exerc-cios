import React from "react";
import './fixing-exercises.css';
import FullName from "./FullName";
import Age from "./AgeSelect";

class Form extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleError = this.handleError.bind(this)
    this.state = {
      fullName: '',
      email: '',
      age: '',
      agreement: false,
      formWithError: false,
    }
  }

  handleError() {
    const { fullName, email, age, agreement } = this.state;
    const values = [ fullName, email, age, agreement ];
    const formValidation = values.every((value) => value);
    this.setState({ formWithError: !formValidation });
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ [name]: value }, () => this.handleError())
  }

  render() {
    return (
      <section>
        <form>
          <fieldset>
            <legend>Personal informations</legend>
            <FullName
              value={this.state.fullName}
              handleChange={this.handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={this.state.email}
              onChange={this.handleChange}
            />

            <Age
              value={this.state.age}
              handleChange={this.handleChange}
            />

            <label htmlFor="agree">
              <input
              id="agree"
                type="checkbox"
                name="agreement"
                value={this.state.agreement}
                onChange={this.handleChange}
              />
              Do you agree with the use of your informations for research?
            </label>

            <label htmlFor="photo">
              Add your photo:
              <input type="file" name="photo" />
            </label>
          </fieldset>
        </form>
      </section>
    )
  }
}

export default Form;