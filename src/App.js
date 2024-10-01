import React from 'react';
import './App.css';  // Import CSS for styling
import { Welcome, Greeting } from './Tasks/Task1';  // Import your previous task components
import Counter from './Tasks/Task2';
import OnClick from './Tasks/Task3';  // Import the new Counter component

function App() {
  return (
    <div className="App">
      <h1>WELCOME</h1>
      <Welcome />
      <Greeting name="Rama Saisri" />
      <Counter />  {/* Adding the Counter component */}
      <OnClick />
    </div>
  );
}

export default App;
