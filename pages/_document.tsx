import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class ZiningWebsiteDocument extends Document {

  public render() {
    return <Html>
        <Head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymus"/>
            <link href="https://fonts.googleapis.com/css2?family=Tiro+Gurmukhi&display=swap" rel="stylesheet"/> 
            <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet"/> 
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&family=Shadows+Into+Light&display=swap" rel="stylesheet"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" async/>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>;
  }
}
