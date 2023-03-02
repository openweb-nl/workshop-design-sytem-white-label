import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from "./components/buttons/Button";
import FAQ from "./components/faq/FAQ";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo"/>

      <div data-company={'openweb'} data-mode={'light'}>
        <Button>Open web light</Button>
      </div>
      <div data-company={'openweb'} data-mode={'dark'}>
        <Button>Open web dark</Button>
      </div>
      <div data-company={'pauwels'} data-mode={'light'}>
        <Button>Pauwels light</Button>
      </div>
      <div data-company={'pauwels'} data-mode={'dark'}>
        <Button>Pauwels dark</Button>
      </div>
      <div data-company={'openweb'} data-mode={'light'}>
        <FAQ title='My question'>My Answer</FAQ>
        <FAQ title='Where can i login?'>You can login <a href='login'>here</a></FAQ>
      </div>
      <div data-company={'openweb'} data-mode={'dark'}>
        <FAQ title='My question'>My Answer</FAQ>
        <FAQ title='Where can i login?'>You can login <a href='login'>here</a></FAQ>
      </div>
      <div data-company={'pauwels'} data-mode={'light'}>
        <FAQ title='My question'>My Answer</FAQ>
        <FAQ title='Where can i login?'>You can login <a href='login'>here</a></FAQ>
      </div>
      <div data-company={'pauwels'} data-mode={'dark'}>
        <FAQ title='My question'>My Answer</FAQ>
        <FAQ title='Where can i login?'>You can login <a href='login'>here</a></FAQ>
      </div>
    </div>
  );
}

export default App;
