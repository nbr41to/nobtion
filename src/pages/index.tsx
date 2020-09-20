import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import ExtLink from '../components/ext-link'
import { StyledComponent } from '../styles/home.styled'

// import { top } from "../images/alexander-sinn-KgLtFCgfC28-unsplash.jpg"

export default () => (
  <>
    <Header />
    <StyledComponent>
      <img src="/top.jpg" style={{ width: '100%' }} />
      <h2>Technology × Psychology</h2>
      <p>
        なんとNotionがBlogになりました.Reactの可能性がつながった瞬間です.そんな素晴らしいノートアプリNotionの紹介ページはこちら↓
      </p>
      <ExtLink href="https://www.notion.so/nob41to/About-Notion-6e8c4ac4a64e44959d8d9f6629d4f9f5">
        ＊About Notion
      </ExtLink>
    </StyledComponent>
  </>
)
