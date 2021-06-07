import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import {Provider} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ChakraProvider, extendTheme} from "@chakra-ui/react"

const theme = extendTheme(
  {
    styles:
    {
      global:
      {
        'html, body':
        {
          backgroundColor: 'rgb(255, 255, 255)'
        }
      }
    }
  }
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>

    <App />
    </ChakraProvider>

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
