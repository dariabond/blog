import React, {useState} from 'react';
import './styles.css'
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
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Recipes</a>
        <a href="#">Cosy home</a>
        <a href="#">Contact</a>
      </div>
    </div>
  )
}
