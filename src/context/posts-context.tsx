import { createContext, type ReactNode, useContext, useState } from 'react';
import type { Post } from '../types/types';
import { data } from '../content/data';


type PostsContextType = {
  posts: Array<Post>;
  setPosts: (posts: Array<Post>) => void;
};

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Array<Post>>(data);

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error('usePosts must be used within a PostsProvider');
  }
  return context;
};