import prisma from "@/lib/prisma";

export default async function DashboardPage({
  params,
}: {
  params: { storeId: string };
}) {
  const { storeId } = params;
  const store = await prisma.store.findFirst({ where: { id: storeId } });
  return <div>{`This will be dashboard of ${store?.name}`}</div>;
}
