import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		updated: z.coerce.date().optional(),
		draft: z.boolean().optional(),
		tags: z.string().array().optional()
	}),
});

export const collections = { posts };
