import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header />
    <div style={{ padding: '30px' }}>
      <p>まずね,Notionがすごいので,聞いてください.</p>
    </div>
    <Footer />
  </>
)
