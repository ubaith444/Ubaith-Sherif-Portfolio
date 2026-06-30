import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ href, children, className, variant = "primary", ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] px-5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:scale-[0.98]",
    variant === "primary" &&
      "border border-[#111827] bg-[#111827] text-white shadow-sm hover:-translate-y-0.5 hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:shadow-[0_12px_30px_rgba(37,99,235,0.18)] dark:border-white/20 dark:bg-[#111827] dark:text-white dark:hover:border-blue-500 dark:hover:bg-blue-700 dark:hover:text-white",
    variant === "secondary" &&
      "border border-[#d1d5db] bg-white text-[#111827] shadow-none hover:-translate-y-0.5 hover:border-[#9ca3af] hover:bg-[#f3f4f6] hover:text-[#111827] dark:border-white/24 dark:bg-white/8 dark:text-white dark:hover:border-blue-300 dark:hover:bg-blue-400/10 dark:hover:text-blue-100",
    variant === "ghost" &&
      "border border-transparent text-zinc-700 hover:-translate-y-0.5 hover:border-zinc-200 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-200 dark:hover:border-white/16 dark:hover:bg-white/10 dark:hover:text-white",
    className
  );

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a className={classes} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} {...props}>
      {children}
    </Link>
  );
}
