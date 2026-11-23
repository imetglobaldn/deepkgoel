"use client";

import { useRef, useState } from "react";
import { CONTACT, TYPES } from "../data/content";
import { Arrow } from "./UI";

type Draft = { channel: "email" | "whatsapp"; href: string; message: string };

export default function EnquiryForm({
  initialType = "",
}: {
  initialType?: string;
}) {
  const [draft, setDraft] = useState<Draft | null>(null);
  const [copyStatus, setCopyStatus] = useState("");
  const result = useRef<HTMLDivElement>(null);
  function prepare(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    for (const name of ["name", "message"]) {
      const field = form.elements.namedItem(name) as
        | HTMLInputElement
        | HTMLTextAreaElement;
      field.setCustomValidity(
        field.value.trim() ? "" : "Please fill in this field.",
      );
    }
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) || "").trim();
    const submitter = (event.nativeEvent as SubmitEvent)
      .submitter as HTMLButtonElement | null;
    const channel = submitter?.value === "whatsapp" ? "whatsapp" : "email";
    const message = [
      `Hello Deepak,`,
      ``,
      value("message"),
      ``,
      `Enquiry: ${value("type")}`,
      `Name: ${value("name")}`,
      `Email: ${value("email")}`,
      value("phone") ? `Phone: ${value("phone")}` : "",
      value("organization") ? `Organization: ${value("organization")}` : "",
    ]
      .filter((line, index) => line || index === 1 || index === 3)
      .join("\n");
    const subject = `${value("type")} enquiry - ${value("name")}`;
    setDraft({
      channel,
      message,
      href:
        channel === "email"
          ? `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
          : `${CONTACT.whatsappHref}?text=${encodeURIComponent(message)}`,
    });
    setCopyStatus("");
    requestAnimationFrame(() => result.current?.focus());
  }
  async function copyDraft() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.message);
      setCopyStatus("Draft copied.");
    } catch {
      setCopyStatus("Select the draft text below to copy it.");
    }
  }
  return (
    <form
      className="site-enquiry"
      data-reveal
      onSubmit={prepare}
      onInput={(event) => {
        const target = event.target as HTMLInputElement;
        target.setCustomValidity?.("");
        setDraft(null);
      }}
    >
      <h2>Tell me a little more.</h2>
      <div className="site-form-row">
        <label>
          Full name *
          <input
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            required
            maxLength={120}
          />
        </label>
        <label>
          Email address *
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            maxLength={254}
          />
        </label>
      </div>
      <div className="site-form-row">
        <label>
          Phone number
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="+91"
            maxLength={40}
          />
        </label>
        <label>
          Organization
          <input
            name="organization"
            autoComplete="organization"
            placeholder="Company or institution"
            maxLength={160}
          />
        </label>
      </div>
      <label>
        <span id="site-enquiry-type-label">Enquiry type *</span>
        <select
          name="type"
          aria-labelledby="site-enquiry-type-label"
          defaultValue={initialType}
          required
        >
          <option value="" disabled>
            Select a type
          </option>
          {TYPES.map((type) => (
            <option key={type.title}>{type.title}</option>
          ))}
        </select>
      </label>
      <label>
        Your message *
        <textarea
          name="message"
          placeholder="Tell me about your event, team or idea."
          required
          maxLength={1800}
          rows={6}
        />
      </label>
      <p className="site-form-note">
        Your details stay in your browser. Choose email or WhatsApp to continue
        your enquiry.
      </p>
      <div className="site-actions">
        <button
          className="site-button site-button-dark"
          type="submit"
          value="email"
        >
          Prepare email
          <Arrow />
        </button>
        <button className="site-button" type="submit" value="whatsapp">
          Continue on WhatsApp
          <Arrow />
        </button>
      </div>
      <p className="site-form-caption">
        Nothing is sent until you send it in your email or WhatsApp app.
      </p>
      {draft && (
        <div className="site-draft" ref={result} tabIndex={-1}>
          <h3>
            Your {draft.channel === "email" ? "email" : "WhatsApp"} draft is
            ready.
          </h3>
          <p>
            Review your message, then open{" "}
            {draft.channel === "email" ? "your email app" : "WhatsApp"} to send
            it.
          </p>
          <pre>{draft.message}</pre>
          <div className="site-actions">
            <a
              className="site-button site-button-dark"
              href={draft.href}
              target={draft.channel === "whatsapp" ? "_blank" : undefined}
              rel={
                draft.channel === "whatsapp" ? "noopener noreferrer" : undefined
              }
            >
              Open {draft.channel === "email" ? "email draft" : "WhatsApp"}
              <Arrow />
            </a>
            <button
              className="site-text-link"
              type="button"
              onClick={copyDraft}
            >
              Copy draft
              <Arrow />
            </button>
          </div>
          <p role="status">{copyStatus}</p>
        </div>
      )}
    </form>
  );
}
