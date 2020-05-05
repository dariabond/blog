import React, {StrictMode} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/Header';
import NavigationBar from './components/NavigationBar';

import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';
import BlogPost from './pages/BlogPost';

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
