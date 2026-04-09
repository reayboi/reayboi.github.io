import { useEffect, useState, type ReactNode } from 'react'
import type { Post } from '../../types/types'
import { getPosts } from '../../api/contentful'
import { PostsContext } from '../context/posts-context'

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Array<Post>>([])

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts))
  }, [])

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
