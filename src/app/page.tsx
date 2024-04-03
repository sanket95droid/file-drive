"use client";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  auth,
} from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const createFile = useMutation(api.files.createFile);
  const files = useQuery(api.files.getFile, {});

  return (
    <div className="min-h-screen flex justify-center">
      <SignedIn>
        <UserButton />
        <Button
          onClick={() => {
            createFile({ name: "hello world" });
          }}
        >
          Add file name
        </Button>
      </SignedIn>
      <SignedOut>
        <Button>
          <SignInButton />
        </Button>
      </SignedOut>
        {files?.map((file) => {
          return(
            <div key={file._id}>
              {file.name}
            </div>
          )
        })}
    </div>
  );
}
