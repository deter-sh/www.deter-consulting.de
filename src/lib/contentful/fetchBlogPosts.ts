import type {EntryFieldTypes} from "contentful";
import { contentfulClient } from "@/lib/contentful/contentful.ts";
import type { BlogEntry } from "@/lib/contentful/interfaces/BlogEntry.ts";

export async function fetchBlogPosts () {
  const entries = await contentfulClient.getEntries<BlogEntry>({
    content_type: "blogEntry",
    order: "-fields.date"
  });

  const posts = entries.items.map((item) => {
    let categories = [];
    item.fields.category.forEach((category, index) =>  {
      categories.push( category.fields.title);
    });
    return {
      "title": item.fields.title,
      "slug": item.fields.slug,
      "image": item.fields.image.fields.file.url,
      "date":  item.fields.date,
      "author":  {
        "name": item.fields.author,
        "image": item.fields.authorImage.fields.file.url
      },
      "metaDescription": item.fields.metaDescription,
      "content": item.fields.content,
      "categories": categories
    };
  });

  return posts
}
