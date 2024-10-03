import React from 'react';
import './App.css';  // Import CSS for styling
import { Welcome, Greeting } from './Tasks/Task1';  // Import your previous task components
import Counter from './Tasks/Task2';
import OnClick from './Tasks/Task3';  // Import the new Counter component
import { ChangeName } from './Tasks/Task4';
import Counters from './Tasks/Task5';
import FocusInput from './Tasks/Task6';

function App() {
  return (
    <div className="App">
      <h1>WELCOME</h1>
      <Welcome />
      <Greeting name="Rama Saisri" />
      <Counter />  {/* Adding the Counter component */}
      <OnClick />
      <ChangeName />

      <Counters />
      
      <FocusInput />
    </div>
  );
}

export default App;
