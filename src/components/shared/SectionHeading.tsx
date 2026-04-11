"use client";

import { AnimatedSection } from "./AnimatedSection";

interface SectionHeadingProps {
  label?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  titleHighlight,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass} ${className}`}>
      {label && (
        <AnimatedSection delay={0} direction="up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[rgba(212,168,83,0.1)] text-[#D4A853] border border-[rgba(212,168,83,0.2)] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />
            {label}
          </span>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.1} direction="up">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
          {titleHighlight ? (
            <>
              {title}{" "}
              <span className="text-gradient-gold">{titleHighlight}</span>
            </>
          ) : (
            title
          )}
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection delay={0.2} direction="up">
          <p className="mt-4 md:mt-6 text-base md:text-lg text-[rgba(245,245,245,0.6)] leading-relaxed">
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
