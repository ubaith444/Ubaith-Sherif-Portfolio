import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "default"
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  tone?: "default" | "inverted";
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-300">{eyebrow}</p>
      <h2 className={tone === "inverted" ? "text-balance text-3xl font-semibold text-white md:text-5xl" : "text-balance text-3xl font-semibold text-zinc-950 dark:text-white md:text-5xl"}>{title}</h2>
      {children ? (
        <p className={tone === "inverted" ? "mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-zinc-300" : "mx-auto mt-5 max-w-2xl text-pretty text-base leading-8 text-slate-600 dark:text-zinc-300"}>{children}</p>
      ) : null}
    </div>
  );
}
