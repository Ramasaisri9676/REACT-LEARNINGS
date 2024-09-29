
import React from 'react';

// Welcome Component
export function Welcome() {
  return <h1>Welcome to React Learning!</h1>;
}

// Greeting Component
export function Greeting(props) {
  return <h2>Hello, {props.name}!</h2>;
}
