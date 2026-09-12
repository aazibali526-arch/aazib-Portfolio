"use client";

import { useEffect, useState, useRef } from "react";

const ROTATING_LINES: string[] = [
  "Web Development",
  "Mobile App Development",
  "AI-Powered Applications",
  "API & Backend Development",
  "Building Digital Products",
];

const TYPING_SPEED_MS = 45;
const DELETING_SPEED_MS = 25;
const PAUSE_AFTER_TYPE_MS = 1600;
const PAUSE_AFTER_DELETE_MS = 300;

// Syntax colors — scoped to this code window only, not part of the
// site-wide token set. Brand accent (#5B5FF8) is reserved for the
// cursor only, per design refinement brief.
const SYNTAX = {
  keyword: "#C084E0", // const, await
  property: "#7DB4E0", // object keys
  string: "#8FC97A", // string literals
  punctuation: "#71717A", // braces, colons, commas, semicolons — TEXT_MUTED
  comment: "#71717A", // TEXT_MUTED
  plain: "#F4F4F5", // TEXT_LIGHT
};

export default function CodeWindow() {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;
    if (mq.matches) {
      setText(ROTATING_LINES[0]);
      return;
    }

    const currentLine = ROTATING_LINES[lineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < currentLine.length) {
        timeout = setTimeout(() => {
          setText(currentLine.slice(0, text.length + 1));
        }, TYPING_SPEED_MS);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), PAUSE_AFTER_TYPE_MS);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentLine.slice(0, text.length - 1));
        }, DELETING_SPEED_MS);
      } else {
        timeout = setTimeout(() => {
          setLineIndex((prev) => (prev + 1) % ROTATING_LINES.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETE_MS);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, lineIndex]);

  return (
    <div
      className="
        rounded-[5px] border border-[#1D1D21] bg-[#08080A]
        shadow-[0_1px_2px_rgba(0,0,0,0.25)]
        w-full max-w-[520px] mx-auto lg:mx-0
        overflow-hidden
      "
    >
      {/* Window bar */}
      <div className="flex items-center gap-2 border-b border-[#1D1D21] bg-[#0B0B0D] px-4 h-11">
        <span className="h-[11px] w-[11px] rounded-full bg-[#E0605A]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#D9A441]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#4E9F5B]" />
        <span className="ml-3 font-mono text-[12px] text-[#71717A]">
          about-me.ts
        </span>
      </div>

      {/* Code body — fixed height to prevent CLS */}
      <div className="px-6 py-5 font-mono text-[13.5px] leading-[1.75] h-[240px] overflow-hidden">
        {/* Fixed intro block */}
        <pre className="whitespace-pre-wrap break-words m-0">
          <span style={{ color: SYNTAX.keyword }}>const</span>{" "}
          <span style={{ color: SYNTAX.plain }}>developer</span>{" "}
          <span style={{ color: SYNTAX.punctuation }}>=</span>{" "}
          <span style={{ color: SYNTAX.punctuation }}>{"{"}</span>
          {"\n"}
          {"  "}
          <span style={{ color: SYNTAX.property }}>name</span>
          <span style={{ color: SYNTAX.punctuation }}>: </span>
          <span style={{ color: SYNTAX.string }}>&quot;Aazib Ali&quot;</span>
          <span style={{ color: SYNTAX.punctuation }}>,</span>
          {"\n"}
          {"  "}
          <span style={{ color: SYNTAX.property }}>role</span>
          <span style={{ color: SYNTAX.punctuation }}>: </span>
          <span style={{ color: SYNTAX.string }}>
            &quot;Full Stack &amp; App Developer&quot;
          </span>
          <span style={{ color: SYNTAX.punctuation }}>,</span>
          {"\n"}
          {"  "}
          <span style={{ color: SYNTAX.property }}>location</span>
          <span style={{ color: SYNTAX.punctuation }}>: </span>
          <span style={{ color: SYNTAX.string }}>&quot;Pakistan&quot;</span>
          <span style={{ color: SYNTAX.punctuation }}>,</span>
          {"\n"}
          <span style={{ color: SYNTAX.punctuation }}>{"};"}</span>
        </pre>

        {/* Animated block — decorative, hidden from assistive tech */}
        <pre className="mt-5 whitespace-pre-wrap break-words m-0" aria-hidden="true">
          <span style={{ color: SYNTAX.comment }}>{"// what I do"}</span>
          {"\n"}
          <span style={{ color: SYNTAX.string }}>{text}</span>
          <span
            className="inline-block w-[2px] h-[15px] align-middle bg-[#5B5FF8] ml-[2px] animate-pulse motion-reduce:animate-none"
            style={{ animationDuration: "1s" }}
          />
        </pre>
      </div>
    </div>
  );
}