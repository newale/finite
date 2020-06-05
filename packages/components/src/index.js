import React from "react";
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './globalStyle';

const Header = () => (<header>this is header</header>);
const Footer = () => (<footer>this is footer</footer>);
const Main = ({children}) => (<main id="main">{children}</main>);
const BasicLayout = ({children}) => (<>{children}</>);
const CMSLayout = ({children}) => (<><Header />{children}<Footer /></>);
const Themer = ({children, theme}) => (<ThemeProvider theme={theme}>{children}</ThemeProvider>);

const Input = ({type,value}) => (<input type={type} value={value} />);
const H1 = ({children}) => (<h1>{children}</h1>);

const Layouts = {
  Basic: BasicLayout,
  CMS: CMSLayout,
}

export {
  GlobalStyle,
  Layouts,
  Themer,
  Header,
  Footer,
  Main,
  H1,
  Input,
};
