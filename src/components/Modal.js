import React, { useCallback, useEffect, useRef } from 'react';
// icons
import { FiX } from 'react-icons/fi';
// styles
import '../styles/modal.scss';

const Modal = ({ visible, onClose, children, classes }) => {
  const modalRef = useRef();
  const modalContentRef = useRef();

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
        onClose();
      }
    }
  }, []);

  if (visible) {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
    return null;
  }

  return (
    <div ref={modalRef} className="modal">
      <div ref={modalContentRef} className={`modal-content ${classes}`}>
        <button type="button" className="close-icon" onClick={onClose}>
          <FiX />
        </button>
        {children}
      </div>
    </div>
  );
};

export { Modal };
