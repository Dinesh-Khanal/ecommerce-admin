"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellActions from "./cellActions";

export interface CategoryColumn {
  id: string;
  name: string;
  billboardLabel: string;
  createdAt: string;
}
export const columns: ColumnDef<CategoryColumn>[] = [
  {
    header: "Category Name",
    accessorKey: "name",
  },
  {
    header: "Billboard",
    accessorKey: "billboard",
    cell: ({ row }) => {
      return row.original.billboardLabel;
    },
  },
  {
    header: "Created Date",
    accessorKey: "createdAt",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const categories = row.original;
      return <CellActions data={categories} />;
    },
  },
];
