import React from 'react';
import {H1, Input, Main} from '@finite/components';
import './App.css';

function App() {
  return (
    <Main className="App">
      <H1>Hello world</H1>
      <Input type="text" value="" placeholder="Name" />
    </Main>
  );
}

export default App;
