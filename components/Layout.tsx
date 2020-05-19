// Packages
import React from 'react';
import Head from 'next/head';

// Components
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Head>
        <title>Markoz Peña</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <style jsx>{`
        div {
          margin: auto;
          padding: 4rem 1rem 0;
          max-width: 38rem;
        }
      `}</style>
      <div>{children}</div>
    </main>
  );
};

export default Layout;
