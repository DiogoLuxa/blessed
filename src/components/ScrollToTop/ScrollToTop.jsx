import React, { useEffect } from 'react';

import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return null;
};

export default ScrollToTop;
