export default function About() {
  return (
    <section id="about" className="border-t border-white/[0.07] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
          01 / About me
        </p>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
              Turning ideas into
              <span className="text-zinc-500"> functional products.</span>
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-zinc-400">
              I'm a MERN Stack Developer with 3 years of experience
              working across frontend and backend development.
              I build web applications using React, Node.js,
              Express.js, and MongoDB, with a focus on clean
              architecture, reusable components, and practical
              problem-solving.
            </p>

            <p className="mt-5 text-base leading-8 text-zinc-400">
              My experience includes working on e-commerce,
              healthcare, and real-time communication applications.
              I enjoy understanding business requirements and
              translating them into reliable software solutions.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                <p className="text-2xl font-semibold text-white">3+</p>
                <p className="mt-2 text-xs text-zinc-500">
                  Years of experience
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
                <p className="text-2xl font-semibold text-white">MERN</p>
                <p className="mt-2 text-xs text-zinc-500">
                  Full-stack development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}