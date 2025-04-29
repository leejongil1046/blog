import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

type GetDatabaseItemsOptions = {
  category?: string;
};

export async function getDatabaseItems(
  databaseId: string,
  options?: GetDatabaseItemsOptions
) {
  const filters = options?.category
    ? {
        property: "category",
        select: {
          equals: options.category,
        },
      }
    : undefined;

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: filters,
    sorts: [
      {
        property: "date",
        direction: "descending",
      },
    ],
  });

  return response.results;
}
