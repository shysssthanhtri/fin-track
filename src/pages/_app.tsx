import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

import { AuthGuard } from "@/components/guards/auth.guard";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { api } from "@/utils/api";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={cn(GeistSans.className, "font-sans antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
          <Toaster />
        </ThemeProvider>
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
