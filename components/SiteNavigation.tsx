import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contentPages } from "@/lib/content";
import { SocialLinks } from "./CommunityMedia";

const links = [["/programs", "Programs"], ["/about", "Meet Bob"], ["/philosophy", "Philosophy"], ["/guides", "Learning hub"]];
export function SiteHeader() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><header className="site-nav">
    <Link href="/" className="brand-lockup" aria-label="Five Rings Community Martial Arts home"><Image src="/five-rings-mark.png" alt="" width={48} height={48} className="brand-mark" /><span><b>Five Rings</b><small>Community Martial Arts</small></span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(([href,label]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/visit" className="nav-cta">Plan your visit <ArrowUpRight size={16}/></Link></nav>
    <details className="mobile-nav"><summary>Menu <span aria-hidden="true">+</span></summary><nav aria-label="Mobile navigation">{links.map(([href,label]) => <Link key={href} href={href}>{label}</Link>)}<Link href="/visit">Plan your visit</Link></nav></details>
  </header></>;
}
export function SiteFooter() {
  return <footer className="content-footer"><div><Link href="/" className="brand-lockup"><Image src="/five-rings-mark.png" alt="" width={48} height={48} /><span><b>Five Rings</b><small>Community Martial Arts</small></span></Link><p>Sport karate. Leadership. Respect.<br/>Spring, Texas.</p></div>
    <nav aria-label="Program links"><h2>Programs</h2>{contentPages.filter(p => p.kind === "program").map(p => <Link href={p.path} key={p.path}>{p.nav}</Link>)}</nav>
    <nav aria-label="School links"><h2>Get to know us</h2><Link href="/about">Meet Bob Huff</Link><Link href="/philosophy">The Five Rings philosophy</Link><Link href="/guides">Learning hub</Link><Link href="/visit">Plan your visit</Link></nav><SocialLinks/>
  </footer>;
}
