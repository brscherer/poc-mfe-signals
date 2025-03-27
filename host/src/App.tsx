import React, { Suspense } from 'react';
import './App.css';
// import Store from "Counter/Store";

const Counter = React.lazy(() => import("Counter/Counter"));
const Store = React.lazy(() => import("Counter/Store"));

const App = () => {
  return (
    <div className="content">
      <Suspense fallback={null}>
        {console.log(Store)}
        <h1>Remote Count is stored as: {Store.count}</h1>
        <Counter />
      </Suspense>
    </div>
  );
};

export default App;
