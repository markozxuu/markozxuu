// Packages
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Router from 'next/router';
import nprogress from 'nprogress';
import debounce from 'lodash.debounce';

// Components
import Head from '@components/Head';

// Styles
import '@styles/global.css';
import 'react-notion/src/styles.css';
import '@styles/notion.css';
import '@styles/syntax.css';

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

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider
    disableTransitionOnChange
    forcedTheme={(Component as any).theme || undefined}
    attribute="class"
    defaultTheme="light"
  >
    <Head />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
