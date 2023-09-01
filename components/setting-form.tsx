"use client";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Store } from "@prisma/client";

export default function SettingForm({ store }: { store: Store }) {
  return (
    <>
      <Heading title="Setting" description="management for your store" />
      <Separator />
      <p className="mx-8">Name: {store.name}</p>
    </>
  );
}
