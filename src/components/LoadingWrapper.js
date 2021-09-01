import React, { useState, useEffect } from 'react';
// loading
import Loading from 'react-loading';

const LoadingWrapper = ({ visible, children }) => {
  // state
  const [loadingShouldBeStopped, stopLoading] = useState(false);
  const [contentShouldBePresented, showContent] = useState(false);

  // side effects
  useEffect(() => {
    const loadingTime = 1000;

    if (!visible) {
      showContent(true);
      setTimeout(() => {
        stopLoading(true);
      }, loadingTime);
    } else {
      stopLoading(false);
      showContent(false);
    }
  }, [visible]);

  const stoppedLoadingStyles = {
    display: 'none',
    visibility: 'hidden',
    pointerEvents: 'none',
    overflowY: 'auto',
    zIndex: 0,
  };

  const loadingStyles = {
    display: 'flex',
    overflowY: 'hidden',
    zIndex: 9999,
  };

  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#f0f0fa',
          position: 'fixed',
          top: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          ...(loadingShouldBeStopped ? stoppedLoadingStyles : loadingStyles),
        }}
      >
        <Loading type="bubbles" color="#1565c0" width={80} height={80} />
      </div>
      {contentShouldBePresented && children}
    </>
  );
};

export { LoadingWrapper };
