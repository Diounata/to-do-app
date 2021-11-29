import Head from 'next/head';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
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
