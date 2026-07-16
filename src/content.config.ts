import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    order: z.number().default(10),
    deliverables: z.array(z.string()).default([]),
    banner: z.string().optional(),
  }),
});

const successes = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/successes' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    service: z.string(),
    year: z.string(),
    outcome: z.string(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    link: z.string().optional(),
    linkLabel: z.string().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdoc', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    excerpt: z.string(),
  }),
});

export const collections = { services, successes, posts };
