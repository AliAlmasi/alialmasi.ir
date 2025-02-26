import { Html, Head, Main, NextScript } from "next/document";

export default async function Document() {
  return (
    <Html className="w-full h-full">
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/api/manifest" />
        <meta name="description" content={process.env.description} />
        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://alialmasi.ir" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={process.env.author} />
        <meta property="og:description" content={process.env.description} />
        <meta property="og:image" content="/ogp.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="alialmasi.ir" />
        <meta property="twitter:url" content="https://alialmasi.ir" />
        <meta name="twitter:title" content={process.env.author} />
        <meta name="twitter:description" content={process.env.description} />
        <meta name="twitter:image" content="/ogp.png" />
      </Head>
      <body className="antialiased w-full h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
