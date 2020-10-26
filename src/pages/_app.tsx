import '../styles/reset.css'
import 'katex/dist/katex.css'
import { GlobalStyle } from '../styles/GlobalStyle'
import Router from 'next/router'
import * as gtag from '../lib/gtag'
import Layout from '../components/Layout'

export default ({ Component, pageProps }) => {
  Router.events.on('routeChangeComplete', url => gtag.pageview(url))
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
