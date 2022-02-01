import React from "react";


class FancyButtonsRefactor extends React.Component {
  constructor() {
    super()
    this.buttonOne = this.buttonOne.bind(this)
    this.buttonTwo = this.buttonTwo.bind(this)
    this.buttonThree = this.buttonThree.bind(this)
  }
  buttonOne() {
    console.log('Clicked one!')
  }
  
  buttonTwo() {
    console.log('Clicked two!')
  }
  
  buttonThree() {
    console.log('Clicked three!')
  }
  render() {
    return (
      <div>
        <button onClick={this.buttonOne}>My button one</button>
        <button onClick={this.buttonTwo}>My button two</button>
        <button onClick={this.buttonThree}>My button three</button>
      </div>
    )
  }
}

export default FancyButtonsRefactor;
