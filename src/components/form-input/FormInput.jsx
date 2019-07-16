import React from 'react';
import './FormInput.scss';

const FormInput = ({ label, ...props }) => {
  return (
    <div className="group">
      {label && (
        <label className={`${props.value.length ? 'shrink ' : ''}form-input-label`}>{label}</label>
      )}
      <input className="form-input" {...props} />
    </div>
  );
};

export default FormInput;
