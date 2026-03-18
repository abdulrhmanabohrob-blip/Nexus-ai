import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00f5d4" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
