import React from 'react';
import { Header, Scheduler } from './components';
import { events, tables } from './data/data';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Scheduler events={events} tables={tables} />
      </div>
    </div>
  );
}

export default App;
