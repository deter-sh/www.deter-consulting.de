import type {EntryFieldTypes} from "contentful";

export interface Customer {
    contentTypeId: "customer",
    fields: {
        customerName: EntryFieldTypes.Text,
        slug: EntryFieldTypes.Text,
        logo: EntryFieldTypes.AssetLink
        description: EntryFieldTypes.RichText
    }
}
