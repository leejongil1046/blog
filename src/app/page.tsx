import { getDatabaseItems } from "@/lib/notion";
import HomePage from "@/app/HomePage";

export default async function Home() {
  const databaseId = process.env.NOTION_DATABASE_ID!;
  const items = await getDatabaseItems(databaseId);

  return <HomePage items={items} />;
}
