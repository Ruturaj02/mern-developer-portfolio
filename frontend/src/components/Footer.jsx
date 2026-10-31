
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#080b12] px-5 text-white md:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-3">

          {/* Branding */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold">
                RS
              </span>

              <span className="text-lg font-semibold tracking-wide">
                Ruturaj<span className="text-cyan-400">.</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              MERN Stack Developer passionate about building
              scalable, responsive, and user-friendly web
              applications.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Open to opportunities in Bengaluru and Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gray-300">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-gray-400 transition hover:text-cyan-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-gray-300">
              Let's Connect
            </h3>

            <p className="mb-5 text-sm leading-6 text-gray-400">
              Have an opportunity or want to discuss a project?
              Feel free to get in touch.
            </p>

            <a
              href="mailto:rtrjswnn@gmail.com"
              className="group inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
            >
              <Mail size={17} />
              rtrjswnn@gmail.com
              <ArrowUpRight
                size={15}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="https://github.com/Ruturaj02"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-gray-400 transition hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.7 2.59 1.21 3.22.93.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.53.23 2.67.11 2.95.72.78 1.15 1.78 1.15 3 0 4.29-2.61 5.23-5.1 5.51.4.35.75 1.02.75 2.06V22c0 .29.2.63.76.53A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/ruturaj-swain-440843260/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-gray-400 transition hover:border-cyan-400/40 hover:text-cyan-400"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V8.99h3.56v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.73V1.73C24 .77 23.19 0 22.22 0Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-6 sm:flex-row">

          <p className="text-center text-xs text-gray-500 sm:text-left">
            © {currentYear} Ruturaj Swain. All rights reserved.
          </p>

          <p className="text-xs text-gray-500">
            Built with React.js & Tailwind CSS
          </p>

          {/* Back To Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-gray-400 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400"
          >
            <ArrowUp size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}
