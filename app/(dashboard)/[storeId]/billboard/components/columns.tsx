"use client";
import { Button } from "@/components/ui/button";
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
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const billboards = row.original;
      return (
        <Button
          variant="ghost"
          onClick={() => navigator.clipboard.writeText(billboards.id)}
        >
          Copy Id
        </Button>
      );
    },
  },
];
