import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import ExtLink from '../components/ext-link'
// import { top } from "../images/alexander-sinn-KgLtFCgfC28-unsplash.jpg"

export default () => (
  <>
    <Header />
    <div>
      <img src="/top.jpg" style={{ width: '100%' }} />
      <p>まずね,Notionがすごいので,聞いてください.</p>
    </div>
    <Footer />
  </>
)
