// Packages
import NextHead from 'next/head';
import { useTheme } from 'next-themes';

const defaultImage =
  'https://res.cloudinary.com/diametra/image/upload/v1616447851/markozxuu/images/markozxuu_g3sckv.png';

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
      <meta name="og:url" content="https://markozxuu.now.sh" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@markozxuu" />
      <meta name="apple-mobile-web-app-title" content="Markoz" />
      <meta name="author" content="Markoz Peña" />

      {/* Favicons */}
      <meta name="theme-color" content="#000000" />
      <link
        rel="apple-touch-icon"
        href="https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/180x180.png"
      />
      <link rel="manifest" href="/favicons/manifest.json" />

      {/* Dynamic favicon */}
      {systemTheme === 'dark' ? (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/dark.png"
            key="dynamic-favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/dark.svg"
            key="dynamic-favicon"
          />
        </>
      ) : (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/light.png"
            key="dynamic-favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/light.svg"
            key="dynamic-favicon"
          />
        </>
      )}
      {children}
    </NextHead>
  );
};

export default Head;
