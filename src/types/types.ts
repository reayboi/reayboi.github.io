import type { ReactNode } from 'react'

export type PostType = 'text' | 'image'

export type Post = {
  type?: PostType
  title: string
  body: string | ReactNode
  date: Date
  images?: Array<ContentfulImage> | null
  tags: Array<string>
}

export type SortBy = 'newest' | 'oldest'

export type ContentfulImage = {
  fields: {
    title: string
    description: string
    file: {
      contentType: string
      details: {
        size: number
        image: {
          width: number
          height: number
        }
      }
      fileName: string
      url: string
    }
  }
  metadata: {
    tags: Array<any>
    concepts: Array<any>
  }
  sys: {
    space: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    id: string
    type: string
    createdAt: Date | string
    updatedAt: Date | string
    environment: {
      sys: {
        id: string
        type: string
        linkType: string
      }
    }
    publishedVersion: number
    revision: number
    locale: string
  }
}
