import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({ children, className, ...props }: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-[8px] border border-[#e5e7eb] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.045)] dark:border-white/10 dark:bg-white/[0.045] dark:shadow-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
