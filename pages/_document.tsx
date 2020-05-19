// Packages
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

const STORAGE_KEY = 'markoz-light-mode';
const APP_NAME = 'markozxuu';
const APP_DESCRIPTION = 'Personal website and blog';

const MagicScript = () => {
  const codeToRunClient = `
    (function() {
       function getInitialColor() {
          const userColorPreferences = window.localStorage.getItem('${STORAGE_KEY}');
          const isPersistedPreference = typeof userColorPreferences === 'string';
            if(isPersistedPreference) {
              return userColorPreferences;
            }
          const mql = window.matchMedia('(prefers-color-scheme: dark)');
          const isMediaQueryPreference = typeof mql.matches === 'boolean';
            if(isMediaQueryPreference) {
              return mql.matches ? 'dark' : 'light'
            }
          return 'light';
       }
       const colorMode = getInitialColor();
       if(colorMode === 'light') {
         document.querySelector('html').className = 'light'; 
       }
     })()
  `;
  return <script dangerouslySetInnerHTML={{ __html: codeToRunClient }} />;
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="description" content={APP_DESCRIPTION} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/maskable_icon.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
        </Head>
        <body>
          <MagicScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
