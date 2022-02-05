import React from "react";


class FancyButtonsRefactor2 extends React.Component {
  constructor() {
    super()
    this.state = {
      clicksBtn1: 0,
      clicksBtn2: 0,
      clicksBtn3: 0,
    }
    this.buttonOne = this.buttonOne.bind(this)
    this.buttonTwo = this.buttonTwo.bind(this)
    this.buttonThree = this.buttonThree.bind(this)
  }
  buttonOne() {
    this.setState((previus, _props) => ({
      clicksBtn1: previus.clicksBtn1 + 1
    }))
  }
  
  buttonTwo() {
    this.setState((previus, _props) => ({
      clicksBtn2: previus.clicksBtn2 + 1
    }))
  }
  
  buttonThree() {
    this.setState((previus, _props) => ({
      clicksBtn3: previus.clicksBtn3 + 1
    }))
  }
  render() {
    return (
      <div>
        <button onClick={this.buttonOne}>{this.state.clicksBtn1}</button>
        <button onClick={this.buttonTwo}>{this.state.clicksBtn2}</button>
        <button onClick={this.buttonThree}>{this.state.clicksBtn3}</button>
      </div>
    )
  }
}

export default FancyButtonsRefactor2;
