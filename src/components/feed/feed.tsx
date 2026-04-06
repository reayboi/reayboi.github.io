import './feed.css';
import { Post } from "../post/post";
import { useFilters } from '../../context/filters-context';
import { useEffect, useRef } from 'react';
import { usePosts } from '../../context/posts-context';
import type { Post as PostType } from "../../types/types"

export const filterPosts = (posts: Array<PostType>, filters: Array<string>): Array<PostType> => {
    if (filters.length < 1) {
        return posts;
    }
     const filteredPosts = posts.filter((post) => {
        if(post.tags.some((tag) => filters.includes(tag))) {
            return post;
        }
    })
    return filteredPosts;
}

export const Feed = () => {
    const { filters } = useFilters();
    const filterRef = useRef(filters.length);
    
    const { posts, setPosts } = usePosts()
    const postsCopy = useRef(posts)

    console.log('post updated in feed')

    useEffect(() => {
        if (filterRef.current !== filters.length) {
            const filteredPosts = filterPosts(postsCopy.current, filters);
            setPosts(filteredPosts);
            filterRef.current = filters.length;
        } else if (filters.length === 0) {
            setPosts(postsCopy.current);
        }
    }, [posts, setPosts, filters])
    
    return (
        <div className='feed'>
            {/* <h2 className='feed-heading'>All Posts  </h2> */}
            {posts.map((post) => <Post key={post.title} title={post.title} body={post.body} date={post.date} tags={post.tags} />)}
        </div>
    );
}