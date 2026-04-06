export type Post = {
    title: string;
    body: string;
    date: Date;
    tags: Array<string>;
}

export type SortBy = 'newest' | 'oldest';