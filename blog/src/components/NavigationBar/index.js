import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import styles from './styles.css';
import menuIcon from './menuIcon.svg';

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  function onRouteSelected() {
    setIsOpen(false);
  }

  return (
    <div className={styles.navContainer}>
      <div className={styles.navIcon}>
        <a href="#" onClick={() => {
          setIsOpen(!isOpen);
        }}>
          <img className={styles.icon} src={menuIcon} alt="Menu icon"/>
        </a>
      </div>
      <div className={[styles.navItems, isOpen?styles.navItemsOpen:styles.navItemsHidden].join(' ')}>
        <Link to="/" onClick={onRouteSelected}>Home</Link>
        <Link to="/about" onClick={onRouteSelected}>About</Link>
        <Link to="/recipes" onClick={onRouteSelected}>Recipes</Link>
        <Link to="/" onClick={onRouteSelected}>Cosy home</Link>
        <Link to="/" onClick={onRouteSelected}>Contact</Link>
      </div>
    </div>
  )
}
