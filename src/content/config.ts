import { glob } from "astro/loaders";
import { z, reference, defineCollection } from "astro:content";

const articles = defineCollection({
  loader: glob({
    pattern: ["**/*.md", "**/*.mdx"],
    base: "./src/content/articles",
  }),
  schema: ({ image }) =>
    z.object({
      cover: image().nullable().optional(),
      coverAlt: z.string().optional(),
      title: z.string(),
      slug: z.string(),
      snippet: z.string(),
      category: z.string(),
      pubDate: z.coerce.date(),
      readingDuration: z.number(),
      originalLink: z.string().url().nullable().optional(),
      isDraft: z.boolean().default(false),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default("Retro Rocket Team"),
      relatedArticles: z.array(reference("articles")).optional(),
      mermaid: z.boolean().default(false),
    }),
});

export const collections = { articles };
