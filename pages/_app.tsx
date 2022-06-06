import type { AppProps } from 'next/app'

import "../styles/general.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
