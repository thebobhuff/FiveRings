import type { MetadataRoute } from "next";
import { absoluteUrl, isPublicSite } from "@/lib/seo";
export default function robots(): MetadataRoute.Robots {
  return { rules: isPublicSite ? {userAgent:"*",allow:"/",disallow:"/api/"} : {userAgent:"*",disallow:"/"}, sitemap:absoluteUrl("/sitemap.xml") };
}
