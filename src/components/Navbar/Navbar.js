import React, { useState, useEffect } from 'react';

import classes from './Navbar.module.css';
import SearchIcon from '../UI/SearchIcon';
const Navbar = () => {
  const [hasScroll, setHasScroll] = useState(false);

  const navbarClasses = `${classes.navbar} ${
    hasScroll ? classes['navbar-fill'] : ''
  }`;

  // Search Button Handler function
  const searchHandler = (event) => {
    event.preventDefault();
    window.location.replace('/search');
  };

  //  Scroll Event Listener
  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) {
        setHasScroll(true);
      } else {
        setHasScroll(false);
      }
    };
    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className={classes['navbar-container']}>
      <div className={navbarClasses}>
        <a href="/" className={classes['navbar-header']}>
          Movie App
        </a>
        <button className={classes['btn-search']} onClick={searchHandler}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
