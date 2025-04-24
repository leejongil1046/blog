// src/app/page.tsx
import { getDatabaseItems } from "@/lib/notion";
import ClientPage from "@/app/ClientPage"; // 클라이언트 컴포넌트

export default async function Home() {
  const databaseId = process.env.NOTION_DATABASE_ID!;
  const items = await getDatabaseItems(databaseId);

  return <ClientPage items={items} />;
}
