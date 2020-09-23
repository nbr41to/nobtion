import { useState } from 'react'
import Link from 'next/link'
import Header from '../../components/header'
import Footer from '../../components/footer'

import { StyledComponent } from '../../styles/blog.styled'
import blogStyles from '../../styles/blog.module.css'
import sharedStyles from '../../styles/shared.module.css'

import {
  getBlogLink,
  getDateStr,
  postIsPublished,
} from '../../lib/blog-helpers'
import { textBlock } from '../../lib/notion/renderers'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import getBlogIndex from '../../lib/notion/getBlogIndex'

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
  const [selectCategory, setSelectCategory] = useState('all')

  const changeCategory = category => {
    setSelectCategory(category)
  }
  console.log(posts)
  return (
    <>
      <Header titlePre="Blog" />
      <StyledComponent>
        <div className="menu">
          <h2>Category</h2>
          <ul>
            <li
              className={selectCategory === 'all' ? 'active' : ''}
              onClick={() => setSelectCategory('all')}
            >
              ALL
            </li>
            <li
              className={selectCategory === 'Programming' ? 'active' : ''}
              onClick={() => setSelectCategory('Programming')}
            >
              {' '}
              Programming
            </li>
            <li
              className={selectCategory === 'Psychology' ? 'active' : ''}
              onClick={() => setSelectCategory('Psychology')}
            >
              Psychology
            </li>
            <li
              className={selectCategory === 'Life' ? 'active' : ''}
              onClick={() => setSelectCategory('Life')}
            >
              Life
            </li>
          </ul>
          {/* <ul>
            <h2>Tags：</h2>
            <li>Notion</li>
            <li>Notion Blog</li>
            <li>React</li>
            <li>Health</li>
          </ul> */}
        </div>
        {posts.filter(post => {
          if (selectCategory === 'all') {
            return true
          } else {
            return post.Category === selectCategory
          }
        }).length === 0 && <p className="nopost-message">記事がありません。</p>}
        {posts
          .filter(post => {
            if (selectCategory === 'all') {
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
                      <p className="posted">投稿日: {getDateStr(post.Date)}</p>
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

                    {/* <p>
                    {(!post.preview || post.preview.length === 0) &&
                      'No preview available'}
                    {(post.preview || []).map((block, idx) =>
                      textBlock(block, true, `${post.Slug}${idx}`)
                    )}
                  </p> */}
                  </a>
                </Link>
              </div>
            )
          })}
      </StyledComponent>
      <Footer />
    </>
  )
}
