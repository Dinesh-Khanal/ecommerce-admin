import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-12 flex items-center px-8 border-b">
      <div>this will be store switcher</div>
      <div>this will be main router</div>
      <div className="flex items-center ml-auto ">
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
