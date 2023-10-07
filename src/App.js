import React from 'react';
import './App.css';
import Kalkulaator from './components/Kalkulaator';
import Jaljendus from './components/Jaljendus';

function App() {
  return (
    <div className="App">
      <h1>Testing Updated!</h1>
      <div data-testid="kiht1">abc</div>
      <Kalkulaator />
      <Jaljendus />
    </div>
  );
}


export default App;
