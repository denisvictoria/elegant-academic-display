import { useEffect, useRef, useState } from "react";

interface NavBarProps {
  sections: { id: string; label: string }[];
}

const NavBar = ({ sections }: NavBarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      const pages = document.querySelectorAll("[data-section]");
      let current = "home";
      pages.forEach((page) => {
        if (window.scrollY >= (page as HTMLElement).offsetTop - 100) {
          current = page.getAttribute("data-section") || current;
        }
      });
      setActiveId(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 transition-all duration-400
        ${scrolled ? "py-2 shadow-academic-lg" : "py-3"}
        bg-primary/[0.97] backdrop-blur-md`}
    >
      <span className="font-serif font-semibold text-primary-foreground text-sm">
        Contractor (2007)
      </span>
      <ul className="flex flex-wrap gap-1 list-none">
        {sections.map((s) => (
          <li key={s.id}>
            <button
              onClick={() => scrollTo(s.id)}
              className={`text-xs font-medium px-3 py-2 rounded transition-all duration-300
                ${activeId === s.id
                  ? "bg-primary-foreground/15 text-primary-foreground"
                  : "text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                }`}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
