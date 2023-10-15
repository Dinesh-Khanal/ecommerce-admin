"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { useParams, useRouter } from "next/navigation";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { CategoryColumn } from "./columns";

export default function CategoryClient({ data }: { data: CategoryColumn[] }) {
  const { storeId } = useParams();
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Category(${data.length})`}
          description="manage category for your store"
        />
        <Button onClick={() => router.push(`/${storeId}/category/new`)}>
          <Plus className="mr-4 w-4 h-4" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="label" />
    </>
  );
}
