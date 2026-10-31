import { ArrowDown, ArrowUpRight } from "lucide-react";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "TypeScript",
  "Python",
  "Docker"
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-76px)] items-center overflow-hidden px-5 py-20 sm:px-8 lg:px-12"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute right-[-10%] top-[5%] h-72 w-72 rounded-full bg-white/4 blur-[100px] sm:h-96 sm:w-96" />

        <div className="absolute bottom-[-10%] left-[-10%] h-72 w-72 rounded-full bg-indigo-500/6 blur-[100px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size[64px_64px] mask-[linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        {/* Main introduction */}
        <div>
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-medium tracking-wide text-zinc-300">
              MERN Stack Developer · Open to Opportunities
            </span>
          </div>

          <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Hello, I'm Ruturaj Swain
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            I build
            <span className="text-zinc-500"> full-stack </span>
            web experiences.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I develop responsive user interfaces and robust backend services
            using React, Node.js, Express, and MongoDB. I focus on maintainable
            code, thoughtful user experiences, and reliable application
            architecture.
          </p>

          {/* Technology badges */}
          <div className="mt-7 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-white/9 bg-white/2.5 px-3 py-2 text-xs text-zinc-400 transition hover:border-white/20 hover:text-zinc-200"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Explore my work
              <ArrowUpRight size={16} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/6"
            >
              Get in touch
            </a>
          </div>

          {/* Social links */}
          {/* Social links */}
          <div className="mt-10 flex items-center gap-5">
            <span className="text-xs text-zinc-600">FIND ME ON</span>

            <a
              href="https://github.com/Ruturaj02"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ruturaj-swain-440843260/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Developer identity card */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-4 rounded-4xl border border-white/4" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101012] p-6 shadow-2xl shadow-black/30 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/8 pb-5">
              <div>
                <p className="text-sm font-medium text-white">
                  Developer Profile
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Full-stack engineering
                </p>
              </div>

              <span className="rounded-lg border border-white/10 px-3 py-1.5 font-mono text-xs text-zinc-400">
                {"</>"}
              </span>
            </div>

            <div className="py-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-2xl font-semibold tracking-tight text-white">
                RS
              </div>

              <h2 className="mt-5 text-2xl font-semibold text-white">
                Ruturaj Swain
              </h2>

              <p className="mt-2 text-sm text-zinc-400">MERN Stack Developer</p>

              <p className="mt-5 text-sm leading-7 text-zinc-500">
                Building end-to-end web applications across frontend, backend,
                APIs, and data layers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/[0.07] bg-white/2.5 p-4">
                <p className="text-xs text-zinc-500">Core focus</p>
                <p className="mt-2 text-sm font-medium text-zinc-200">
                  Full-stack apps
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.07] bg-white/2.5 p-4">
                <p className="text-xs text-zinc-500">Development</p>
                <p className="mt-2 text-sm font-medium text-zinc-200">
                  End to end
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-xl border border-white/[0.07] px-4 py-3">
              <span className="text-xs text-zinc-500">
                Current technology focus
              </span>
              <span className="text-xs font-medium text-zinc-300">
                MERN + TypeScript + Ai
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-zinc-600 transition hover:text-zinc-300 sm:flex"
      >
        Scroll to explore
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
