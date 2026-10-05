import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { communityPhotos, CommunityPhoto, socialProfiles } from "@/lib/community";

export function SocialLinks() {
  if (!socialProfiles.length) return null;
  return <nav aria-label="Five Rings social profiles" className="social-links">{socialProfiles.map(profile => <a href={profile.url} key={profile.url} rel="noopener noreferrer" target="_blank">{profile.label}<ArrowUpRight size={16}/><span className="sr-only"> (opens in a new tab)</span></a>)}</nav>;
}
export function CommunityGallery({ placement }: {placement: CommunityPhoto["placement"][number]}) {
  const photos = communityPhotos.filter(photo => photo.placement.includes(placement));
  if (!photos.length) return null;
  return <section className="community-gallery"><p className="eyebrow">From Bob’s personal photo collection</p><h2>Moments from the martial arts journey.</h2><p className="gallery-intro">Training and competition memories that precede the Five Rings community.</p><div>{photos.map(photo => <figure key={photo.src}>
    <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width:700px) 90vw, 40vw"/>
    <figcaption>{photo.caption}{photo.sourceUrl && <a href={photo.sourceUrl} target="_blank" rel="noopener noreferrer">View original post <span className="sr-only">(opens in a new tab)</span>↗</a>}</figcaption>
  </figure>)}</div><SocialLinks/></section>;
}
