import EnquiryForm from "../components/EnquiryForm";
import { PageIntro, Surface } from "../components/UI";
import { CONTACT, TYPES, introImages, socialLinks } from "../data/content";
import { pageMetadata } from "../data/site";
import PageTransition from "../components/PageTransition";

const intro =
  "A keynote. A workshop. A new perspective. Tell me what you have in mind, and let’s take the next step.";

export const metadata = pageMetadata({
  title: "Contact",
  description: intro,
  path: "/book-your-time",
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;
  const initialType = TYPES.some((type) => type.title === interest)
    ? interest
    : "";
  return (
    <PageTransition>
      <PageIntro
        title="YOUR NEXT MOVE"
        accent="STARTS HERE."
        image={introImages.contact}
      >
        {intro}
      </PageIntro>
      <Surface>
        <div className="site-contact-grid">
          <aside className="site-contact-info" data-reveal>
            <h2>LET’S CONNECT.</h2>
            <a className="site-contact-email" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
            <a href={CONTACT.whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp {CONTACT.whatsapp} ↗
            </a>
            <address>
              {CONTACT.address.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            <div className="site-contact-types">
              {TYPES.map((type) => (
                <div key={type.title}>
                  <type.icon size={20} />
                  <div>
                    <h3>{type.title}</h3>
                    <p>{type.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="site-social-links">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.label} ↗
                </a>
              ))}
            </div>
          </aside>
          <EnquiryForm initialType={initialType} />
        </div>
      </Surface>
    </PageTransition>
  );
}
