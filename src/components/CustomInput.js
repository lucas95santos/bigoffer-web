import React, { useState, useEffect, useCallback } from 'react';
// icons
// eslint-disable-next-line no-unused-vars
import { MdErrorOutline } from 'react-icons/md';

const inputStatus = {
  ON_FOCUS: 'focus',
  ON_ERROR: 'error',
  ON_VALID: 'valid',
};

const CustomInput = ({
  icon: Icon,
  type,
  value,
  onTextChange,
  placeholder,
  errors,
  classes,
  rest,
}) => {
  // state
  const [isFocused, setFocus] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [hasErrors, setHasErrors] = useState(errors.length > 0);

  // side effects
  useEffect(() => {
    setHasErrors(errors.length > 0);
  }, [errors]);

  useEffect(() => {
    checkInputValid();
  }, [isFocused, value, hasErrors]);

  // handlers
  const checkInputValid = useCallback(
    (externalCondition = true) => {
      setIsValid(!hasErrors && value !== '' && externalCondition);
    },
    [isFocused, value, hasErrors],
  );

  const getInputStyle = () => {
    if (isFocused && !hasErrors && !isValid) return inputStatus.ON_FOCUS;

    if (hasErrors) return inputStatus.ON_ERROR;

    if (isValid) return inputStatus.ON_VALID;

    return '';
  };

  return (
    <div className={`custom-input ${getInputStyle()} ${classes}`}>
      {Icon && <Icon />}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onTextChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onInvalid={() => setHasErrors(true)}
        {...rest}
      />
      <div className="error-container">
        <MdErrorOutline
          className={`error-icon ${!hasErrors ? 'invisible-icon' : ''}`}
        />
      </div>
    </div>
  );
};

export { CustomInput };
