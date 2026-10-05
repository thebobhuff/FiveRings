import type { MetadataRoute } from "next";
import { contentPages } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about", "/philosophy", "/programs", "/guides", "/visit", ...contentPages.map(p => p.path)].map(path => ({url:absoluteUrl(path)}));
}
