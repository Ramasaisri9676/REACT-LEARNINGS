// src/App.js
import React from 'react';
import { Welcome, Greeting } from './Tasks/Task1'; // Correct Import for Task1 components
import './App.css';  // Import your CSS for styling

function App() {
  return (
    <div>
      <h1>WELCOME</h1>
      <Welcome />
      <Greeting name="Rama Saisri" />
    </div>
  );
}

export default App;
