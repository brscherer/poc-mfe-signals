import React, { Suspense } from 'react';
import './App.css';
import withLazy from './withLazy';

const Counter = React.lazy(() => import("Counter/Counter"));

interface AppProps {
  count: number;
}

const App: React.FC<AppProps> = ({ count }) => {
  return (
    <div className="content">
      <Suspense fallback={null}>
        <h1>Remote Count is stored as: {count}</h1>
        <Counter />
      </Suspense>
    </div>
  );
};

export default withLazy(App, () => import("Counter/Store"), (module) => ({
  count: module.default.count
}));
