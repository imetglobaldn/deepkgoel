import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";
import PageHeader from "../components/PageHeader";

export const metadata: Metadata = { title: "Area of Expertise" };

const FUNCTIONAL = [
  "Strategic Management", "International Marketing (B2B)", "Business Development",
  "Bid Management", "Sales Support & Pre-sales", "Key Account Management",
  "Corporate Communication & Operations", "Offshoring & Process Consulting",
];
const INDUSTRIES = [
  "Internet & Digital Media", "Professional Education", "BPO & ITES",
  "Software Services", "KPO / Consulting", "Telecom",
];
const TRAINING = [
  "Personality Development Programs", "Business Communication & Presentation Skills",
  "Process Improvement", "Strategic Marketing", "Cross-Cultural Sensitization",
  "Customer Relationship Management", "Key Account Management",
  "ITES/KPO/Software Services Marketing", "International Marketing",
  "Sales Management & Analytics", "Team Building & Leadership",
  "Entrepreneurship & Self-Employment", "Startup, SME, MSME Challenges",
  "Industry Interface Programs", "Emotional Intelligence",
];
const CLIENTS = {
  corporate: ["WNS", "TechServ Consult Pvt Ltd", "Attainix", "InvestEdge", "Global Development Foundation"],
  education: ["Symbiosis (SCMHRD), Pune", "SCMLD, Pune", "ICSI India", "ILI, Indore", "Disha Group of Institutes, Raipur"],
};
const CAREER = [
  { company: "Advent Global Solutions", role: "Director - Business Strategy" },
  { company: "Hexaware Technologies", role: "Director - Americas" },
  { company: "Ariba Inc", role: "Sr Manager - Sales Operations" },
  { company: "QAI Asia", role: "Manager - Client Services" },
  { company: "Fujitsu Zensar", role: "Manager - International Marketing" },
  { company: "Bharti Telecom (Airtel)", role: "Customer Services" },
];

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 py-2 text-gray hover:text-white transition-colors">
      <MoveRight className="w-4 h-4 text-blue shrink-0" />
      <span className="text-[14px]">{children}</span>
    </li>
  );
}

export default function ExpertisePage() {
  return (
    <>
      <PageHeader
        label="Area of Expertise"
        title="Expertise & Experience"
        subtitle="16+ years of experience in Strategic, Tactical and Operational levels across Business Planning, Marketing Strategy, Campaign Management, Sales, Process Consulting, and CoE Building."
      />

      {/* Functional + Industries */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <div className="grid lg:grid-cols-2 gap-[60px]">
            <div>
              <p className="label mb-[20px]">Functional Areas</p>
              <ul className="space-y-1">{FUNCTIONAL.map((i) => <ListItem key={i}>{i}</ListItem>)}</ul>
            </div>
            <div>
              <p className="label mb-[20px]">Industries</p>
              <ul className="space-y-1">{INDUSTRIES.map((i) => <ListItem key={i}>{i}</ListItem>)}</ul>

              <div className="mt-10 p-[30px] bg-dark-card/50 border border-gray-border rounded-[20px]">
                <p className="label mb-3">Geographic Experience</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-white text-[14px] font-semibold mb-1">India</p>
                    <p className="text-gray text-[14px]">Delhi/NCR, Mumbai, Pune</p>
                  </div>
                  <div>
                    <p className="text-white text-[14px] font-semibold mb-1">United States</p>
                    <p className="text-gray text-[14px]">Irvine CA, Chicago IL, Houston TX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <p className="label mb-[20px]">Career</p>
          <p className="heading-md !text-white mb-[40px]">Professional Journey</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {CAREER.map((c) => (
              <div key={c.company} className="bg-dark-card/50 border border-gray-border rounded-[20px] p-[30px]">
                <h3 className="text-white text-[18px] font-semibold">{c.company}</h3>
                <p className="text-gray text-[14px] mt-1">{c.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <div className="grid lg:grid-cols-12 gap-[60px]">
            <div className="lg:col-span-4">
              <p className="label mb-[20px]">Training</p>
              <p className="heading-md !text-white">Corporate Training & Consulting</p>
              <p className="body-text mt-5">
                Since 2004: Guest lectures, workshops, mentorship programs at B-schools.
                Currently engaged in corporate training covering 6 Indian locations for
                a multi-million-dollar KPO firm.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-0">
                {TRAINING.map((t) => (
                  <div key={t} className="flex items-start gap-3 py-3 border-b border-gray-border text-gray hover:text-white transition-colors">
                    <MoveRight className="w-4 h-4 text-blue/60 mt-0.5 shrink-0" />
                    <span className="text-[14px]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-pad bg-dark border-t border-gray-border">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <p className="label mb-[20px]">Clients</p>
          <p className="heading-md !text-white mb-[40px]">Key Clients & Associations</p>
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <p className="text-white text-[14px] font-semibold mb-4">Corporate</p>
              <div className="flex flex-wrap gap-2">
                {CLIENTS.corporate.map((c) => (
                  <span key={c} className="px-4 py-2 rounded-full border border-gray-border text-[14px] text-gray">{c}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white text-[14px] font-semibold mb-4">Professional Education</p>
              <div className="flex flex-wrap gap-2">
                {CLIENTS.education.map((c) => (
                  <span key={c} className="px-4 py-2 rounded-full border border-gray-border text-[14px] text-gray">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[80px] bg-dark border-t border-gray-border text-center">
        <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
          <p className="heading-md !text-white">Interested in working together?</p>
          <Link href="/v1/book-your-time" className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-blue text-white text-[16px] font-semibold rounded-full hover:bg-blue-light transition-colors">
            Book Your Time <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
