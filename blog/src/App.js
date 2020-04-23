import React from 'react';
import NavigationBar from './components/navigation_bar';
import "./App.css";

export default function App() {
  return(
    <div className="App">
      <header className="App-header">
        <h2>
          Daria's cosy stories
        </h2>
      </header>
      <NavigationBar/>
    </div>
  )
}
