import { getCollection } from "astro:content";

export async function getSortedPosts() {
    const allPosts = await getCollection('posts', ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true
    })

    const sorted = allPosts.sort((a, b) => {
        const dateA = new Date(a.data.pubDate)
        const dateB = new Date(b.data.pubDate)
        return dateA > dateB ? -1 : 1
    })

    return sorted;
}