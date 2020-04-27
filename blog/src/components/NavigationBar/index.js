import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './styles.css';
import menuIcon from './menuIcon.svg';

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  function onRouteSelected() {
    setIsOpen(false);
  }

  return (
    <div className="navContainer">
      <div className="navIcon">
        <a href="#" onClick={() => {
          setIsOpen(!isOpen);
        }}>
          <img className="icon" src={menuIcon} alt="Menu icon"/>
        </a>
      </div>
      <div className={['navItems', isOpen?'navItemsOpen':'navItemsHidden'].join(' ')}>
        <Link to="/" onClick={onRouteSelected}>Home</Link>
        <Link to="/about" onClick={onRouteSelected}>About</Link>
        <Link to="/recipes" onClick={onRouteSelected}>Recipes</Link>
        <Link to="/" onClick={onRouteSelected}>Cosy home</Link>
        <Link to="/" onClick={onRouteSelected}>Contact</Link>
      </div>
    </div>
  )
}
