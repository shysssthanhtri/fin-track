import React, { type HTMLAttributes } from "react";

import { Header } from "@/components/organisms/header";
import { cn } from "@/lib/utils";

interface PageTemplateProps {
  children: React.ReactNode;
  className?: HTMLAttributes<HTMLDivElement>["className"];
}
export const PageTemplate = ({ children, className }: PageTemplateProps) => {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <div className="flex-1 overflow-auto p-4 pb-16 sm:pb-4">
        <div className={cn("container mx-auto", className)}>{children}</div>
      </div>
    </div>
  );
};
