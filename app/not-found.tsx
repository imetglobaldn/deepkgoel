import type { Metadata } from "next";
import { Button, PageIntro } from "./components/UI";
import { introImages } from "./data/content";
import PageTransition from "./components/PageTransition";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <PageTransition>
      <PageIntro
        title="A DIFFERENT PATH."
        accent="THE SAME POSSIBILITY."
        image={introImages.contact}
      >
        This page couldn’t be found. Let’s get you back to the ideas.
      </PageIntro>
      <div className="site-wrap site-section">
        <Button href="/">Back to home</Button>
      </div>
    </PageTransition>
  );
}
