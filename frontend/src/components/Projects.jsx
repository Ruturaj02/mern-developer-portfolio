
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { API_URL } from "../config/api";

// ==========================================
// REUSABLE PROJECT CARD
// ==========================================

function ProjectCard({
  project,
  index,
  compact = false,
  showLinks = false,
}) {
  const type = project.category
    ? `${project.projectType} / ${project.category}`
    : project.projectType;

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border border-white/8 bg-[#101010] transition duration-300 hover:border-white/20 ${
        compact ? "p-5 sm:p-6" : "p-6 sm:p-8"
      }`}
    >
      <Link
        to={`/projects/${encodeURIComponent(project.slug)}`}
        aria-label={`View details for ${project.title}`}
        className="flex flex-1 flex-col rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-white/50"
      >
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="mb-2 font-mono text-xs text-zinc-600">
              PROJECT / {String(index + 1).padStart(2, "0")}
            </p>

            <h3
              className={`flex items-center gap-2 font-medium tracking-tight text-white transition group-hover:text-zinc-300 ${
                compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
              }`}
            >
              {project.title}
              <ArrowUpRight
                size={17}
                className="shrink-0 text-zinc-600 opacity-0 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
              />
            </h3>
          </div>

          <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400">
            {type}
          </span>
        </div>

        <p className="text-sm leading-7 text-zinc-400">
          {project.description}
        </p>

        {project.responsibilities?.length > 0 && (
          <div className="mt-5">
            <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              Key contributions
            </h4>

            <ul className="space-y-2">
              {project.responsibilities.map((item, itemIndex) => (
                <li
                  key={`${itemIndex}-${item}`}
                  className="flex gap-3 text-sm leading-6 text-zinc-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-auto pt-6">
          <div className="border-t border-white/[0.07] pt-5">
            <h4 className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              Technologies
            </h4>

            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-white/8 bg-white/2.5 px-2.5 py-1.5 text-xs text-zinc-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>

      {/* External links stay outside the project details link */}
      {showLinks && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Live Demo
              <ArrowUpRight size={16} />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm text-zinc-300 transition hover:border-white/25 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              GitHub
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      )}
    </article>
  );
}

// ==========================================
// COMPANY WORK CAROUSEL
// ==========================================

function CompanyCarousel({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [projects.length]);

  const previousProject = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const nextProject = () => {
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  if (!projects.length) {
    return (
      <div className="rounded-2xl border border-white/8 bg-[#101010] p-10 text-center text-sm text-zinc-400">
        No company projects available yet.
      </div>
    );
  }

  return (
    <div>
      <div className="overflow-hidden">
        <div
          className="flex items-stretch transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project._id || project.slug}
              className="w-full shrink-0 px-0.5"
              aria-hidden={activeIndex !== index}
            >
              <ProjectCard
                project={project}
                index={index}
                compact
              />
            </div>
          ))}
        </div>
      </div>

      {projects.length > 1 && (
        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project._id || project.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${project.title}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-white"
                    : "w-3 bg-zinc-700 hover:bg-zinc-500"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="mr-1 font-mono text-xs text-zinc-500">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={previousProject}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// MAIN PROJECTS SECTION
// ==========================================

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(API_URL, {
          signal: controller.signal,
        });

        setProjects(response.data.data || []);
      } catch (err) {
        if (axios.isCancel(err)) return;

        console.error("Projects fetch error:", err);
        setError("Unable to load projects. Please try again later.");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchProjects();

    return () => controller.abort();
  }, []);

  const companyProjects = projects.filter(
    (project) => project.projectType === "company"
  );

  const personalProjects = projects.filter(
    (project) => project.projectType === "personal"
  );

  return (
    <section
      id="projects"
      className="border-t border-white/[0.07] px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
          03 / Selected work
        </p>

        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Work that solves real problems.
          </h2>

          <p className="mt-5 text-base leading-7 text-zinc-400">
            A selection of professional and independent work focused on
            full-stack development, practical features, and maintainable
            applications.
          </p>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-white/8 bg-[#101010] p-10 text-center text-sm text-zinc-400">
            Loading projects...
          </div>
        ) : error ? (
          <div className="rounded-2xl border border-red-500/20 bg-[#101010] p-10 text-center text-sm text-red-400">
            {error}
          </div>
        ) : (
          <>
            {/* COMPANY WORK */}
            <div className="mb-16">
              <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="mb-2 font-mono text-xs text-zinc-600">
                    COLLECTION / 01
                  </p>

                  <h3 className="text-2xl font-medium tracking-tight text-white">
                    Company Work
                  </h3>
                </div>

                <p className="max-w-lg text-sm leading-6 text-zinc-500 sm:text-right">
                  Professional projects and full-stack features developed as
                  part of my engineering work.
                </p>
              </div>

              <CompanyCarousel projects={companyProjects} />
            </div>

            {/* PERSONAL PROJECTS */}
            <div>
              <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <p className="mb-2 font-mono text-xs text-zinc-600">
                    COLLECTION / 02
                  </p>

                  <h3 className="text-2xl font-medium tracking-tight text-white">
                    Personal Projects
                  </h3>
                </div>

                <p className="max-w-lg text-sm leading-6 text-zinc-500 sm:text-right">
                  Independent projects demonstrating practical implementation,
                  experimentation, and continued learning.
                </p>
              </div>

              {personalProjects.length > 0 ? (
                <div className="grid gap-5 lg:grid-cols-2">
                  {personalProjects.map((project, index) => (
                    <ProjectCard
                      key={project._id || project.slug}
                      project={project}
                      index={index}
                      showLinks
                    />
                  ))}
                </div>
              ) : (
                <div className="rounded-2xl border border-white/8 bg-[#101010] p-10 text-center text-sm text-zinc-400">
                  No personal projects available yet.
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
