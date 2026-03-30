import { useEffect, useRef } from "react";

interface SectionWrapperProps {
  id: string;
  variant?: "default" | "alt" | "dark";
  children: React.ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, variant = "default", children, className = "" }: SectionWrapperProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    // Check initial visibility
    if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
      el.classList.add("visible");
    }
    return () => observer.disconnect();
  }, []);

  const bgClass = {
    default: "bg-background",
    alt: "bg-surface-warm",
    dark: "bg-gradient-to-b from-surface-dark to-primary text-primary-foreground",
  }[variant];

  return (
    <section
      ref={ref}
      id={id}
      data-section={id}
      className={`section-fade-in min-h-screen flex flex-col justify-center relative py-20 px-8 ${bgClass} ${className}`}
    >
      <div className="max-w-[1100px] mx-auto w-full">{children}</div>
    </section>
  );
};

export default SectionWrapper;
