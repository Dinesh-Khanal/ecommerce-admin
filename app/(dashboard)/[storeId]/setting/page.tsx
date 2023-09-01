import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function SettingPage({
  params,
}: {
  params: { storeId: string };
}) {
  const { storeId } = params;
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const store = await prisma.store.findFirst({
    where: { id: storeId, userId },
  });
  if (!store) {
    redirect("/");
  }
  return <div>SettingPage of {store.name}</div>;
}
