import React from "react";

const CreateFilterButtons = ({className, onClick, disabled, text}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
export default CreateFilterButtons;