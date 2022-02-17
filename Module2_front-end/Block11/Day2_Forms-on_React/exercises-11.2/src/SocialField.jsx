import React from "react";

class SocialField extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <input
        type="text"
        name="social"
        placeholder="Social Security Number"
        maxLength={11}
        onChange={handleChange}
        value={value}
        autoComplete='off'
      />
    )
  }
}

export default SocialField;