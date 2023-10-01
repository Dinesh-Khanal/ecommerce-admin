"use client";
import { ColumnDef } from "@tanstack/react-table";

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
];
