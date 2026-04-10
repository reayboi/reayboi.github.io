import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import client from '../contenful'
import type { Post } from '../types/types'
import { sortByDateAscending } from '../utils/sort'
import managementClient from '../contentful-management'

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

export const createPost = async (
  title: string,
  body: string,
  tags: Array<string>,
  type: 'text' | 'image' = 'text',
) => {
  return await managementClient
    .getSpace(import.meta.env.VITE_CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment('master'))
    .then((environment) =>
      environment.createEntry('post', {
        fields: {
          title: {
            'en-US': title,
          },
          date: {
            'en-US': new Date(),
          },
          body: {
            'en-US': {
              nodeType: 'document',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  data: {},
                  content: [
                    {
                      nodeType: 'text',
                      value: body,
                      marks: [],
                      data: {},
                    },
                  ],
                },
              ],
            },
          },
          tags: {
            'en-US': tags,
          },
          type: {
            'en-US': type,
          },
        },
      }),
    )
    .then((entry) => {
      return entry.publish()
    })
    .catch((error) => {
      console.error('there was an error ahhhhh', error)
      return undefined
    })
}
