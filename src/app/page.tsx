"use client";
import { Button } from "@/components/ui/button";
import { SignedIn, useOrganization, useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const createFile = useMutation(api.files.createFile);

  const organization = useOrganization();
  const user = useUser();

  let orgId: string | undefined = undefined;
  if (organization.isLoaded && user.isLoaded) {
    orgId = organization.organization?.id ?? user.user?.id;
  }

  const files = useQuery(api.files.getFile, orgId ? { orgId } : "skip");

  return (
    <div className="min-h-screen flex justify-center">
      <SignedIn>
        <Button
          onClick={() => {
            if (!orgId) {
              return;
            }
            createFile({ name: "hello world", orgId });
          }}
        >
          Add file name
        </Button>
      </SignedIn>
      {files?.map((file) => {
        return <div key={file._id}>{file.name}</div>;
      })}
    </div>
  );
}
