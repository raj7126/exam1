import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [resetCount, setResetCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => {
    setCount(0);
    setResetCount(prev => prev + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">React Counter App</h1>

      <div className="text-5xl font-semibold mb-4">{count}</div>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>

      <div className="text-lg">
        <span className="font-medium">Reset Count:</span> {resetCount}
      </div>
    </div>
  );
};

export default App;