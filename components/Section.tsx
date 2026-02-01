import React from "react";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  darker?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = "",
  darker = false,
}) => {
  return (
    <section
      id={id}
      className={`py-12 md:py-20 ${darker ? "bg-black" : "bg-neutral-900"} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {(title || subtitle) && (
          <div className="mb-16 text-center max-w-3xl mx-auto">
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4 text-white tracking-tighter">
                {title} <span className="text-yellow-500">.</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-400 font-medium">{subtitle}</p>
            )}
            <div className="h-1 w-24 bg-yellow-500 mx-auto mt-6"></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
