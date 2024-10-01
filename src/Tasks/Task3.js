import React from 'react';

function OnClick() {
  // Event handler function for the button
  function eventHandler() {
    alert('GeeksforGeeks is the best platform to learn coding!');
  }

  return (
    <div className='App'>
      <h1>Welcome to GeeksforGeeks</h1>
      {/* Add onClick event to the button */}
      <button onClick={eventHandler}>Click for alert!</button>
    </div>
  );
}

export default OnClick;
