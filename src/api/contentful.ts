import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import client from '../contenful'
import type { Post } from '../types/types'
import { sortByDateAscending } from '../utils/sort'

export const fetchPosts = async (pageLimit: number = 10) =>
  await client
    .getEntriesWithCursor({ limit: pageLimit })
    .then((data) => {
      return data
    })
    .catch((error) => console.error(error))

export const getPosts = async (): Promise<Array<Post>> => {
  const response = await fetchPosts().then((data) => {
    return data?.items
  })
  const posts: Array<Post> | undefined = await response?.map((post: any) => {
    const { title, body, date, tags, type, images } = post.fields
    return {
      title,
      body: typeof body === 'string' ? body : documentToReactComponents(body),
      date: new Date(date),
      tags: tags.map((tag: string) => String(tag).toLocaleLowerCase()),
      images,
      type,
    } as Post
  })
  const orderedPosts = sortByDateAscending(posts)
  return orderedPosts || []
}
