import {createGlobalStyle} from 'styled-components';
import {colors, typography} from './tokens';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Jost&family=Roboto+Slab&display=swap');

  html, body {
    background: ${colors.ceruleanBlue};
    font-family: ${typography.defaultFamily};
    margin: 0;
    padding: 0;

    @media (prefers-color-scheme: dark) {
      background: var(--color-2);
    }
    @media (prefers-color-scheme: light) {
      background: lightgrey;
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  h1 {
    font-size: 46px;
    line-height: 1.1;
  } 
`

export default GlobalStyle;
