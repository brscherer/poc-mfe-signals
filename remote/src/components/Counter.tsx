import React from 'react';
import Store from '../../../store/src/index'

const Counter: React.FC = () => {

  const increment = () => {
    console.log({Store})
    Store.count.value++
  };

  const decrement = () => {
    Store.count.value--
  };

  return (
    <div>
      <h1>Counter: {Store.count.value}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;