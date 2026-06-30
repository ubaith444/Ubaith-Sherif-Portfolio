import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  delay?: number;
};

export function Reveal({ children, className, delay = 0, style, ...props }: RevealProps) {
  return (
    <div
      className={cn("reveal-in", className)}
      style={{ animationDelay: `${delay}s`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}

export function Magnetic({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("magnetic-lite", className)}>{children}</div>;
}
