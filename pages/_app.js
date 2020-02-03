import App, { Container } from 'next/app';
import Provider from '../context/Provider';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
          <Provider>
            <Component {...pageProps} />
          </Provider>
      </Container>
    );
  }
}

export default MyApp;