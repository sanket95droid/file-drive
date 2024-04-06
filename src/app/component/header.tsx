import { Button } from "@/components/ui/button";
import {
  OrganizationSwitcher,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="w-full top-0 sticky backdrop-blur-sm bg-transparent border-b-slate-400 border-b-[1px] h-16 flex flex-row justify-between items-center">
      <div className="text-black p-4 font-bold">
        <Link href="/">
          <h1>File-Drive</h1>
        </Link>
      </div>
      <div className="flex flex-row p-2 gap-1 items-center">
        <SignedIn>
          <div className="gap-2 flex mt-2">
            <OrganizationSwitcher />
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <Button className="bg-white text-black hover:text-white hover:bg-gray-400 duration-300 rounded-full">
            <SignInButton />
          </Button>
          <Button className="bg-white text-black hover:text-white hover:bg-gray-400 duration-300 rounded-full">
            <SignUpButton />
          </Button>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Header;
