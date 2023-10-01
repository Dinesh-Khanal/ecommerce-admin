import React from "react";
import BillboardClient from "./components/client";
import prisma from "@/lib/prisma";
import { format } from "date-fns";

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
  const formattedBillboard = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, "MMM dd, yyyy"),
  }));
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={formattedBillboard} />
      </div>
    </div>
  );
}
