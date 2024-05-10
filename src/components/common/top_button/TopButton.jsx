import React, { useState, useEffect } from 'react';
import styles from './TopButton.module.css'
import 'animate.css'

const TopButton = ({ showAfter }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= showAfter) {
        setIsShown(true);
      } else {
        setIsShown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showAfter]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isShown) return null;

  return (
    <button onClick={handleClick} className={`${styles.top_button} animate__animated animate__fadeInUp`}>TOP</button>
  );
};

export default TopButton;
