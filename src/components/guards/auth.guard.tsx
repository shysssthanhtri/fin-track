import { Loader2 } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import React, { useEffect } from "react";

interface AuthGuardProps {
  children: React.ReactNode;
}
export const AuthGuard = ({ children }: AuthGuardProps) => {
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      void signIn();
    }
  }, [status]);

  if (status === "loading") {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin" />
        Authenticating
      </div>
    );
  }

  if (status === "unauthenticated") return null;

  return children;
};
