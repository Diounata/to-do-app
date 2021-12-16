import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/main.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>to-do-app</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
