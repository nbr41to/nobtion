import '../styles/reset.css'
import 'katex/dist/katex.css'
import { GlobalStyle } from '../styles/GlobalStyle'
import Header from '../components/header'
import Footer from '../components/footer'

export default ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <Component {...pageProps} />
    <Footer />
  </>
)
