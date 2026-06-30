import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 pt-16">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-zinc-950 dark:text-white">Page not found.</h1>
        <p className="mt-4 text-slate-600 dark:text-zinc-300">
          The page may have moved. Return home to review Ubaith Sherif&apos;s projects, skills, writing, and contact links.
        </p>
        <Button className="mt-8" href="/">
          <ArrowLeft aria-hidden="true" size={16} />
          Back home
        </Button>
      </div>
    </main>
  );
}
