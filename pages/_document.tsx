import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <link rel="shortcut icon" href="/only_logo_color.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
