"use client";
import { Button } from "@/components/ui/button";
import { SignedIn, useOrganization } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const createFile = useMutation(api.files.createFile);
  const { organization } = useOrganization();
  const files = useQuery(
    api.files.getFile,
    organization?.id ? { orgId: organization.id } : "skip"
  );

  return (
    <div className="min-h-screen flex justify-center">
      <SignedIn>
        <Button
          onClick={() => {
            if (!organization) {
              return;
            }
            createFile({ name: "hello world", orgId: organization.id });
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
