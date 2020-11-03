import React from 'react';
import { Global, css } from '@emotion/core';
import { theme } from '@chakra-ui/core';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { ReactQueryCacheProvider, QueryCache } from 'react-query';
import { Hydrate } from 'react-query/hydration'
import Head from 'next/head'

{/* <script src="https://www.paypal.com/sdk/js?client-id=sb" /> */}

import Nav from '../components/nav';

const queryCache = new QueryCache();

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
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <script src="https://www.paypal.com/sdk/js?client-id=sb" />
      </Head>
      <CSSReset />
      <GlobalStyle />
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Hydrate state={pageProps.dehydratedState}>
          <Nav />
          <Component {...pageProps} />
        </Hydrate>
      </ReactQueryCacheProvider>
    </ThemeProvider>
  );
}

export default MyApp;
