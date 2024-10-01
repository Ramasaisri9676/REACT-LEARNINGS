import React from 'react';
import './App.css';  // Import CSS for styling
import { Welcome, Greeting } from './Tasks/Task1';  // Import your previous task components
import Counter from './Tasks/Task2';  // Import the new Counter component

function App() {
  return (
    <div className="App">
      <h1>WELCOME</h1>
      <Welcome />
      <Greeting name="Rama Saisri" />
      <Counter />  {/* Adding the Counter component */}
    </div>
  );
}

export default App;
