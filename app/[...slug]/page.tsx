import { notFound } from "next/navigation";
import EditorialPage from "@/components/EditorialPage";
import { contentPages, findPage } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
export function generateStaticParams() {
  return contentPages.map(page => ({ slug: page.path.slice(1).split("/") }));
}
type Props = { params: Promise<{slug: string[]}> };
export async function generateMetadata({ params }: Props) {
  const page = findPage("/" + (await params).slug.join("/"));
  if (!page) notFound();
  return pageMetadata(page.title, page.description, page.path);
}
export default async function Page({ params }: Props) {
  const page = findPage("/" + (await params).slug.join("/"));
  if (!page) notFound();
  return <EditorialPage page={page}/>;
}
