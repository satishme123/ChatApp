import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"
import ChatProvider from './Context/ChatProvider';
import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  base: '0em',
  sm: '30em',
  md: '55em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}

const theme = extendTheme({ breakpoints })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <ChatProvider theme={theme}>
  <ChakraProvider>
  <App />
  </ChakraProvider>
  </ChatProvider>
  </BrowserRouter>
 
);
