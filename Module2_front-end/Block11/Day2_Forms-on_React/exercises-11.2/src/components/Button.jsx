import React from "react";
import PropTypes from 'prop-types';

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

CreateButton.propTypes = {
  type: PropTypes.string,
  funct: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

CreateButton.defaultProps = {
  type: null,
}

export default CreateButton;