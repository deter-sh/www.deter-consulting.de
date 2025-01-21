import type {EntryFieldTypes} from "contentful";

export interface BlogEntry {
    contentTypeId: "blogEntry",
    fields: {
        title: EntryFieldTypes.Text,
        slug: EntryFieldTypes.Text,
        image: EntryFieldTypes.AssetLink,
        date: EntryFieldTypes.Date,
        metaDescription: EntryFieldTypes.Text,
        author: EntryFieldTypes.Text,
        authorImage: EntryFieldTypes.AssetLink,
        content: EntryFieldTypes.RichText
    }
}
