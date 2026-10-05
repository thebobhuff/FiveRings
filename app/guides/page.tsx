import ContentHub from "@/components/ContentHub";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Karate Guides for Students & Parents", "Practical guides to starting karate, choosing a school in Spring, TX and preparing for your first tournament.", "/guides");
export default function Guides() { return <ContentHub kind="guide"/>; }
