import { getCollection } from "astro:content";

export async function getSortedPosts() {
    const allPosts = await getCollection('posts', ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true
    })

    const sorted = allPosts.sort((a, b) => {
        const dateA = new Date(a.data.date)
        const dateB = new Date(b.data.date)
        return dateA > dateB ? -1 : 1
    })

    return sorted;
}

export async function getTagList() {
    const allPosts = await getCollection('posts', ({ data }) => {
        return import.meta.env.PROD ? data.draft !== true : true
    })

    const countMap: { [key: string]: number } = {}
    allPosts.map(post => {
        post.data.tags?.map(tag => {
            if (!countMap[tag]) countMap[tag] = 0;
            countMap[tag]++;
        })
    })

    const keys: string[] = Object.keys(countMap).sort((a, b) => {
        return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
    })

    return keys.map(key => ({ name: key, count: countMap[key] }))
}
