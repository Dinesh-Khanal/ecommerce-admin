"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellActions from "./cellActions";

export interface BillboardColumn {
  id: string;
  label: string;
  createdAt: string;
}
export const columns: ColumnDef<BillboardColumn>[] = [
  {
    header: "Label",
    accessorKey: "label",
  },
  {
    header: "Created Date",
    accessorKey: "createdAt",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const billboards = row.original;
      return <CellActions data={billboards} />;
    },
  },
];
