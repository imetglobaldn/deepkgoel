import ArticleExplorer from "../components/ArticleExplorer";
import { PageIntro, Surface } from "../components/UI";
import { pageMetadata } from "../data/site";

const intro =
  "Perspectives on brands, business and learning. Ideas from the archive, worth thinking about today.";

export const metadata = pageMetadata({
  title: "Writing",
  description: intro,
  path: "/speaking-mind",
});

export default function WritingPage() {
  return (
    <>
      <PageIntro title="LEARN SOMETHING." accent="MAKE SOMETHING HAPPEN.">
        {intro}
      </PageIntro>
      <Surface>
        <ArticleExplorer />
      </Surface>
    </>
  );
}
