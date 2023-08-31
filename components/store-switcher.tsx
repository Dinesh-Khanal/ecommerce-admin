"use client";
import { useState } from "react";
import { Store } from "@prisma/client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Store as StoreIcon, ChevronsUpDown } from "lucide-react";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useParams, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Command, CommandGroup, CommandItem } from "./ui/command";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;
interface StoreSwitcherProps extends PopoverTriggerProps {
  items: Store[];
}

export default function StoreSwitcher({
  className,
  items,
}: StoreSwitcherProps) {
  const params = useParams();
  const router = useRouter();
  const formattedItem = items.map((item) => ({
    label: item.name,
    value: item.id,
  }));
  const currentStore = formattedItem.find(
    (item) => item.value === params.storeId
  );
  const [open, setOpen] = useState(false);
  const onStoreSelect = (store: { value: string; label: string }) => {
    setOpen(false);
    router.push(`/${store.value}`);
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-[200px] justify-between">
          <StoreIcon />
          {currentStore ? currentStore?.label : "Select store"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandGroup heading="Stores">
            {formattedItem.map((store) => (
              <CommandItem
                key={store.value}
                onSelect={() => onStoreSelect(store)}
                className="text-sm"
              >
                {store.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
