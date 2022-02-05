import React from "react";

class ColoredButton extends React.Component {
  constructor() {
    super()
    this.state = {
      currentColor: '',
      clicks: 0,
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(e) {
    if (this.state.clicks % 2 === 0) {
      e.target.style.backgroundColor = 'green'
    } else {
      e.target.style.backgroundColor = 'white'
    }
    this.setState((oldState, _props) => ({clicks: oldState.clicks + 1}))
    this.setState({currentColor: e.target.style.backgroundColor})
    console.log(this.state);
  }
  render() {
    return <button onClick={this.changeColor}>My button</button>
  }
}
export default ColoredButton;