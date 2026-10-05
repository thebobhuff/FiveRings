import type { Metadata } from "next";

export const siteName = "Five Rings Community Martial Arts";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
export const isPublicSite = Boolean(process.env.NEXT_PUBLIC_SITE_URL) && process.env.VERCEL_ENV !== "preview" && !/localhost|127\.0\.0\.1/.test(siteUrl);
export const absoluteUrl = (path: string) => new URL(path, siteUrl).toString();

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title, description, alternates: { canonical: path },
    openGraph: { title, description, url: absoluteUrl(path), siteName, type: "website", locale: "en_US",
      images: [{ url: absoluteUrl("/five-rings-community-logo.png"), width: 1536, height: 1024, alt: siteName }] },
    twitter: { card: "summary_large_image", title, description, images: [absoluteUrl("/five-rings-community-logo.png")] },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: absoluteUrl(item.path) })) };
}
