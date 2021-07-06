import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Router from 'next/router';
import nprogress from 'nprogress';
import debounce from 'lodash.debounce';

import Head from '@components/Head';

import '@styles/global.css';
import 'react-notion/src/styles.css';
import '@styles/notion.css';
import '@styles/syntax.css';

//Hooks
import { useAnalytics } from '@lib/use-analytics';

// Only show nprogress after 500ms (slow loading)
const start = debounce(nprogress.start, 500);

Router.events.on('routeChangeStart', start);

Router.events.on('routeChangeComplete', () => {
  start.cancel();
  nprogress.done();
  window.scrollTo(0, 0);
});

Router.events.on('routeChangeError', () => {
  start.cancel();
  nprogress.done();
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  useAnalytics();
  return (
    <ThemeProvider
      disableTransitionOnChange
      forcedTheme={(Component as any).theme || undefined}
      attribute="class"
      defaultTheme="system"
    >
      <Head />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
