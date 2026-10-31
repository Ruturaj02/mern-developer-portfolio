
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  BriefcaseBusiness,
  Code2,
  Layers3,
  Image as ImageIcon,
  Lightbulb,
  CheckCircle2,
  Monitor,
  Building2,
} from "lucide-react";

// Custom GitHub SVG icon
function GithubIcon({ size = 18 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

import { API_URL } from "../config/api";

export default function ProjectDetails() {
  const { slug } = useParams();

  const [project, setProject] = useState(null);
  const [navigationProjects, setNavigationProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch current project details
  useEffect(() => {
    const controller = new AbortController();

    const fetchProject = async () => {
      try {
        setLoading(true);
        setError("");
        setProject(null);

        const response = await axios.get(
          `${API_URL}/${encodeURIComponent(slug)}`,
          { signal: controller.signal }
        );

        setProject(response.data.data);
      } catch (err) {
        if (axios.isCancel(err)) return;

        console.error("Project details error:", err);

        setError(
          err.response?.status === 404
            ? "Project not found."
            : "Unable to load project details. Please try again."
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    if (slug) {
      fetchProject();
    }

    return () => controller.abort();
  }, [slug]);

  // Fetch project navigation list
  useEffect(() => {
    const controller = new AbortController();

    const fetchNavigationProjects = async () => {
      try {
        const response = await axios.get(`${API_URL}/navigation`, {
          signal: controller.signal,
        });

        setNavigationProjects(response.data.data || []);
      } catch (err) {
        if (!axios.isCancel(err)) {
          console.error("Project navigation error:", err);
        }
      }
    };

    fetchNavigationProjects();

    return () => controller.abort();
  }, []);

  // Find previous and next projects
  const currentIndex = navigationProjects.findIndex(
    (item) => item.slug === slug
  );

  const previousProject =
    currentIndex > 0 ? navigationProjects[currentIndex - 1] : null;

  const nextProject =
    currentIndex >= 0 && currentIndex < navigationProjects.length - 1
      ? navigationProjects[currentIndex + 1]
      : null;

  // Loading state
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#080808] text-zinc-400">
        Loading project details...
      </div>
    );
  }

  // Error state
  if (error || !project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-[#080808] px-5 text-center">
        <h1 className="text-2xl font-semibold text-white">
          {error || "Project not found."}
        </h1>

        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm text-zinc-300 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>
      </div>
    );
  }

  const isPersonal = project.projectType === "personal";
  const isCompany = project.projectType === "company";

  const showLiveDemo =
    isPersonal && project.showLiveDemo && Boolean(project.liveUrl);

  const showGithub = isPersonal && Boolean(project.githubUrl);

  return (
    <main className="min-h-screen bg-[#080808] px-5 pb-20 pt-28 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Back navigation */}
        <Link
          to="/#projects"
          className="mb-12 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        {/* Project header */}
        <header className="border-b border-white/10 pb-12">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs capitalize text-zinc-400">
              {isCompany ? <Building2 size={14} /> : <Code2 size={14} />}
              {project.projectType} Project
            </span>

            <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs capitalize text-zinc-400">
              {project.category}
            </span>
          </div>

          <h1 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
            {project.description}
          </p>

          {/* Personal project links only */}
          {(showLiveDemo || showGithub) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {showLiveDemo && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                >
                  Live Demo
                  <ExternalLink size={16} />
                </a>
              )}

              {showGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm text-white transition hover:bg-white/5"
                >
                  <GithubIcon size={18} />
                  GitHub
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          )}
        </header>

        {/* Personal project cover image */}
        {isPersonal && project.coverImage && (
          <section className="mt-10">
            <img
              src={project.coverImage}
              alt={`${project.title} project cover`}
              className="max-h-[520px] w-full rounded-2xl border border-white/10 object-cover"
            />
          </section>
        )}

        {/* Main project content */}
        <div className="grid gap-12 py-12 md:grid-cols-[1fr_300px]">
          <div className="min-w-0 space-y-14">
            {/* Problem */}
            {project.problem && (
              <section>
                <div className="mb-5 flex items-center gap-3">
                  <Layers3 size={20} className="text-zinc-400" />
                  <h2 className="text-xl font-medium">The Problem</h2>
                </div>

                <p className="leading-8 text-zinc-400">
                  {project.problem}
                </p>
              </section>
            )}

            {/* Solution */}
            {project.solution && (
              <section>
                <div className="mb-5 flex items-center gap-3">
                  <Lightbulb size={20} className="text-zinc-400" />
                  <h2 className="text-xl font-medium">The Solution</h2>
                </div>

                <p className="leading-8 text-zinc-400">
                  {project.solution}
                </p>
              </section>
            )}

            {/* Features */}
            {project.features?.length > 0 && (
              <section>
                <div className="mb-6 flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-zinc-400" />
                  <h2 className="text-xl font-medium">Key Features</h2>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature, index) => (
                    <div
                      key={`${index}-${feature}`}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0 text-zinc-500"
                      />
                      <p className="text-sm leading-7 text-zinc-400">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Responsibilities */}
            {project.responsibilities?.length > 0 && (
              <section>
                <div className="mb-6 flex items-center gap-3">
                  <BriefcaseBusiness size={20} className="text-zinc-400" />
                  <h2 className="text-xl font-medium">
                    {isCompany ? "My Responsibilities" : "My Contributions"}
                  </h2>
                </div>

                <ul className="space-y-4">
                  {project.responsibilities.map((item, index) => (
                    <li
                      key={`${index}-${item}`}
                      className="flex gap-4 leading-7 text-zinc-400"
                    >
                      <span className="font-mono text-xs text-zinc-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Technical highlights */}
            {project.technicalHighlights?.length > 0 && (
              <section>
                <div className="mb-6 flex items-center gap-3">
                  <Code2 size={20} className="text-zinc-400" />
                  <h2 className="text-xl font-medium">Technical Highlights</h2>
                </div>

                <ul className="space-y-4">
                  {project.technicalHighlights.map((item, index) => (
                    <li
                      key={`${index}-${item}`}
                      className="flex items-start gap-3 text-sm leading-7 text-zinc-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Architecture - personal projects only */}
            {isPersonal && project.architecture && (
              <section>
                <div className="mb-5 flex items-center gap-3">
                  <Layers3 size={20} className="text-zinc-400" />
                  <h2 className="text-xl font-medium">
                    Application Architecture
                  </h2>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#101010] p-5 sm:p-6">
                  <p className="whitespace-pre-line text-sm leading-8 text-zinc-400">
                    {project.architecture}
                  </p>
                </div>
              </section>
            )}

            {/* Screenshots - personal projects only */}
            {isPersonal && project.screenshots?.length > 0 && (
              <section>
                <div className="mb-6 flex items-center gap-3">
                  <ImageIcon size={20} className="text-zinc-400" />
                  <h2 className="text-xl font-medium">Project Screenshots</h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {project.screenshots.map((screenshot, index) => (
                    <div
                      key={`${index}-${screenshot}`}
                      className="overflow-hidden rounded-xl border border-white/10 bg-[#101010]"
                    >
                      <img
                        src={screenshot}
                        alt={`${project.title} screenshot ${index + 1}`}
                        loading="lazy"
                        className="h-auto min-h-40 w-full object-cover transition duration-500 hover:scale-[1.03]"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Project information sidebar */}
          <aside className="h-fit rounded-2xl border border-white/10 bg-[#101010] p-6">
            <h2 className="mb-7 text-sm font-medium text-white">
              Project Information
            </h2>

            <div className="space-y-7">
              <div>
                <p className="mb-2 text-xs uppercase tracking-wider text-zinc-600">
                  My Role
                </p>
                <p className="text-sm leading-6 text-zinc-300">
                  {project.role || "Not specified"}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-wider text-zinc-600">
                  Project Type
                </p>
                <p className="text-sm capitalize text-zinc-300">
                  {project.projectType}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs uppercase tracking-wider text-zinc-600">
                  Category
                </p>
                <p className="text-sm capitalize text-zinc-300">
                  {project.category}
                </p>
              </div>

              <div>
                <p className="mb-3 text-xs uppercase tracking-wider text-zinc-600">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Personal project bottom links */}
        {isPersonal && (showLiveDemo || showGithub) && (
          <section className="mb-12 rounded-2xl border border-white/10 bg-[#101010] p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-medium">
                  Interested in this project?
                </h2>
                <p className="mt-2 text-sm leading-7 text-zinc-500">
                  Explore the application or review its source code.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {showLiveDemo && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                  >
                    <Monitor size={16} />
                    View Demo
                    <ArrowUpRight size={15} />
                  </a>
                )}

                {showGithub && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm text-white transition hover:bg-white/5"
                  >
                    <GithubIcon size={17} />
                    Source Code
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Previous / Next project navigation */}
        <section className="border-t border-white/10 pt-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-sm font-medium text-zinc-400">
              Explore More Projects
            </h2>

            <Link
              to="/#projects"
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              All projects
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {previousProject ? (
              <Link
                to={`/projects/${encodeURIComponent(previousProject.slug)}`}
                className="group rounded-xl border border-white/10 bg-[#101010] p-5 transition hover:border-white/25 hover:bg-white/[0.04]"
              >
                <span className="mb-4 flex items-center gap-2 text-xs text-zinc-500">
                  <ArrowLeft size={14} />
                  Previous project
                </span>

                <h3 className="font-medium text-zinc-200 transition group-hover:text-white">
                  {previousProject.title}
                </h3>

                <p className="mt-2 text-xs capitalize text-zinc-500">
                  {previousProject.projectType} project
                </p>
              </Link>
            ) : (
              <div className="rounded-xl border border-dashed border-white/10 p-5">
                <span className="text-xs text-zinc-600">
                  This is the first project
                </span>
              </div>
            )}

            {nextProject ? (
              <Link
                to={`/projects/${encodeURIComponent(nextProject.slug)}`}
                className="group rounded-xl border border-white/10 bg-[#101010] p-5 text-left transition hover:border-white/25 hover:bg-white/[0.04] sm:text-right"
              >
                <span className="mb-4 flex items-center justify-start gap-2 text-xs text-zinc-500 sm:justify-end">
                  Next project
                  <ArrowRight size={14} />
                </span>

                <h3 className="font-medium text-zinc-200 transition group-hover:text-white">
                  {nextProject.title}
                </h3>

                <p className="mt-2 text-xs capitalize text-zinc-500">
                  {nextProject.projectType} project
                </p>
              </Link>
            ) : (
              <div className="rounded-xl border border-dashed border-white/10 p-5 sm:text-right">
                <span className="text-xs text-zinc-600">
                  This is the last project
                </span>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
