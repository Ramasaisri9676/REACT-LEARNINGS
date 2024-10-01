import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' and a function to update it 'setCount'
  const [count, setCount] = useState(0);

  // Function to handle button click
  const handleIncrement = () => {
    setCount(count + 1);  // Increment count by 1
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
