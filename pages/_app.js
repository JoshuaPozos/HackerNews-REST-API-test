import HackerNewsProvider from 'context/HackerNewsContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <HackerNewsProvider>
      <Component {...pageProps} />
    </HackerNewsProvider>
  )
}

export default MyApp
