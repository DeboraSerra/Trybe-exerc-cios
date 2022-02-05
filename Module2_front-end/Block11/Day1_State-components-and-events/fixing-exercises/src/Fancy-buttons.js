import React from "react";

function buttonOne() {
  console.log('Clicked one!')
}

function buttonTwo() {
  console.log('Clicked two!')
}

function buttonThree() {
  console.log('Clicked three!')
}

class FancyButtons extends React.Component {
  render() {
    return (
      <div>
        <button onClick={buttonOne}>My button one</button>
        <button onClick={buttonTwo}>My button two</button>
        <button onClick={buttonThree}>My button three</button>
      </div>
    )
  }
}

export default FancyButtons;
