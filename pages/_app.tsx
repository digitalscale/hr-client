/* eslint-disable react/jsx-props-no-spreading */

import React from "react";
import Head from "next/head";
import { Provider as BumbagProvider, css } from "bumbag";
import { ApolloProvider } from "@apollo/client";
import { createGlobalStyle } from "styled-components";

import { useApollo } from "lib/apolloClient";
import "@babel/polyfill";

const GlobalStyle = createGlobalStyle`
	#__next {
		height: 100%;
	}
	html {
		height: 100%;
	}
	body {
		margin: 0px;
		width: 100%;
		height: 100%;
	}
	.hint{
		background-color: #924FD1;
		cursor: pointer;
	}
`;

const theme = {
  global: {
    styles: {

    },
  }
};

interface Props {
  Component: React.FC;
  pageProps: any;
}

export default function App({ Component, pageProps }: Props) {
  return (

    <BumbagProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </BumbagProvider>
  );
}
