import './feed.css'
import { Post } from '../post/post'
import { useEffect, useRef } from 'react'
import type { Post as PostType } from '../../types/types'
import { ImagePost } from '../post/image/image-post'
import { useFilters } from '../../state/hooks/use-filters'
import { usePosts } from '../../state/hooks/use-posts'

const filterPosts = (
  posts: Array<PostType>,
  filters: Array<string>,
): Array<PostType> => {
  if (filters.length < 1) {
    return posts
  }
  const filteredPosts = posts.filter((post) => {
    if (post.tags.some((tag) => filters.includes(tag))) {
      return post
    }
  })
  return filteredPosts
}

export const Feed = () => {
  const { filters } = useFilters()
  const filterRef = useRef(filters.length)

  const { posts, setPosts } = usePosts()
  const postsCopy = useRef(posts)

  const loading: boolean = posts.length === 0

  useEffect(() => {
    if (filterRef.current !== filters.length && postsCopy.current.length > 0) {
      const filteredPosts = filterPosts(postsCopy.current, filters)
      setPosts(filteredPosts)
      filterRef.current = filters.length
    } else if (filters.length === 0 && postsCopy.current.length > 0) {
      setPosts(postsCopy.current)
    }
  }, [posts, setPosts, filters])

  useEffect(() => {
    if (postsCopy.current.length === 0 && posts.length > 0) {
      postsCopy.current = posts
    }
  }, [posts])

  return (
    <div className="feed">
      {loading ? (
        <>loading</>
      ) : (
        <>
          {posts.map((post) =>
            post?.type === 'image' ? (
              <ImagePost
                key={post.title}
                title={post.title}
                body={post.body}
                date={post.date}
                tags={post.tags}
                images={post.images!}
              />
            ) : (
              <Post
                key={post.title}
                title={post.title}
                body={post.body}
                date={post.date}
                tags={post.tags}
              />
            ),
          )}
        </>
      )}
    </div>
  )
}
