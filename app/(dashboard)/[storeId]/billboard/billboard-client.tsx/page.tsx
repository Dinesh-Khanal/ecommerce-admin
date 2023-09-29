"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/ui/heading";
import { useParams, useRouter } from "next/navigation";
import { Billboard } from "@prisma/client";

export default function BillboardClient({ data }: { data: Billboard[] }) {
  const { storeId } = useParams();
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboard(${data.length})`}
          description="manage billboard for your store"
        />
        <Button onClick={() => router.push(`/${storeId}/billboard/new`)}>
          <Plus className="mr-4 w-4 h-4" />
          Add new
        </Button>
      </div>
      <Separator />
    </>
  );
}
