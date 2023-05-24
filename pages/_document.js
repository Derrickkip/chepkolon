import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Sorts+Mill+Goudy&display=swap" rel="stylesheet"/>
            <Script src="https://kit.fontawesome.com/c49b637cf1.js" />
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