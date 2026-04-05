import './feed.css';
import { Post } from "../post/post";
import { posts } from '../../content/data';


export const Feed = () => {
    //fetch blog - static for now
    return (
        <div className='feed'>
            {posts.map((post) => <Post title={post.title} body={post.body} date={post.date} tags={post.tags} />)}
        </div>
    );
}