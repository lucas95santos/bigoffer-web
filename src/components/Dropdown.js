import React, { useEffect, useCallback, useRef, useState } from 'react';
// deve ser capaz de receber uma largura e uma altura, mas ter um valor padrão para ambas
// deve ser capaz de receber um posicionamento, mas já iniciar centralizado

const Dropdown = (props) => {
  // props
  const { targetRef, classes, children } = props;

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

  return (
    <div
      className={`dropdown ${classes} ${shouldShowDropdown ? 'show' : 'hide'}`}
      ref={dropdownRef}
    >
      <div className="dropdown-content">{children}</div>
    </div>
  );
};

export { Dropdown };
