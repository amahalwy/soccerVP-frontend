import React from 'react';
import { Global, css } from '@emotion/core';
import { theme } from '@chakra-ui/core';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { ReactQueryCacheProvider, QueryCache, useQuery } from 'react-query';
import { Hydrate } from 'react-query/hydration'
import Head from 'next/head'
import Nav from '../components/nav';
import '../styles/styles.css';
import "react-datetime/css/react-datetime.css";

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
          background: #eee;
        }

        #__next {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: #eee;
        }
      `}
    />
  );
};

function MyApp({ Component, pageProps }) {

  const queryCache = new QueryCache({
    defaultConfig: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>SoccerVP</title>

        <script src="https://www.paypal.com/sdk/js?client-id=Aadlj71Rm2jESJjR1RNen8CSn6Yc3cSNRhRZmbIHAz1CzFOJuD59ICkbS9XxEvwv0DpAhpQ8_1YyJZGR&currency=USD&disable-funding=credit,card" />
        {/* <link rel="stylesheet" href="node_modules/react-responsive-carousel/lib/styles/carousel.min.css"/> */}
        {/* <script src="https://www.paypalobjects.com/api/checkout.js"  data-log-level="error" /> */}
        
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