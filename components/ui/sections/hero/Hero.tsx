import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CodeWindow from "./CodeWindow";

export default function Hero() {
  return (
    <section
      className="relative bg-[#020202] overflow-hidden"
      aria-label="Introduction"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-16 md:py-20 lg:py-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div>
            {/* Eyebrow */}
            <div
              className="
                inline-flex items-center gap-2
                rounded-[5px] border border-[#1D1D21]
                bg-gradient-to-b from-[#0B0B0D] to-[#08080A]
                px-3 py-[6px]
                animate-[fadeInUp_500ms_cubic-bezier(0.22,1,0.36,1)_both]
                motion-reduce:animate-none
              "
            >
              <span className="relative flex h-[6px] w-[6px]">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#5B5FF8] opacity-75 animate-ping motion-reduce:animate-none" />
                <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-[#5B5FF8]" />
              </span>
              <span
                className="font-mono text-[13px] font-medium uppercase text-[#F4F4F5]"
                style={{ letterSpacing: "0.08em" }}
              >
                Open to Freelance
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-6 md:mt-7 lg:mt-8
                font-display text-[#F4F4F5]
                text-[44px] sm:text-[52px] md:text-[60px] lg:text-[72px]
                leading-[1.05] tracking-[-0.035em]
                animate-[fadeInUp_500ms_cubic-bezier(0.22,1,0.36,1)_100ms_both]
                motion-reduce:animate-none
              "
            >
              Building Digital Products That Turn Ideas Into Reality.
            </h1>

            {/* Supporting text */}
            <p
              className="
                mt-6 max-w-[54ch]
                font-body text-[#A1A1AA]
                text-[15px] md:text-[16px]
                leading-[1.7]
                animate-[fadeInUp_500ms_cubic-bezier(0.22,1,0.36,1)_200ms_both]
                motion-reduce:animate-none
              "
            >
              I&rsquo;m Aazib Ali, a Full Stack &amp; App Developer helping
              businesses, startups, and individuals build modern websites,
              web applications, mobile apps, and AI-powered solutions.
            </p>

            {/* CTA buttons */}
            <div
              className="
                mt-9 md:mt-10 flex flex-wrap items-center gap-4
                animate-[fadeInUp_500ms_cubic-bezier(0.22,1,0.36,1)_300ms_both]
                motion-reduce:animate-none
              "
            >
              <Button asChild variant="primary">
                <Link
                  href="/contact"
                  aria-label="Let's work together — go to contact page"
                  className="group"
                >
                  LET&apos;S WORK TOGETHER
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    className="transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                    aria-hidden="true"
                  />
                </Link>
              </Button>

              <Button asChild variant="secondary">
                <Link
                  href="/projects"
                  aria-label="View my work — go to projects page"
                  className="group"
                >
                  VIEW MY WORK
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2}
                    className="transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div
            className="
              animate-[fadeInUp_500ms_cubic-bezier(0.22,1,0.36,1)_400ms_both]
              motion-reduce:animate-none
            "
          >
            <CodeWindow />
          </div>
        </div>
      </div>
    </section>
  );
}