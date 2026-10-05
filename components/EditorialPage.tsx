import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContentPage, findPage } from "@/lib/content";
import { absoluteUrl, breadcrumbSchema, siteName } from "@/lib/seo";
import CompetitionResources from "./CompetitionResources";
import { CommunityGallery } from "./CommunityMedia";

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return <><JsonLd data={breadcrumbSchema(items)}/><nav className="breadcrumbs" aria-label="Breadcrumb"><ol>{items.map((item,index) => <li key={item.path}>{index === items.length - 1 ? <span aria-current="page">{item.name}</span> : <Link href={item.path}>{item.name}</Link>}</li>)}</ol></nav></>;
}
export function InquiryCallout() {
  return <section className="inquiry-callout"><div><p className="eyebrow">Your next step</p><h2>Let’s find your starting point.</h2><p>Tell us who will be training, your experience and what you hope to learn. We’ll discuss current class options in Spring, TX.</p></div><Link className="hero-cta" href="/#contact">Ask about classes <ArrowUpRight size={20}/></Link></section>;
}
export default function EditorialPage({ page }: { page: ContentPage }) {
  const hub = page.kind === "program" ? "/programs" : "/guides";
  const hubName = page.kind === "program" ? "Programs" : "Learning hub";
  return <main id="main-content" className="editorial-page">
    <Breadcrumbs items={[{name:"Home",path:"/"},{name:hubName,path:hub},{name:page.nav,path:page.path}]}/>
    <header className="editorial-hero"><p className="eyebrow">{page.kind === "program" ? "Five Rings · Spring, Texas" : "The Five Rings learning hub"}</p><h1>{page.title}</h1><p>{page.intro}</p><Link href="/#contact" className="text-link">Talk with us about training <ArrowUpRight size={16}/></Link></header>
    <div className="reading-layout"><aside className="contents-nav"><p>On this page</p><nav aria-label="Table of contents">{page.sections.map(([title],index) => <a key={title} href={"#section-" + index}>{title}</a>)}<a href="#questions">Common questions</a></nav></aside>
    <article className="reading-body">{page.sections.map(([title,...paragraphs],index) => <section id={"section-" + index} key={title}><h2>{title}</h2>{paragraphs.map(p => <p key={p}>{p}</p>)}</section>)}
    <section id="questions" className="faq-list"><p className="eyebrow">A few practical answers</p><h2>Common questions</h2>{page.faqs.map(([q,a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</section>
    <p className="editorial-note">Five Rings Community Martial Arts · Spring, TX<br/>Program information and class availability can be discussed directly with the school.</p>
    </article></div>
    <section className="related-reading"><p className="eyebrow">Keep exploring</p><h2>Related reading</h2><div>{page.related.map(path => <Link key={path} href={path}><span>{findPage(path)?.nav || ({"/about":"Meet Bob Huff","/philosophy":"The Five Rings philosophy","/programs":"Explore all programs"} as Record<string,string>)[path]}</span><ArrowUpRight size={18}/></Link>)}</div></section>
    {(page.path === "/programs/competition-karate-spring-tx" || page.path === "/guides/first-karate-tournament") && <><CompetitionResources/><CommunityGallery placement="competition"/></>}
    <InquiryCallout/>
    <JsonLd data={page.kind === "guide" ? {"@context":"https://schema.org","@type":"Article",headline:page.title,description:page.description,mainEntityOfPage:absoluteUrl(page.path),author:{"@type":"Organization",name:siteName,url:absoluteUrl("/")},publisher:{"@type":"Organization",name:siteName,url:absoluteUrl("/")}} : {"@context":"https://schema.org","@type":"Service",name:page.title,description:page.description,url:absoluteUrl(page.path),serviceType:page.nav,areaServed:{"@type":"Place",name:"Spring, Texas"},provider:{"@type":"Organization",name:siteName,url:absoluteUrl("/")}}}/>
  </main>;
}
