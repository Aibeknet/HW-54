import React from 'react';
import Game from './components/GameBoard';
import './App.css';

const App: React.FC = () => {
  return (
      <div className="container">
        <Game />
      </div>
  );
};

export default App;

