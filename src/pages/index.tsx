import Link from 'next/link'
import Layout from '../components/Layout'
import ExtLink from '../components/ext-link'
import { StyledComponent } from '../styles/home.styled'

import { useState, useEffect } from 'react'
import blogStyles from '../styles/blog.module.css'

import { getBlogLink, getDateStr, postIsPublished } from '../lib/blog-helpers'
import { textBlock } from '../lib/notion/renderers'
import getNotionUsers from '../lib/notion/getNotionUsers'
import getBlogIndex from '../lib/notion/getBlogIndex'
// import { top } from "../images/alexander-sinn-KgLtFCgfC28-unsplash.jpg"

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()
  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map(slug => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map(post => {
    post.Authors = post.Authors.map(id => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
    },
    unstable_revalidate: 10,
  }
}

export default ({ posts = [], preview }) => {
  const [categoris, setCategoris] = useState(['ALL'])
  const [selectCategory, setSelectCategory] = useState('ALL')
  const [maxDisplayCount, setMaxDisplayCount] = useState(15)

  useEffect(() => {
    posts.map(post => {
      if (!categoris.includes(post.Category)) {
        setCategoris([...categoris, post.Category])
      }
    })
  }, [categoris])

  const moreMaxDisplayCount = () => {
    setMaxDisplayCount(maxDisplayCount + 10)
    window.scrollTo(0, window.pageYOffset - 100)
  }

  return (
    <Layout>
      <StyledComponent>
        <div className="concept">
          <img src="/top.jpg" style={{ width: '100%' }} />
          <h2>Technology × Psychology</h2>
        </div>
        {/* 記事一覧 */}
        <div className="posts">
          <div className="menu">
            <h2>Category</h2>
            <ul>
              {categoris.map((category, index) => (
                <li
                  key={index}
                  className={selectCategory === category ? 'active' : ''}
                  onClick={() => setSelectCategory(category)}
                >
                  {category}
                  {category === null && 'カテゴリなし'}
                </li>
              ))}
            </ul>
            {/* <ul>
            <h2>Tags：</h2>
            <li>Notion</li>
            <li>Notion Blog</li>
            <li>React</li>
            <li>Health</li>
          </ul> */}
          </div>
          <h2 style={{ marginLeft: '12px', fontWeight: 'bold' }}>記事一覧</h2>
          {/* カテゴリーのフィルター */}
          {posts
            .filter(post => {
              if (selectCategory === 'ALL') {
                return true
              } else {
                return post.Category === selectCategory
              }
            })
            .sort((a, b) => {
              {
                /* 記事を並べる */
              }
              if (a.Date < b.Date) return 1
              if (a.Date > b.Date) return -1
              return 0
            })
            .filter((_, index) => index < maxDisplayCount)
            .map(post => {
              return (
                <div className="post-card" key={post.Slug}>
                  <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                    <a>
                      {!post.Published && (
                        <span className={blogStyles.draftBadge}>Draft</span>
                      )}
                      <h3 className="post-title">{post.Page}</h3>
                      {post.Date && (
                        <p className="posted">
                          投稿日: {getDateStr(post.Date)}
                        </p>
                      )}
                      {post.Category && (
                        <p>
                          カテゴリ:
                          <span className="category">{post.Category}</span>
                          {/* Category名をclassNameにする */}
                        </p>
                      )}
                      {post.Tag && (
                        <ul className="tag-list">
                          <p>タグ:</p>
                          {post.Tag.split(',').map((tag, index) => (
                            <li className="tag-name" key={index}>
                              {tag}
                            </li>
                          ))}
                        </ul>
                      )}
                    </a>
                  </Link>
                </div>
              )
            })}
        </div>
        <button className="btn" onClick={moreMaxDisplayCount}>
          もっと見る
        </button>
      </StyledComponent>
    </Layout>
  )
}
