import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const milestones = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/milestones' }),
    schema: z.object({
        number: z.number(),
        title: z.string(),
        status: z.enum(['planned', 'in-progress', 'done']),
        start: z.date(),
        end: z.date(),
        summary: z.string(),
        deliverables: z.array(z.object({ title: z.string(), status: z.string()})).default([]),
    }),
});

const minutes = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/minutes' }),
    schema: z.object({
        index: z.number(),
        date: z.date(),
        summary: z.string(),
        deliverables: z.array(z.object({ title: z.string(), status: z.string()})).default([]),
    }),
});

const team = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
    schema: z.object({
        name: z.string(),
        initials: z.string(),
        role: z.string(),
        focus: z.string().optional(),
        github: z.string().url().optional(),
        linkedin: z.string().url().optional(),
        order: z.number(),
    }),
});

export const collections = { milestones, minutes, team };