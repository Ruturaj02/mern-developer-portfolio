
const skillGroups = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "State Management",
    skills: ["Redux Toolkit", "Zustand", "Context API", "React Query"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.io"],
  },
  {
    title: "Database & Caching",
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Redis"],
  },
  {
    title: "AI Integration",
    skills: ["OpenAI API", "Gemini API", "Prompt Engineering"],
  },
  {
    title: "Testing & Tools",
    skills: ["Jest", "Postman", "Git", "GitHub"],
  },
  {
    title: "DevOps & Deployment",
    skills: ["Docker", "CI/CD", "Vercel", "Render"],
  },
  // {
  //   title: "DSA & Problem Solving",
  //   skills: ["Data Structures", "Algorithms", "Python", "Complexity Analysis"],
  // },
  // {
  //   title: "System Design",
  //   skills: ["HLD", "LLD", "API Design", "Database Design", "Caching"],
  // },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/[0.07] px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
            02 / Technical expertise
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Skills & Technologies<span className="text-zinc-600">.</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
            Technologies and engineering concepts I use to build
            modern full-stack applications.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="rounded-xl border border-white/8 bg-white/2 p-5 transition duration-300 hover:border-white/20 hover:bg-white/4"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-zinc-200">
                  {group.title}
                </h3>

                <span className="font-mono text-[10px] text-zinc-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/[0.07] bg-white/2.5 px-2.5 py-1.5 text-[11px] text-zinc-400 transition hover:border-white/20 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
