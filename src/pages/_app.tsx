import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { AuthGuard } from "@/components/guards/auth.guard";
import { api } from "@/utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <div className={GeistSans.className}>
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
