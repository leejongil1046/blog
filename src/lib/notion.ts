import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function getDatabaseItems(databaseId: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results;
}
