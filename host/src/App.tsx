import React, { Suspense } from 'react';
import './App.css';
const Counter = React.lazy(() => import("Counter/Counter"));

const App = () => {
  return (
    <div className="content">
      <Suspense fallback={null}>
        <Counter />
      </Suspense>
    </div>
  );
};

export default App;
