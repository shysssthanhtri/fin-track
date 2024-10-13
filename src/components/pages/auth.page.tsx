import { signIn } from "next-auth/react";
import React from "react";

import { Icons } from "@/components/atoms/icons";
import { Button } from "@/components/ui/button";

export const AuthPage = () => {
  return (
    <div className="flex h-full">
      <div className="flex flex-1 flex-col bg-zinc-900 text-lg text-white">
        <div className="flex-1 p-8">FinTrack</div>
        <div className="p-8">Tracking your finance. And more than that...</div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-y-4 bg-muted">
        <h1 className="text-2xl font-semibold tracking-tight">
          Sign In to continue
        </h1>
        <Button
          variant="outline"
          type="button"
          onClick={() => signIn("google")}
        >
          <Icons.google className="mr-2 h-4 w-4" />
          Google
        </Button>
      </div>
    </div>
  );
};
