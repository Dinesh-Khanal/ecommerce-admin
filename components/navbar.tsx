import { UserButton } from "@clerk/nextjs";
import MainNav from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import prisma from "@/lib/prisma";

const Navbar = async () => {
  const items = await prisma.store.findMany();
  return (
    <div className="h-12 flex items-center px-8 border-b">
      <StoreSwitcher items={items} />
      <MainNav className="mx-6" />
      <div className="flex items-center ml-auto ">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
