import React from "react";

class CreateButton extends React.Component {
  render() {
    const { type, funct, text } = this.props
    return (
      <button
        type={type}
        onClick={funct}
      >
        {text}
      </button>
    )
  }
}

export default CreateButton;