import Document, { Html, Head, Main, NextScript } from 'next/document'

/**
 * `MyDocument` component is used for implementing server side rendering for `css-in-js` libraries.
 * Changes that occur here will affect the entire page.
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Material+Icons&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
