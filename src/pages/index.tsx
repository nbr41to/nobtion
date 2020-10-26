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
  const [selectCategory, setSelectCategory] = useState('ALL')
  const [categoris, setCategoris] = useState(['ALL'])
  useEffect(() => {
    posts.map(post => {
      if (!categoris.includes(post.Category)) {
        setCategoris([...categoris, post.Category])
      }
    })
  }, [categoris])
  console.log(categoris)

  const changeCategory = category => {
    setSelectCategory(category)
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
          {/* 記事の有無の判別？ */}
          {posts.filter(post => {
            if (selectCategory === 'ALL') {
              return true
            } else {
              return post.Category === selectCategory
            }
          }).length === 0 && (
            <p className="nopost-message">記事がありません。</p>
          )}
          {/* 記事を並べる */}
          {posts
            .filter(post => {
              if (selectCategory === 'ALL') {
                return true
              } else {
                return post.Category === selectCategory
              }
            })
            .map(post => {
              return (
                <div className="post-card" key={post.Slug}>
                  <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                    <a>
                      {!post.Published && (
                        <span className={blogStyles.draftBadge}>Draft</span>
                      )}
                      <h3 className="post-title">{post.Page}</h3>
                      {/* 書いた人 */}
                      {/* {post.Authors.length > 0 && (
                  <div className="authors">By: {post.Authors.join(' ')}</div>
                )} */}
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
      </StyledComponent>
    </Layout>
  )
}
