import { auth } from "@clerk/nextjs";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import Navbar from "@/components/navbar";
export default async function DashboardLayout({
  params,
  children,
}: {
  params: { storeId: string };
  children: React.ReactNode;
}) {
  const { storeId } = params;
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const store = await prisma.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });
  if (!store) {
    redirect("/");
  }
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
