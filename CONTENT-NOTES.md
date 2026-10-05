# Five Rings content and publication notes

## Sources
- User-confirmed school focus: Spring, TX, kids sport karate, adult martial arts, self defense, competition, leadership and respect.
- Bob Huff supplied his public profile on October 4, 2026: American Karate black belt, training since 2022, black belt earned June 2026, three years teaching, IT executive.
- Canonical vault profile: C:/vaults/clone/10 Projects/five-rings/Bob Huff - Public instructor profile.md.
- Program and guide prose is original editorial content based on the stated mission. No tournament results, ranks beyond black belt, affiliations or employer names have been invented.
- Musashi philosophy is explicitly identified as the school's modern interpretation.

## Content map
- /about: Bob's background, dated facts, school vision and instructor inquiry.
- /philosophy: five-ring interpretation and practical prompts.
- /programs: five-program directory.
- /programs/kids-karate-spring-tx
- /programs/adult-karate-spring-tx
- /programs/self-defense-spring-tx
- /programs/competition-karate-spring-tx
- /programs/leadership-martial-arts
- /guides: learning directory.
- /guides/first-karate-class
- /guides/choosing-a-karate-school
- /guides/first-karate-tournament

## Maintenance
Long-form program and guide copy lives in lib/content.ts. Shared rendering is in components/EditorialPage.tsx. About and philosophy have dedicated page files. The sitemap follows this content registry.

Titles, descriptions, canonicals, social previews and breadcrumbs are page-specific. Article markup identifies Five Rings as the editorial author, not Bob as an unconfirmed reviewer. FAQ answers are visible accessible disclosures; no enhanced search appearance is promised.

## Before public launch
Set NEXT_PUBLIC_SITE_URL to the actual production origin and rebuild. Without that value, and on Vercel preview deployments, indexing is disabled. The sample domain in .env.example is only a placeholder.

Confirm the training address, contact phone, class schedule, tuition, age ranges and event affiliations before adding them. Local-business listings and geographic expansions should reflect actual operations.

Existing CRM integration is still an unverified webhook scaffold. It now returns 503 when unconfigured and does not log the submitted personal data. Do not regard this as a working CRM connection or publish lead capture until the integration is verified.

## Visit, photos and social launch
/visit provides first-visit planning and enquiry guidance without inventing the missing operational details. PROMAC resources appear on the competition page and first-tournament guide.

SOCIAL-LAUNCH-KIT.md contains draft bios, suggested handles and first posts. Bob confirmed no official accounts exist yet. lib/community.ts is the registry for confirmed accounts and approved photos; empty lists render no placeholder gallery or false social links. Actual accounts and photo sourcing are pending.

The profile's three-year teaching tenure is explicitly dated October 2026 and should be reviewed over time. Add a real instructor portrait when available; the current illustration is the school emblem.
