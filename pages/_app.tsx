import '@/styles/globals.css';
import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from './../components/Layout/Layout';
import Loading from './../components/Loading/Loading';

const App = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <MDXProvider>
      <Layout>
        {loading && <Loading />}
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
};

export default App;
