import React from 'react';
import { Global, css } from '@emotion/core';
import { theme } from '@chakra-ui/core';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Nav from '../components/nav';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ::selection {
          background-color: #47a3f3;
          color: #fefefe;
        }

        html {
          min-width: 360px;
          scroll-behavior: smooth;
        }

        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: white;
        }
      `}
    />
  );
};

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <GlobalStyle />
      <Provider store={store}>
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
