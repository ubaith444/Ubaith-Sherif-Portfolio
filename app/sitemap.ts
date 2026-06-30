import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { projects } from "@/lib/projects";
import { siteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl("/"),
      lastModified: new Date()
    },
    {
      url: siteUrl("/contact"),
      lastModified: new Date()
    },
    ...projects.map((project) => ({
      url: siteUrl(`/projects/${project.slug}`),
      lastModified: new Date()
    })),
    ...blogPosts.map((post) => ({
      url: siteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.date)
    }))
  ];
}
