"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export default function MainNav({
  className,
  ...rest
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();
  const routes = [
    {
      href: `/${params.storeId}/setting`,
      label: "Settings",
      active: pathname === `/${params.storeId}/setting`,
    },
  ];
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "font-medium text-sm transition-colors",
            route.active
              ? "text-black dark:text-white"
              : "text-gray-500 hover:text-black dark:hover:text-white"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
