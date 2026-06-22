import React from 'react';
import ChartComponent from './ChartComponent';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Trading Chart</h1>
      <ChartComponent />
    </div>
  );
}

export default App;
