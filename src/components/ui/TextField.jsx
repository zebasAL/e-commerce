import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({
  value,
  setValue,
  type,
  placeholder,
  id,
  textLabel,
}) => (
  <div className="class-label">
    <label htmlFor={id}>
      {textLabel}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  </div>
);

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  textLabel: PropTypes.string,
};

TextField.defaultProps = {
  type: 'text',
  placeholder: '',
  textLabel: '',
};

export default TextField;
