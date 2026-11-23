import { ViewTransition, type ReactNode } from "react";

// Wraps the content of every page so that moving between pages animates: the
// page being left animates out while the new one animates in.
//
// A link can say which way it goes: `transitionTypes={["nav-forward"]}` slides
// the new page in from the right (opening an article), `nav-back` from the
// left. Every other move between pages is a soft cross-fade. The animations
// themselves are in globals.css, under "Page transitions".
//
// It is used inside each page, not in the layout: a layout stays in place
// between pages, so nothing in it ever enters or leaves.
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition
      enter={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        default: "page-in",
      }}
      exit={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        default: "page-out",
      }}
      default="none"
    >
      <div className="site-page">{children}</div>
    </ViewTransition>
  );
}
