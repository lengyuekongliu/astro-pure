import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getSortedPosts } from '../utils/content-utils';

export async function GET(context) {
	const posts = await getSortedPosts();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			pubDate: post.data.date,
			link: `/posts/${post.slug}/`,
		})),
	});
}
