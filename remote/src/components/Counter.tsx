import React from 'react';
import Store from "../store/global";

const Counter: React.FC = () => {

  const increment = () => {
    Store.count.value++
  };

  const decrement = () => {
    Store.count.value--
  };

  return (
    <div>
      <h1>Counter: {Store.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;