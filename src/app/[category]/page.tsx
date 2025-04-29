import { getDatabaseItems } from "@/lib/notion";
import ListPage from "@/components/ListPage";

type Props = {
  params: { category: string };
};

export default async function CategoryPage({ params }: Props) {
  const { category } = params;
  const databaseId = process.env.NOTION_DATABASE_ID!;

  // 카테고리별 필터링
  const items = await getDatabaseItems(databaseId, { category });

  return <ListPage items={items} category={category} />;
}
