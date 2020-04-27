import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import './styles.css';
import menuIcon from './menuIcon.svg';

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

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
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/">Cosy home</Link>
        <Link to="/">Contact</Link>
      </div>
    </div>
  )
}
