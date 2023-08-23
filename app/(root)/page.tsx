import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex justify-between px-16 py-2 bg-slate-900 text-white">
      <h2>Ecommerce Admin</h2>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
