import './sort.css'
import { usePosts } from '../../state-context/context/posts-context'
import type { Post, SortBy } from '../../types/types'
import { sortByDateAscending, sortByDateDescending } from '../../utils/sort'
import { useEffect, useState } from 'react'

const sortBy = (type: 'oldest' | 'newest', posts: Array<Post>) => {
  let sorted: Array<Post> = []
  switch (type) {
    case 'newest':
      sorted = sortByDateAscending(posts)
      console.log('newest', sorted)
      return sorted
    case 'oldest':
      sorted = sortByDateDescending(posts)
      console.log('oldest', sorted)
      return sorted
    default:
      return posts
  }
}

export const Sort = () => {
  const { posts, setPosts } = usePosts()
  const [sortByType, setSortByType] = useState<SortBy>('newest')

  useEffect(() => {
    setPosts(sortBy(sortByType, posts))
  }, [sortByType, posts, setPosts])

  return (
    <div className="sort">
      <span>sort by:</span>
      <button onClick={() => setSortByType('newest')}>newest</button>
      <button onClick={() => setSortByType('oldest')}>oldest</button>
    </div>
  )
}
