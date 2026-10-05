import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/SiteNavigation";
import { isPublicSite, siteUrl } from "@/lib/seo";
import { socialProfiles } from "@/lib/community";
import { JsonLd } from "@/components/EditorialPage";
import "./globals.css";
import "./editorial.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Five Rings Community Martial Arts | Karate in Spring, TX", template: "%s | Five Rings" },
  description: "Sport karate for kids and adults in Spring, TX, with competition, self defense, leadership and respect at Five Rings Community Martial Arts.",
  robots: { index: isPublicSite, follow: isPublicSite },
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body><JsonLd data={{"@context":"https://schema.org","@type":"Organization","@id":siteUrl+"/#organization",name:"Five Rings Community Martial Arts",url:siteUrl,logo:siteUrl+"/five-rings-mark.png",...(socialProfiles.length ? {sameAs:socialProfiles.map(profile=>profile.url)} : {})}}/><SiteHeader/>{children}<SiteFooter/></body></html>;
}
