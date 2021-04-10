// Packages
import { AppProps } from 'next/app';
import Router from 'next/router';
import nprogress from 'nprogress';
import debounce from 'lodash.debounce';

// Styles
import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import '@styles/global.css';

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
  <Component {...pageProps} />
);

export default MyApp;
