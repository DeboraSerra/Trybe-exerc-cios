import React from 'react';
import PropTypes from 'prop-types';

const CreateInput = ({className, onChange, onBlur, name, value, text}) => {
  return (
    <input
    className={className}
    placeholder={text}
      type='text'
      onChange={onChange}
      name={name}
      value={value}
      onBlur={onBlur}
      required
    />
  )
}

export default CreateInput;
