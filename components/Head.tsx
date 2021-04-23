// Packages
import NextHead from 'next/head';
import { useTheme } from 'next-themes';

const defaultImage =
  'https://res.cloudinary.com/diametra/image/upload/f_auto,q_auto/v1618267949/markozxuu/images/markozxuu_card_kcyowr.png';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
}

const Head = ({
  title = 'Markoz Peña',
  description = "Hi, I'm Markoz. Frontend developer :)",
  image = defaultImage,
  children,
}: Props) => {
  const { systemTheme } = useTheme();
  return (
    <NextHead>
      {/* Font */}
      <link
        rel="preload"
        href="/fonts/inter-var-latin.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Images */}
      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />

      {/* URL */}
      <meta name="og:url" content="https://markozxuu.com" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@markozxuu" />
      <meta name="apple-mobile-web-app-title" content="Markoz" />
      <meta name="author" content="Markoz Peña" />

      {/* RSS feed */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS for feed markozxuu.sh"
        href="/atom.xml"
      />

      {/* Favicons */}
      <meta name="theme-color" content="#000000" />
      <link rel="icon" href="/favicons/favicon.ico" />
      <link
        rel="apple-touch-icon"
        href="https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/180x180.png"
      />
      <link rel="manifest" href="/favicons/manifest.json" />

      {/* Dynamic favicon */}
      {systemTheme === 'dark' ? (
        <link rel="icon" type="image/svg+xml" href="/favicons/dark.svg" />
      ) : (
        <link rel="icon" type="image/svg+xml" href="/favicons/light.svg" />
      )}
      {children}
    </NextHead>
  );
};

export default Head;
