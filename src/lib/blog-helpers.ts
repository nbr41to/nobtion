export const getBlogLink = (slug: string) => {
  return `/blog/${slug}`
}

export const getDateStr = date => {
  const d = new Date(date)
  const DateTimeFormat = 'YYYY/MM/DD'
  let time = DateTimeFormat.replace(/YYYY/g, String(d.getFullYear()))
    .replace(/MM/g, ('0' + (d.getMonth() + 1)).slice(-2))
    .replace(/DD/g, ('0' + d.getDate()).slice(-2))
  return time
  // return new Date(date).toLocaleString('en-US', {
  //   month: 'long',
  //   day: '2-digit',
  //   year: 'numeric',
  // })
}
const d = new Date() // Today
const DateTimeFormat = 'YYYY/MM/DD hh:mi:ss' // "2019/10/04 12:34:56"
let time = DateTimeFormat.replace(/YYYY/g, String(d.getFullYear()))
  .replace(/MM/g, ('0' + (d.getMonth() + 1)).slice(-2))
  .replace(/DD/g, ('0' + d.getDate()).slice(-2))
  .replace(/hh/g, ('0' + d.getHours()).slice(-2))
  .replace(/mi/g, ('0' + d.getMinutes()).slice(-2))
  .replace(/ss/g, ('0' + d.getSeconds()).slice(-2))

export const postIsPublished = (post: any) => {
  return post.Published === 'Yes'
}

export const normalizeSlug = slug => {
  if (typeof slug !== 'string') return slug

  let startingSlash = slug.startsWith('/')
  let endingSlash = slug.endsWith('/')

  if (startingSlash) {
    slug = slug.substr(1)
  }
  if (endingSlash) {
    slug = slug.substr(0, slug.length - 1)
  }
  return startingSlash || endingSlash ? normalizeSlug(slug) : slug
}
