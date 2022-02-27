import React from 'react';
import PropTypes from 'prop-types';

const CreateTextarea = ({className, onChange, name, value, text, onMouseEnter}) => {
  return (
    <textarea
      className={className}
      placeholder={text}
      onChange={onChange}
      name={name}
      value={value}
      onMouseEnter={onMouseEnter}
      required
    />
  )
}

export default CreateTextarea;
