import { createContext } from 'react'
import type { Post } from '../../types/types'

type PostsContextType = {
  posts: Array<Post>
  setPosts: (posts: Array<Post>) => void
}

export const PostsContext = createContext<PostsContextType | undefined>(
  undefined,
)
