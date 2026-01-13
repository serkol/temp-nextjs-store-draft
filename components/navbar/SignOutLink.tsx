"use client";

import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { toast } from "sonner";

function SignOutLink() {
  function handleLogOut() {
    toast("Logout Successfull");
  }

  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogOut}>
        Logout
      </Link>
    </SignOutButton>
  );
}
export default SignOutLink;
