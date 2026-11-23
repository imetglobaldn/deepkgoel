import QuoteCollection from "../components/QuoteCollection";
import { PageIntro, Surface } from "../components/UI";
import { pageMetadata } from "../data/site";

const intro =
  "Daily Thumbs Up. Reflections on learning, resilience and seeing possibility in the everyday.";

export const metadata = pageMetadata({
  title: "Daily Thumbs Up",
  description: intro,
  path: "/daily-thumbs-up",
});

export default function QuotesPage() {
  return (
    <>
      <PageIntro title="A SMALL THOUGHT." accent="A FRESH PERSPECTIVE.">
        {intro}
      </PageIntro>
      <Surface>
        <QuoteCollection />
      </Surface>
    </>
  );
}
