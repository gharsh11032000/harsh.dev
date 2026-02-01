import React from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  darker?: boolean;
  /** Remove bottom padding so the next section sits flush (e.g. Services above LeadMagnet) */
  noSpaceBelow?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = "",
  darker = false,
  noSpaceBelow = false,
}) => {
  return (
    <section
      id={id}
      className={`overflow-hidden ${darker ? "bg-black" : "bg-neutral-900"} ${className}`}
      style={{
        paddingTop: "var(--section-padding-block)",
        paddingBottom: noSpaceBelow ? 0 : "var(--section-padding-block)",
      }}
    >
      <div className="container">
        {(title || subtitle) && (
          <div className="mb-10 sm:mb-14 md:mb-16 text-center max-w-[min(48rem,100%)] mx-auto min-w-0">
            {title && (
              <h2
                className="font-bold uppercase mb-3 sm:mb-4 text-white tracking-tighter text-balance wrap-break-word"
                style={{ fontSize: "var(--text-section-title)" }}
              >
                {title} <span className="text-yellow-500">.</span>
              </h2>
            )}
            {subtitle && (
              <p
                className="text-neutral-400 font-medium"
                style={{ fontSize: "var(--text-body)" }}
              >
                {subtitle}
              </p>
            )}
            <div className="h-1 w-20 sm:w-24 bg-yellow-500 rounded-full mx-auto mt-4 sm:mt-6" />
          </div>
        )}
        <div className="min-w-0 w-full">{children}</div>
      </div>
    </section>
  );
};

export default Section;
