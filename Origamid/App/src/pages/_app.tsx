import { AppProps } from 'next/app';
// import Footer from '../Components/Footer';
// import Header from '../Components/Header';
import { GlobalStyle } from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
