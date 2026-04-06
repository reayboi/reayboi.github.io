export type PostType = 'text' | 'image';

export type Post = {
    type?: PostType;
    title: string;
    body: string;
    date: Date;
    images?: Array<string>;
    tags: Array<string>;
}

export type SortBy = 'newest' | 'oldest';