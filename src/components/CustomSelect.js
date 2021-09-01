import React, { useState, useEffect } from 'react';
// icons
import { MdErrorOutline } from 'react-icons/md';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { BsTriangleFill } from 'react-icons/bs';

const inputStatus = {
  ON_FOCUS: 'focus',
  ON_ERROR: 'error',
  ON_VALID: 'valid',
};

const CustomSelect = ({
  icon: Icon,
  name,
  value,
  onFocus,
  placeholder,
  errors,
  classes,
  bordered,
  uppercase,
  options,
  onSelectChange,
  ...rest
}) => {
  // state
  const [isFocused, setFocus] = useState(false);
  // const [isValid, setIsValid] = useState(false);
  const [hasErrors, setHasErrors] = useState(errors.length > 0);

  // side effects
  useEffect(() => {
    setHasErrors(errors.length > 0);
  }, [errors]);

  const getInputStyle = () => {
    if (isFocused && !hasErrors) return inputStatus.ON_FOCUS;

    if (hasErrors) return inputStatus.ON_ERROR;

    return '';
  };

  return (
    <div
      className={`custom-input ${uppercase && 'uppercase'} ${getInputStyle()} ${
        bordered && 'full-border'
      } ${classes}`}
    >
      {Icon && <Icon />}
      <select
        name={name}
        value={value}
        onChange={onSelectChange}
        onFocus={(event) => {
          setFocus(true);
          if (onFocus) onFocus(event.target.name);
        }}
        onBlur={() => {
          setFocus(false);
          if (onFocus) onFocus('');
        }}
        style={{ color: !value && '#bbbbbb' }}
        {...rest}
      >
        <option value={null} selected={!value} disabled={value}>
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.name}
            style={{ color: '#333333' }}
          >
            {option.name}
          </option>
        ))}
      </select>
      <div
        className={`error-container ${!hasErrors ? 'invisible-container' : ''}`}
      >
        <MdErrorOutline
          className={`error-icon ${!hasErrors ? 'invisible-icon' : ''}`}
        />

        {hasErrors && (
          <div className="error-content">
            <BsTriangleFill className="triangle" />
            {errors.map((error) => (
              <div className="error-message" key={`error-${error.code}`}>
                <IoIosCloseCircleOutline />
                <small>{error.message}</small>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { CustomSelect };
