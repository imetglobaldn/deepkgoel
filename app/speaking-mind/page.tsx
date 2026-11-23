import ArticleExplorer from "../components/ArticleExplorer";
import { PageIntro, Surface } from "../components/UI";
import { introImages } from "../data/content";
import { pageMetadata } from "../data/site";
import PageTransition from "../components/PageTransition";

const intro =
  "Perspectives on brands, business and learning. Ideas from the archive, worth thinking about today.";

export const metadata = pageMetadata({
  title: "Writing",
  description: intro,
  path: "/speaking-mind",
});

export default function WritingPage() {
  return (
    <PageTransition>
      <PageIntro
        title="LEARN SOMETHING."
        accent="MAKE SOMETHING HAPPEN."
        image={introImages.writing}
      >
        {intro}
      </PageIntro>
      <Surface>
        <ArticleExplorer />
      </Surface>
    </PageTransition>
  );
}
