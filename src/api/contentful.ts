import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import client from "../contenful";
import type { Post } from "../types/types";

export const fetchPosts = async (pageLimit: number = 10) => await client.getEntriesWithCursor({ limit: pageLimit }).then((data) => { return data }).catch((error) => console.error(error));

export const getPosts = async (): Promise<Array<Post>> => {
    const response = await fetchPosts().then((data) => { return data?.items });
    const posts = await response?.map((post: any) => {
        const { title, body, date, tags, type, images } = post.fields;
        return {
            title,
            body: typeof body === 'string' ? body: documentToReactComponents(body),
            date: new Date(date),
            tags,
            images,
            type
        }
    })
    return posts || [];
}
