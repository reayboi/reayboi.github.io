import type { Post } from "../types/types";

export const sortByDateAscending = (posts: Array<Post> | undefined) => {
    if(!posts) return [];
    return posts.sort(function(a, b) {
        return b.date.valueOf() - a.date.valueOf();
    });
}

export const sortByDateDescending = (array: Array<any>) => {
    return array.sort(function(a, b) {
        return Date.parse(a.date) - Date.parse(b.date);
    });
}
