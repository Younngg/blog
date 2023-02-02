import '@/styles/globals.css';
import { MDXProvider } from '@mdx-js/react';
import type { AppProps } from 'next/app';
import Layout from './../components/Layout/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MDXProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
};

export default App;
