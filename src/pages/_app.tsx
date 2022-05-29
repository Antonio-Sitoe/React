import { AppProps } from 'next/app';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { GlobalStyle } from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
