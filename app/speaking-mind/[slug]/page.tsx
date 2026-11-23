import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ViewTransition } from "react";
import { articles, introImages } from "../../data/content";
import { pageMetadata, SITE_URL } from "../../data/site";
import { ArticleCard, IntroBackdrop, Surface } from "../../components/UI";
import ArticleSidebar from "../../components/ArticleSidebar";
import PageTransition from "../../components/PageTransition";
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
    <PageTransition>
      {/* The article's own cover appears below, so the heading area shares
          the Writing page's picture. */}
      <Surface
        dark
        className="site-reader-intro"
        backdrop={<IntroBackdrop image={introImages.writing} />}
      >
        <Link
          className="site-back"
          href="/speaking-mind"
          transitionTypes={["nav-back"]}
        >
          ← All writing
        </Link>
        <p className="site-caption">
          {article.category} · {article.date}
        </p>
        {/* Shares its name with the title on the article's card. */}
        <ViewTransition
          name={`article-title-${article.slug}`}
          share="title-morph"
          default="none"
        >
          <h1>{article.displayTitle}</h1>
        </ViewTransition>
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
        <h2 data-reveal>KEEP EXPLORING.</h2>
        <div className="site-grid-three">
          {articles
            .filter((item) => item.slug !== slug)
            .slice(0, 3)
            .map((item) => (
              <ArticleCard key={item.slug} article={item} morphTitle={false} />
            ))}
        </div>
      </Surface>
    </PageTransition>
  );
}
