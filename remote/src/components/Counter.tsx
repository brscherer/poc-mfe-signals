import React, { useEffect } from 'react';
import useLazyLoad from '../hooks/useLazyLoad';
const loadStore = () => import('Host/Store')

const Counter: React.FC = () => {
  const [isLoading, load, [Store]] = useLazyLoad([loadStore])

  useEffect(() => {
    load()
  }, [load])
  const increment = () => {
    console.log({Store})
    Store.count.value++
  };

  const decrement = () => {
    Store.count.value--
  };

  return (
    <div>
      <h1>Counter: {Store?.count ?? 0}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;