import React, { useEffect, useCallback, useRef, useState } from 'react';

const Dropdown = (props) => {
  // props
  const { targetRef, classes, placedOn, width, height, children } = props;

  // refs
  const dropdownRef = useRef();

  // state
  const [shouldShowDropdown, showDropdown] = useState(false);

  // side effects
  useEffect(() => {
    targetRef?.current?.addEventListener('mouseover', onMouseOver, false);

    return () => {
      targetRef?.current?.removeEventListener('mouseover', onMouseOver, false);
    };
  }, []);

  useEffect(() => {
    targetRef?.current?.addEventListener('mouseout', onMouseOut, false);

    return () => {
      targetRef?.current?.removeEventListener('mouseout', onMouseOut, false);
    };
  }, []);

  // handlers
  const onMouseOver = useCallback(() => {
    showDropdown(true);
  }, []);

  const onMouseOut = useCallback((event) => {
    if (dropdownRef.current) {
      if (
        targetRef?.current.contains(event.target) ||
        dropdownRef?.current.contains(event.target)
      ) {
        showDropdown(false);
      }
    }
  }, []);

  const getPosition = useCallback((position) => {
    const positions = {
      right: 'placed-on-right',
      center: 'placed-on-center',
    };

    return positions[position];
  }, []);

  return (
    <div
      className={`dropdown ${classes} ${
        shouldShowDropdown ? 'show' : 'hide'
      } ${getPosition(placedOn)}`}
      style={{
        width: width || '',
        height: height || '',
        bottom: `-${height}px` || '',
      }}
      ref={dropdownRef}
    >
      <div className="dropdown-content">{children}</div>
    </div>
  );
};

export { Dropdown };
