// Populate only with owner-confirmed public accounts and approved images.
export const socialProfiles: { label: string; url: string }[] = [];
export type CommunityPhoto = {
  src: string; width: number; height: number; alt: string; caption: string;
  sourceUrl?: string;
  placement: ("home" | "about" | "visit" | "competition")[];
};
export const communityPhotos: CommunityPhoto[] = [
  { src: "/community/houston-open.jpg", width: 1536, height: 2048,
    alt: "Bob Huff in a white karate uniform holding sai and wearing tournament medals.",
    caption: "Bob Huff at the Houston Open. Photo from his personal collection.",
    placement: ["home", "competition"] },
  { src: "/community/kata-competition.jpg", width: 1536, height: 2048,
    alt: "A karate competitor wearing a purple belt and holding a framed award.",
    caption: "Progress through practice and competition. Photo from Bob’s personal collection.",
    placement: ["about", "competition"] },
  { src: "/community/tournament-portrait.jpg", width: 909, height: 1566,
    alt: "A competitor in a blue and black martial arts uniform holding tournament awards.",
    caption: "A tournament-day memory from Bob’s personal collection.",
    placement: ["about", "visit"] },
  { src: "/community/tournament-group.jpg", width: 2048, height: 1536,
    alt: "Three karate competitors standing together with trophies and awards.",
    caption: "Sharing a moment after competition. Photo from Bob’s personal collection.",
    placement: ["home", "visit"] },
];

export const competitionResources = [
  { title: "Meet the PROMAC circuit", url: "https://www.promackarate.com/", detail: "Learn about the Professional Martial Arts Conference and its sport karate circuit." },
  { title: "Official rules & equipment", url: "https://www.promackarate.com/rules", detail: "Review the current rulebook before choosing divisions, purchasing equipment or entering an event." },
  { title: "Rated divisions", url: "https://www.promackarate.com/rated-divisions", detail: "Explore the circuit’s division structure, then confirm eligibility against your event’s listing." },
  { title: "Tournament calendar", url: "https://www.promackarate.com/schedule", detail: "Find events and follow the organizer’s links to registration, divisions and brackets on MAT Action." },
];
