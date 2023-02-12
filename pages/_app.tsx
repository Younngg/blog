import '@/styles/globals.css';
import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import Layout from './../components/Layout/Layout';
import Loading from './../components/Loading/Loading';

const App = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(false);
  const headerRef = useRef<HTMLHeadElement>(null);

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

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  const onScroll = () => {
    const HEADER_HEIGHT = headerRef.current?.clientHeight || 0;
    if (window.scrollY >= HEADER_HEIGHT) {
      headerRef.current?.classList.add('small');
    } else {
      headerRef.current?.classList.remove('small');
    }
  };

  return (
    <MDXProvider>
      <Layout headerRef={headerRef}>
        {loading && <Loading />}
        <Component {...pageProps} onWheel={onScroll} />
      </Layout>
    </MDXProvider>
  );
};

export default App;
