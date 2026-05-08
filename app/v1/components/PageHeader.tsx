import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PageHeader({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="pt-[140px] pb-[80px] sm:pt-[170px] sm:pb-[100px] bg-dark border-b border-gray-border">
      <div className="max-w-[1400px] mx-auto px-[50px] max-md:px-5">
        <Link
          href="/v1"
          className="inline-flex items-center gap-2 text-gray text-[14px] hover:text-white transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back Home
        </Link>

        <p className="label mb-4">{label}</p>
        <h1 className="heading-lg max-w-[830px]">{title}</h1>
        {subtitle && (
          <p className="mt-6 text-[16px] text-gray leading-[1.5em] max-w-[530px]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
