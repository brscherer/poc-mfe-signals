import React from 'react';
import { signal } from '@preact/signals-react';

const count = signal(0)

const Counter: React.FC = () => {

  const increment = () => {
    count.value += 1
  };

  const decrement = () => {
    count.value -= 1
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;