import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.css';
import menuIcon from './menuIcon.svg';

export default function NavigationBar(props) {

  function onRouteSelected() {
    props.setMenuOpen(false);
  }

  return (
    <div className={styles.navContainer}>
      <div className={styles.navIcon}>
        <a href="#" onClick={() => {
          props.setMenuOpen(!props.isOpen);
        }}>
          <img className={styles.icon} src={menuIcon} alt="Menu icon"/>
        </a>
      </div>
      <div className={[styles.navItems, props.isOpen?styles.navItemsOpen:styles.navItemsHidden].join(' ')}>
        <Link to="/" onClick={onRouteSelected}>Home</Link>
        <Link to="/about" onClick={onRouteSelected}>About</Link>
        <Link to="/recipes" onClick={onRouteSelected}>Recipes</Link>
        <Link to="/cosyhome" onClick={onRouteSelected}>Cosy home</Link>
        <Link to="/contact" onClick={onRouteSelected}>Contact</Link>
      </div>
    </div>
  );
}
