import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import CardOne from './components/CardOne';
import Button from './components/button';
import CardTwo from './components/CardTwo';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col space-y-2">
        <CardOne />
        <CardTwo />
        <Button />
      </div>
    </div>
  );
}

export default App;
