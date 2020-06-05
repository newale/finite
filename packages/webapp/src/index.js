import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import {Layouts, GlobalStyle} from '@finite/components';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = {
  backgroundColor: 'black',
};
ReactDOM.render(
  <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Layouts.Basic>
        <App />
      </Layouts.Basic> */}
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
