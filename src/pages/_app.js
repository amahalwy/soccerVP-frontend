import '../styles/globals.css';
import React from "react";
import { theme } from "@chakra-ui/core";
import { Provider } from 'react-redux'
import { useStore } from '../redux/store'
import { ThemeProvider } from "@chakra-ui/core";
import Nav from '../components/nav';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Nav/>
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
  )
}


export default MyApp
