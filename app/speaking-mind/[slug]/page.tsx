import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles } from "../../data/content";
import { pageMetadata, SITE_URL } from "../../data/site";
import { ArticleCard, Surface } from "../../components/UI";
import ArticleSidebar from "../../components/ArticleSidebar";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  // An unknown address falls through to the not-found page and its title.
  if (!article) return {};
  return pageMetadata({
    title: article.displayTitle,
    description: article.shortExcerpt,
    path: article.href,
    image: article.image,
    article: { publishedAt: article.publishedAt },
  });
}
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const blocks: React.ReactNode[] = [];
  const sectionId = (index: number) =>
    article.sections.find((section) => section.blockIndex === index)?.id;
  for (let i = 0; i < article.blocks.length; i++) {
    const block = article.blocks[i];
    if (block.type === "list") {
      const start = i;
      const items = [{ text: block.text, id: sectionId(i) }];
      while (article.blocks[i + 1]?.type === "list")
        items.push({ text: article.blocks[++i].text, id: sectionId(i) });
      blocks.push(
        <ul key={start}>
          {items.map(({ text, id }, n) => (
            <li key={n} id={id}>
              {text}
            </li>
          ))}
        </ul>,
      );
    } else if (block.type === "heading")
      blocks.push(
        <h2 key={i} id={sectionId(i)}>
          {block.text}
        </h2>,
      );
    else
      blocks.push(
        <p key={i} id={sectionId(i)}>
          {block.text}
        </p>,
      );
  }
  return (
    <>
      <Surface dark className="site-reader-intro">
        <Link className="site-back" href="/speaking-mind">
          ← All writing
        </Link>
        <p className="site-caption">
          {article.category} · {article.date}
        </p>
        <h1>{article.displayTitle}</h1>
        <p>By Deepak Goel · From the archive</p>
      </Surface>
      <Surface className="site-reading-surface">
        <div className="site-reader-layout">
          <ArticleSidebar
            sections={article.sections}
            title={article.displayTitle}
            url={`${SITE_URL}${article.href}`}
          />
          <article className="site-reader" id="overview">
            <Image
              className="site-reader-cover"
              src={article.image}
              width={1200}
              height={700}
              alt={article.title}
              sizes="(max-width: 900px) calc(100vw - 48px), 820px"
            />
            <div className="site-reader-body">{blocks}</div>
            <a
              className="site-source"
              href={article.sourceUrl}
              target="_blank"
              rel="noreferrer"
            >
              View original publication ↗
            </a>
          </article>
        </div>
      </Surface>
      <Surface dark className="site-reader-related">
        <h2>KEEP EXPLORING.</h2>
        <div className="site-grid-three">
          {articles
            .filter((item) => item.slug !== slug)
            .slice(0, 3)
            .map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
        </div>
      </Surface>
    </>
  );
}
