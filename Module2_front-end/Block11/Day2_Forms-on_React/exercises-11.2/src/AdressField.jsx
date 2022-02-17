import React from "react";

class AdressField extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <input
        className="adress"
        type="text"
        name="adress"
        placeholder="Adress"
        maxLength={200}
        value={value}
        onChange={handleChange}
        autoComplete='off'
      />
    )
  }
}

export default AdressField;