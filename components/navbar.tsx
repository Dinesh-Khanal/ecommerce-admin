import { UserButton } from "@clerk/nextjs";
import MainNav from "./main-nav";

const Navbar = () => {
  return (
    <div className="h-12 flex items-center px-8 border-b">
      <div>this will be store switcher</div>
      <MainNav className="mx-6" />
      <div className="flex items-center ml-auto ">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
