import React from 'react';
import { Global, css } from '@emotion/core';
import { theme } from '@chakra-ui/core';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { ReactQueryCacheProvider, QueryCache, useQuery } from 'react-query';
import { Hydrate } from 'react-query/hydration'
import Head from 'next/head'
import Nav from '../components/nav';
import '../styles/styles.css';

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

const API_HOST = process.env.NODE_ENV === 'production' ? 'production_url' : 'http://localhost:5000';

const makeUrl = (path) => `${API_HOST}${path}`;


function MyApp({ Component, pageProps }) {

  if (typeof window !== "undefined") {
    const getCurrentUser = (key, access_token) => fetch(makeUrl('/current_user'), {
      headers: {
        Authorization: localStorage.jwtToken
      },
      access_token
    }).then(r => r.json())
    const { isLoading, error, data } = useQuery(['user'], getCurrentUser);
    if (isLoading) return 'Loading...';
    if (error) return 'An error has occurred: ' + error.message;
  }

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
