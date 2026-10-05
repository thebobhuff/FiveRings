import { ArrowUpRight } from "lucide-react";
import { competitionResources } from "@/lib/community";
export default function CompetitionResources() {
  return <section className="competition-resources" id="promac-resources">
    <p className="eyebrow">The next step in sport karate</p><h2>Preparing for the PROMAC circuit.</h2>
    <p>Five Rings prepares students for sport karate competition, including PROMAC events. Start with the official resources below, then discuss readiness, divisions and preparation with Bob.</p>
    <div>{competitionResources.map(resource => <a key={resource.url} href={resource.url} target="_blank" rel="noopener noreferrer"><h3>{resource.title} <ArrowUpRight size={18}/></h3><p>{resource.detail}</p><span>Official PROMAC resource ↗<span className="sr-only"> (opens in a new tab)</span></span></a>)}</div>
    <p className="resource-note">Event selection is individual. A listing on the circuit calendar does not mean Five Rings is attending. Confirm plans with Bob before registering or booking travel.</p>
  </section>;
}
