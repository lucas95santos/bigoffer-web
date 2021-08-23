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

const CustomInput = ({
  icon: Icon,
  type,
  name,
  value,
  onTextChange,
  onFocus,
  placeholder,
  errors,
  classes,
  bordered,
  uppercase,
  autocomplete,
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

  // useEffect(() => {
  //   checkInputValid();
  // }, [isFocused, value, hasErrors]);

  // handlers
  // const checkInputValid = useCallback(() => {
  //   setIsValid(!hasErrors && value !== '');
  // }, [isFocused, value, hasErrors]);

  const getInputStyle = () => {
    if (isFocused && !hasErrors) return inputStatus.ON_FOCUS;

    if (hasErrors) return inputStatus.ON_ERROR;

    // if (isValid) return inputStatus.ON_VALID;

    return '';
  };

  return (
    <div
      className={`custom-input ${uppercase && 'uppercase'} ${getInputStyle()} ${
        bordered && 'full-border'
      } ${classes}`}
    >
      {Icon && <Icon />}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onTextChange}
        onFocus={(event) => {
          setFocus(true);
          if (onFocus) onFocus(event.target.name);
        }}
        onBlur={() => {
          setFocus(false);
          if (onFocus) onFocus('');
        }}
        onInvalid={() => setHasErrors(true)}
        autoComplete={autocomplete}
        {...rest}
      />
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

export { CustomInput };
