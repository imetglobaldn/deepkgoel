import QuoteCollection from "../components/QuoteCollection";
import { PageIntro, Surface } from "../components/UI";
import { introImages } from "../data/content";
import { pageMetadata } from "../data/site";
import PageTransition from "../components/PageTransition";

const intro =
  "Daily Thumbs Up. Reflections on learning, resilience and seeing possibility in the everyday.";

export const metadata = pageMetadata({
  title: "Daily Thumbs Up",
  description: intro,
  path: "/daily-thumbs-up",
});

export default function QuotesPage() {
  return (
    <PageTransition>
      <PageIntro
        title="A SMALL THOUGHT."
        accent="A FRESH PERSPECTIVE."
        image={introImages.quotes}
      >
        {intro}
      </PageIntro>
      <Surface>
        <QuoteCollection />
      </Surface>
    </PageTransition>
  );
}
