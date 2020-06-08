import React from 'react';
import './App.css';
import Add from './Math.js';

function App({name}) {
  return (
    <div className="App">
      <h1>Welcome</h1>
     <p> Hello <strong>{name}</strong></p>
    <p>Cities of Pakistan</p>
    <ol>
      <li>Karachi</li>
      <li>Islamabad</li>
      <li>Peshawar</li>
      <li>Quetta</li>
    </ol>
    <p>List of Stationary Items</p>
    <ul>
      <li>Pencil</li>
      <li>Stappler</li>
      <li>Pages</li>
      <li>Paper Clips</li>
    </ul>
    <Add a={5} b={6}/>
    </div>
  );
}

export default App;
