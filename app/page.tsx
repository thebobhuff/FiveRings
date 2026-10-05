import Image from "next/image";
import { CommunityGallery } from "@/components/CommunityMedia";
import Link from "next/link";
import { ArrowUpRight, Check, MoveRight, Shield } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Karate in Spring, TX | Five Rings Community Martial Arts", "Sport karate for kids and adults in Spring, TX. Meet instructor Bob Huff and explore competition, self defense, leadership and respect at Five Rings.", "/");

const programs = [
  { path: "/programs/kids-karate-spring-tx", no: "01", title: "Kids sport karate", label: "Confidence in motion", body: "A focused, high-energy program where kids build coordination, discipline, leadership, and competition confidence." },
  { path: "/programs/adult-karate-spring-tx", no: "02", title: "Adult martial arts", label: "A stronger way forward", body: "A welcoming practice for strength, conditioning, sharper focus, and meaningful progress at every experience level." },
  { path: "/programs/self-defense-spring-tx", no: "03", title: "Self defense", label: "Calm is a skill", body: "Practical awareness and movement training that helps you make clear decisions under pressure." }
];

export default function Home() {
  const schema = { "@context": "https://schema.org", "@type": "SportsActivityLocation", name: "Five Rings Community Martial Arts", description: "Sport karate, adult martial arts, kids karate, and self-defense in Spring, Texas.", areaServed: { "@type": "City", name: "Spring", containedInPlace: { "@type": "State", name: "Texas" } }, sport: "Karate", url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000" };
  return <main className="site-shell" id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section id="top" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-main">
        <div className="hero-copy">
          <p className="hero-location">SPORT KARATE IN SPRING, TEXAS</p>
          <h1 id="hero-title">Karate.<br />Character.<br /><span>Community.</span></h1>
          <p className="hero-lede">From your first class to the competition floor.<br className="desktop-break" /> Train hard, learn respect, and find your people.</p>
          <Link href="/visit" className="hero-cta">Find your first class <ArrowUpRight size={20} /></Link>
        </div>
        <figure className="hero-identity">
          <Image src="/five-rings-mark.png" alt="Five Rings: mountain, water, fire, wind, and void emblem" width={520} height={520} sizes="(max-width: 700px) 230px, 38vw" preload />
          <figcaption><strong>FIVE RINGS</strong><span>COMMUNITY MARTIAL ARTS</span></figcaption>
          <p>Rooted in respect. Ready for the ring.</p>
        </figure>
      </div>
      <nav className="hero-programs" aria-label="Find a martial arts program">
        <p>A PLACE FOR<br /><strong>YOUR NEXT CHAPTER.</strong></p>
        <Link href="/programs/kids-karate-spring-tx"><span><small>01 / YOUNG ATHLETES</small>Kids sport karate</span><ArrowUpRight size={22} /></Link>
        <Link href="/programs/adult-karate-spring-tx"><span><small>02 / ALL EXPERIENCE LEVELS</small>Adult martial arts</span><ArrowUpRight size={22} /></Link>
        <Link href="/programs/self-defense-spring-tx"><span><small>03 / EVERYDAY CONFIDENCE</small>Self defense</span><ArrowUpRight size={22} /></Link>
      </nav>
    </section>
    <section className="manifesto"><p className="eyebrow"><span /> What we believe</p><h2>Martial arts is not only about what you can do.<br /><i>It is about who you become.</i></h2><div className="manifesto-bottom"><p>Five Rings brings the athletic challenge of sport karate together with an uncommon focus on leadership, respect, and the courage to keep showing up.</p><Link href="/about" className="circle-link" aria-label="Read about Five Rings"><ArrowUpRight size={21} /></Link></div></section>
    <section className="personalized-feature"><div><p className="eyebrow"><span /> Coaching that sees the student</p><h2>Every student gets<br /><i>a next step.</i></h2></div><div><p>Group training should still feel personal. We observe, give a focused correction, let the student apply it, and check the change—whether they are learning their first stance or refining a competition form.</p><div className="personalized-links"><Link href="/programs/personalized-karate-coaching-spring-tx">How personalized coaching works <ArrowUpRight size={16} /></Link><Link href="/programs/kobudo-weapons-training-spring-tx">Explore kobudo &amp; weapons <ArrowUpRight size={16} /></Link></div></div></section>
    <section id="programs" className="programs-section"><div className="section-intro"><div><p className="eyebrow"><span /> Choose your ring</p><h2>Find the practice<br /><i>that fits your life.</i></h2></div><p>Every student starts somewhere. Our programs are built to meet you there—and give you a clear way forward.</p></div><div className="program-grid">{programs.map((program, index) => <article className={"program-card program-" + (index + 1)} key={program.no}><div className="program-top"><span>{program.no}</span><ArrowUpRight size={19} /></div><p className="program-label">{program.label}</p><h3>{program.title}</h3><p className="program-body">{program.body}</p><Link href={program.path} className="card-link">Learn more <MoveRight size={15} /></Link></article>)}</div></section>
    <section id="philosophy" className="philosophy-section"><div className="philosophy-image"><Image src="/five-rings-community-logo.png" alt="Five Rings Community Martial Arts full logo" fill sizes="(max-width: 900px) 100vw, 45vw" className="full-logo" /></div><div className="philosophy-copy"><p className="eyebrow"><span /> The Five Rings philosophy</p><h2>Five ways of seeing.<br /><i>One way forward.</i></h2><p>Inspired by Miyamoto Musashi, our philosophy gives every student a simple, practical framework for becoming capable, courageous, and grounded.</p><div className="ring-list">{[["Earth", "Build your foundation."], ["Water", "Adapt without losing yourself."], ["Fire", "Act with courage."], ["Wind", "Learn from every path."], ["Void", "Make room for what is next."]].map(([name, text], index) => <div className="ring-row" key={name}><span>0{index + 1}</span><b>{name}</b><em>{text}</em></div>)}</div><Link href="/philosophy" className="text-link light-link">Read the philosophy <ArrowUpRight size={16} /></Link></div></section>
    <section id="about" className="about-section"><div className="about-heading"><p className="eyebrow"><span /> The community</p><h2>Lead with<br /><i>respect.</i></h2></div><div className="about-copy"><p className="large-copy">Training here should make you better at the things that matter: listening, leading, staying calm, and giving your best when it would be easier not to.</p><p>Five Rings Community Martial Arts is a Spring, Texas home for kids, adults, competitors, and lifelong learners. Come for the sport. Stay for the people you become around.</p><div className="check-list"><span><Check size={15} /> Competition-ready</span><span><Check size={15} /> Leadership-first</span><span><Check size={15} /> Built for real life</span></div><Link href="/about" className="text-link">Meet Bob Huff <ArrowUpRight size={16} /></Link></div></section>
    <CommunityGallery placement="home"/>
    <section id="contact" className="contact-section"><div className="contact-heading"><p className="eyebrow"><span /> Your next move</p><h2>Step into<br /><i>your ring.</i></h2><p>Tell us a little about yourself. We’ll help you find the right place to begin at Five Rings in Spring, TX.</p><div className="contact-mini"><Shield size={18} /><span>Respect · discipline · leadership</span></div></div><LeadForm /></section>

  </main>;
}
