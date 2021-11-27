import Script from 'next/script'

// Import library and global styles here.
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      {/* Load scripts from third-party here. */}
      <Script src="https://kit.fontawesome.com/a4efd995d2.js" />
    </>
  )
}

export default MyApp
