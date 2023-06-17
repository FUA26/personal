import { Head, Html, Main, NextScript } from 'next/document';
import { Inter } from 'next/font/google';
const defaultMeta = {
  title: 'Fatih U A',
  siteName: 'Fatihua.com',
  description: 'Fatih Ulil Albab personal website ',
  url: 'https://fatihua.com',
  image: 'https://fatihua.com/favicon/favicon-32x32.png',
  type: 'website',
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>{defaultMeta.title}</title>
        <meta content={defaultMeta.description} name="description" />
        <meta property="og:url" content={`${defaultMeta.url}`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
