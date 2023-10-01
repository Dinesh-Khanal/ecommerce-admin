import React from "react";
import BillboardClient from "./billboard-client/page";
import prisma from "@/lib/prisma";

export default async function BillboardPage({
  params,
}: {
  params: { storeId: string };
}) {
  const billboards = await prisma.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={billboards} />
      </div>
    </div>
  );
}
