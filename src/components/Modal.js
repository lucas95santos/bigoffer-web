import React, { useCallback, useEffect, useRef, useState } from 'react';
// icons
import { FiX } from 'react-icons/fi';

const Modal = ({ visible, onClose, children, classes }) => {
  const modalRef = useRef();
  const modalContentRef = useRef();

  const [isOut, setIsOut] = useState(false);

  useEffect(() => {
    document.addEventListener('click', onOutsideClick, false);

    return () => {
      document.removeEventListener('click', onOutsideClick, false);
    };
  }, []);

  const onOutsideClick = useCallback((event) => {
    if (modalRef.current && modalContentRef.current) {
      if (
        modalRef.current.contains(event.target) &&
        !modalContentRef?.current.contains(event.target)
      ) {
        handleClose();
      }
    }
  }, []);

  const handleClose = () => {
    setIsOut(true);

    setTimeout(() => {
      onClose();
      setIsOut(false);
    }, 350);
  };

  if (visible) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
    return null;
  }

  return (
    <div ref={modalRef} className={`modal ${isOut ? 'modal-out' : ''}`}>
      <div
        ref={modalContentRef}
        className={`modal-content ${
          isOut ? 'modal-content-out' : ''
        } ${classes}`}
      >
        <button type="button" className="close-icon" onClick={handleClose}>
          <FiX />
        </button>
        {children}
      </div>
    </div>
  );
};

export { Modal };
