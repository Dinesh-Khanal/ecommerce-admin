"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Billboard } from "@prisma/client";
export const columns: ColumnDef<Billboard>[] = [
  {
    header: "Label",
    accessorKey: "label",
  },
  {
    header: "Image",
    accessorKey: "imageUrl",
  },
  {
    header: "Created Date",
    accessorKey: "createdAt",
  },
];
