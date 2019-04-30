import React from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar'
import Info from "./components/Info"

function App() {
  return (
    <div className="App">
      <Searchbar />
      <Info />
    </div>
  );
}

export default App;
