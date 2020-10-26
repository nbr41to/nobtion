import Link from 'next/link'
import Head from 'next/head'
import ExtLink from '../../ext-link'
import { useRouter } from 'next/router'
import { StyledComponent } from './header.styled'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'About', page: '/about' },
  { label: 'Contact', page: '/contact' },
]

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <StyledComponent>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} noblog</title>
        <meta
          name="description"
          content="Notion Blog で TechBlog を始めました.プログラミング,心理学,健康,その他の内容を記録してます"
        />
        <meta name="og:title" content="noblog" />
        <meta property="og:image" content="/site-logo.jpg" />
        <meta name="twitter:site" content="@Knob_nbr41to" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/site-logo.jpg" />
        <link rel="apple-touch-icon" href="/site-logo.jpg" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/earlyaccess/notosansjp.css"
        />
      </Head>
      <div className="header-container">
        <Link href="/">
          <h1>noblog</h1>
          {/* <img className="site-logo" src="/title-logo.jpg" /> */}
        </Link>
        <h2>〜 脳の可塑性が失われる前に 〜</h2>
      </div>
      <div className="menu-container">
        <ul>
          {navItems.map(({ label, page, link }) => (
            <li key={label}>
              {page ? (
                <Link href={page}>
                  <a className={pathname === page ? 'active' : undefined}>
                    {label}
                  </a>
                </Link>
              ) : (
                <ExtLink href={link}>{label}</ExtLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </StyledComponent>
  )
}
