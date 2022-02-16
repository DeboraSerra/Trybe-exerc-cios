import React from "react";

class Form extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      fullName: '',
    }
  }

  handleChange({ target }) {
    this.setState({ fullName: target.value })
  }

  render() {
    return (
      <section>
        <form>
          <input 
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={this.state.fullName}
            onChange={this.handleChange}
          />

          <input 
            type="email"
            name="email"
            placeholder="E-mail" 
          />

          <select name="age">
            <option value="" defaultValue={'Choose'}>Choose your age range</option>
            <option value="minor">Less than 18</option>
            <option value="adult">More than 18 and less than 60</option>
            <option value="senior">More than 60</option>
          </select>
        </form>
      </section>
    )
  }
}

export default Form;