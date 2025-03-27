import React, { Suspense } from 'react';
import Store from "../../store/src/index";
import './App.css';

const Counter = React.lazy(() => import("Counter/Counter"));

const App: React.FC = () => {
  return (
    <div className="content">
      <Suspense fallback={null}>
        <h1>Remote Count is stored as: {Store.count.value}</h1>
        <Counter />
      </Suspense>
    </div>
  );
};

export default App
