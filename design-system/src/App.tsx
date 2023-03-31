import React from 'react';
import './App.scss';
import { Button } from './components/atoms/Button';

function App() {
  return (
    <main className="App" data-made="light">
      <div data-brand={'openweb'}>
        <div data-mode={'light'}>
          <Button>Open web light</Button>
        </div>
        <div data-mode={'dark'}>
          <Button>Open web dark</Button>
        </div>
      </div>
      <div data-brand={'tessa'} data-mode={'light'}>
        <Button>Tessa light</Button>
      </div>
      <div data-brand={'tessa'} data-mode={'dark'}>
        <Button>Tessa dark</Button>
      </div>
    </main>
  );
}

export default App;
