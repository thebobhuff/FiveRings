import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/EditorialPage";
import { CommunityGallery, SocialLinks } from "@/components/CommunityMedia";
import LeadForm from "@/components/LeadForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Visit Five Rings | Start Karate in Spring, TX", "Plan your introduction to Five Rings Community Martial Arts in Spring, TX. Explore programs, meet Bob Huff and find out what to ask before your first class.", "/visit");
export default function Visit() {
  return <main id="main-content" className="editorial-page">
    <Breadcrumbs items={[{name:"Home",path:"/"},{name:"Plan your visit",path:"/visit"}]}/>
    <header className="editorial-hero"><p className="eyebrow">Spring, Texas · Your first class</p><h1>You don’t have to know karate.<br/>Just where to begin.</h1><p>Bring your questions, your goals and your starting point. We’ll talk through the right introduction to Five Rings for you or your child.</p><a href="#visit-enquiry" className="hero-cta">Ask about a first class <ArrowUpRight size={18}/></a></header>
    <section className="visit-steps"><p className="eyebrow">Before you step on the mat</p><h2>A simple place to start.</h2><div>
      <article><span>01</span><h3>Tell us who’s training.</h3><p>Share the student’s age, any previous martial arts experience and what you want to work toward. Beginners, returning adults and aspiring competitors bring different needs.</p></article>
      <article><span>02</span><h3>Confirm the practical details.</h3><p>Check the training location, current class times, age groups, introductory arrangements and costs with Bob before making a trip. An inquiry starts a conversation; it does not reserve a class.</p></article>
      <article><span>03</span><h3>Arrive ready to learn.</h3><p>Ask what to wear and bring before buying a uniform or equipment. Leave time to introduce yourself and discuss any questions before practice starts.</p></article>
    </div></section>
    <div className="reading-layout"><aside className="contents-nav"><p>Plan your introduction</p><nav aria-label="Visit page contents"><a href="#program-fit">Find a program</a><a href="#meet-bob">Meet your instructor</a><a href="#visit-questions">Practical questions</a><a href="#visit-enquiry">Start a conversation</a></nav></aside>
    <article className="reading-body">
      <section id="program-fit"><h2>Find the practice that fits.</h2><p>Five Rings focuses on sport karate, competition, leadership and respect. You can explore the program before deciding what to ask about a first visit.</p><ul className="visit-program-list"><li><Link href="/programs/kids-karate-spring-tx">Kids sport karate</Link><p>Fundamentals, focus and confidence for young students, with a thoughtful path toward competition.</p></li><li><Link href="/programs/adult-karate-spring-tx">Adult martial arts</Link><p>A purposeful practice for beginners and returning students.</p></li><li><Link href="/programs/self-defense-spring-tx">Self defense</Link><p>Awareness, boundaries and controlled decisions alongside physical practice.</p></li><li><Link href="/programs/competition-karate-spring-tx">Competition preparation</Link><p>Explore forms, sparring and preparing for events on the PROMAC circuit.</p></li><li><Link href="/programs/kobudo-weapons-training-spring-tx">Kobudo &amp; weapons</Link><p>Supervised, readiness-based traditional weapons practice, forms and competition preparation.</p></li></ul></section>
      <section id="meet-bob"><h2>Start with a conversation with Bob.</h2><p>Bob Huff is an American Karate black belt and an IT executive. He began training in 2022, earned his black belt in June 2026 and has three years of teaching experience as of October 2026.</p><p>Tell Bob what you hope training will help you practice. For a child, that might include listening, working with others or trying a new activity. For an adult, it may be learning a skill, returning to martial arts or preparing to compete.</p><Link href="/about">Read Bob’s story →</Link></section>
      <section id="visit-questions" className="faq-list"><p className="eyebrow">Before you commit</p><h2>Questions worth asking.</h2>
      <details><summary>Where and when are classes?</summary><p>Five Rings serves Spring, Texas. Confirm the current training address, class days and arrival time with Bob before visiting.</p></details>
      <details><summary>What does training cost?</summary><p>Ask for current tuition, introductory-class arrangements and any uniform, equipment, testing or tournament costs before enrolling.</p></details>
      <details><summary>Which ages can start?</summary><p>Share the student’s age so we can discuss current groupings and a suitable introduction.</p></details>
      <details><summary>Can parents watch?</summary><p>Ask about observation arrangements when arranging your child’s first visit so you know what to expect.</p></details>
      <details><summary>Will I need to compete?</summary><p>Sport karate and competition are central to Five Rings. Discuss the program’s expectations and the student’s goals with Bob before enrolling.</p></details>
      </section>
    </article></div>
    <CommunityGallery placement="visit"/>
    <section id="visit-enquiry" className="contact-section"><div className="contact-heading"><p className="eyebrow">Let’s find your starting point</p><h2>Your first step.</h2><p>Tell us about the student, your interests and the days that could work. We’ll discuss the next step before you plan a visit.</p><SocialLinks/></div><LeadForm/></section>
  </main>;
}
