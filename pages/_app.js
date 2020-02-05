import App from 'next/app';
import Provider from '../context/Provider';
import React from 'react';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
          <Provider>
            <Component {...pageProps} />
          </Provider>
    );
  }
}

export default MyApp;