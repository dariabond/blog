import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Home from '../../pages/home';
import About from '../../pages/about';
import Recipes from '../../pages/recipes';

import './styles.css';
import menuIcon from './menuIcon.svg';

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
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

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/recipes">
          <Recipes/>
        </Route>
      </Switch>
    </Router>
  )
}
