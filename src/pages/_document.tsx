import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Days+One&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>RS</title>
        <meta name="description" content="Raphael Salayog Portfolio" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
