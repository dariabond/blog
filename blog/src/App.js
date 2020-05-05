import React, {StrictMode} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import NavigationBar from './components/NavigationBar';

import Home from './pages/home';
import About from './pages/about';
import Recipes from './pages/recipes';
import BlogPost from './pages/post';

export default function App() {
  return(
    <StrictMode>
      <Header/>
      <Router>
        <NavigationBar/>
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
          <Route exact path="/recipes/:id">
            <BlogPost/>
          </Route>
        </Switch>
      </Router>
    </StrictMode>
  )
}
