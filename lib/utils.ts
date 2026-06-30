import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const defaultSiteUrl = "https://ubaith-sherif-portfolio.vercel.app";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function siteUrl(path = "") {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;
  return `${base}${path}`;
}
