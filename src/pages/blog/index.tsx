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
  // console.log(posts)
  return (
    <>
      <Header titlePre="Blog" />
      {preview && (
        <div className={blogStyles.previewAlertContainer}>
          <div className={blogStyles.previewAlert}>
            <b>Note:</b>
            {` `}Viewing in preview mode{' '}
            <Link href={`/api/clear-preview`}>
              <button className={blogStyles.escapePreview}>Exit Preview</button>
            </Link>
          </div>
        </div>
      )}
      <StyledComponent>
        {/* <div className="menu">
          <ul>
            <h2>Category：</h2>
            <li>ALL</li>
            <li>Programming</li>
            <li>Psychology</li>
            <li>Life</li>
          </ul>
          <ul>
            <h2>Tags：</h2>
            <li>Notion</li>
            <li>Notion Blog</li>
            <li>React</li>
            <li>Health</li>
          </ul>
        </div> */}
        {posts.length === 0 && (
          <p className={blogStyles.noPosts}>There are no posts yet</p>
        )}
        {posts.map(post => {
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
