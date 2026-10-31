
import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Download,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const resumeLink =
  "https://drive.google.com/uc?export=download&id=1iB8eE8q_PT_L8AKkljTY6gorxDgcDW1h";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#09090b]/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/6 text-sm font-bold text-white transition group-hover:border-white/25">
            RS
          </span>

          <span className="text-sm font-semibold tracking-wide text-white sm:text-base">
            Ruturaj<span className="text-zinc-500">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden items-center gap-3 sm:flex">

          {/* Resume Download */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 px-4 py-2.5 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-[#080b12]"
          >
            <Download size={16} />
            Resume
          </a>

          {/* Let's Talk */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-2.5 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
          >
            Let's talk
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-300 transition hover:bg-white/6 md:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/8 bg-[#09090b] px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Resume */}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-cyan-400/40 px-4 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-[#080b12]"
            >
              <Download size={17} />
              Download Resume
            </a>

            {/* Mobile Contact */}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-semibold text-black"
            >
              Let's talk
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
