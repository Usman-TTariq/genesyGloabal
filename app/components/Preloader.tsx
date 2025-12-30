'use client';

import { useEffect, useState } from 'react';
import Genelogo from './svg/genelogo';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader">
      <div className="loading-container">
        <div className="loading"></div>
        <div id="loading-icon">
          {/* <img src="/images/loader.svg" alt="" /> */}
          <Genelogo className="navbar-brand-logo" />
        </div>
      </div>
    </div>
  );
}
