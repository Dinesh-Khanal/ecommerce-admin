import CategoryForm from "../components/category-form";
import prisma from "@/lib/prisma";

export default async function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  const categoryId = params.categoryId;
  const category = await prisma.category.findUnique({
    where: { id: categoryId },
  });
  const billboards = await prisma.billboard.findMany();
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm billboards={billboards} initialData={category} />
      </div>
    </div>
  );
}
