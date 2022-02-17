import React from "react";

class PositionField extends React.Component {
  render() {
    const { handleChange, createPositionAlert, value } = this.props
    return (
      <textarea
        className="position"
        maxLength={40}
        name="position"
        onChange={handleChange}  
        onMouseEnter={createPositionAlert}
        placeholder="Position"
        value={value}
        autoComplete='off'    
      ></textarea>
    )
  }
}

export default PositionField;