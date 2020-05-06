import React, {StrictMode, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import NavigationBar from './components/NavigationBar';

import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';
import BlogPost from './pages/BlogPost';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <StrictMode>
      <Header/>
      <Router>
        <NavigationBar setMenuOpen={setIsOpen} isOpen={isOpen}/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About data={initialAppData.about}/>
          </Route>
          <Route exact path="/recipes">
            <Recipes setMenuOpen={setIsOpen}/>
          </Route>
          <Route exact path="/recipes/:id">
            <BlogPost/>
          </Route>
        </Switch>
      </Router>
    </StrictMode>
  )
}

const initialAppData = {
  about: "Hi! My name is D. I am very happy to share my love to cosy home starting from the smell of the favourite homemade healthy dishes and continuing with making your place feel more like home.",
  contact: {
    email: "myemail@gmail.com"
  }
}
