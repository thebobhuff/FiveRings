import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contentPages } from "@/lib/content";
import { Breadcrumbs, InquiryCallout } from "./EditorialPage";

export default function ContentHub({kind}:{kind:"program"|"guide"}) {
  const programs = kind === "program";
  return <main id="main-content" className="editorial-page">
    <Breadcrumbs items={[{name:"Home",path:"/"},{name:programs?"Programs":"Learning hub",path:programs?"/programs":"/guides"}]}/>
    <header className="editorial-hero"><p className="eyebrow">Five Rings · Spring, Texas</p><h1>{programs ? "Martial arts programs in Spring, TX." : "A little knowledge before you step on the mat."}</h1><p>{programs ? "Explore kids sport karate, adult martial arts and self defense, with competition, leadership and respect running through the practice." : "Practical reading for new students, parents and first-time competitors. Start with the questions that matter to you."}</p></header>
    <div className="hub-grid">{contentPages.filter(p => p.kind === kind).map((p,index) => <Link href={p.path} key={p.path} className="hub-card"><span className="eyebrow">0{index+1} / {programs?"Program":"Guide"}</span><h2>{p.nav}</h2><p>{p.description}</p><span className="text-link">Read more <ArrowUpRight size={18}/></span></Link>)}</div>
    <InquiryCallout/>
  </main>;
}
