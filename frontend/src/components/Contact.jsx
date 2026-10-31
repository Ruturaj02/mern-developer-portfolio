
import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
} from "lucide-react";

// Custom GitHub icon
const GithubIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

// Custom LinkedIn icon
const LinkedinIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V8.99h3.56v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.73V1.73C24 .77 23.19 0 22.22 0Z" />
  </svg>
);

// Contact details
const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "rtrjswnn@gmail.com",
    href: "mailto:rtrjswnn@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8117008492",
    href: "tel:+918117008492",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/ruturaj-swain-440843260/",
    external: true,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "Explore my repositories",
    href: "https://github.com/Ruturaj02",
    external: true,
  },
];

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSending) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatus({
        type: "error",
        message: "Please fill in all fields.",
      });
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email service is not configured. Please try again later.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          subject: `Portfolio Contact from ${name}`,
          message,
        },
        {
          publicKey,
        }
      );

      setStatus({
        type: "success",
        message: "Your message has been sent successfully. I'll get back to you soon!",
      });

      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message: "Unable to send your message. Please try again later.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#080b12] px-5 py-24 text-white md:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Let's Work Together
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            I'm open to MERN Stack Developer opportunities,
            challenging projects, and opportunities to build
            impactful products. Feel free to reach out.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">
              Contact Information
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group rounded-2xl border border-white/10 bg-white/3 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/6"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                      <Icon />
                    </div>

                    <p className="mb-2 text-sm text-gray-500">
                      {item.label}
                    </p>

                    <div className="flex items-center justify-between gap-2">
                      <span className="break-all text-sm font-medium text-gray-200">
                        {item.value}
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-gray-500 transition group-hover:text-cyan-400"
                      />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Location */}
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/3 p-5">
              <div className="flex items-center gap-3">
                <MapPin className="text-cyan-400" size={21} />

                <div>
                  <p className="font-medium text-gray-200">
                    Preferred Locations
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Bengaluru · Hyderabad · Open to relocation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-white/3 p-6 md:p-8">
            <h3 className="mb-2 text-xl font-semibold">
              Send Me a Message
            </h3>

            <p className="mb-7 text-sm text-gray-400">
              Have an opportunity or a project in mind?
              Let's talk.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-gray-300">
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-[#0c111b] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-gray-300">
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-[#0c111b] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-gray-300">
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  maxLength={5000}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#0c111b] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-cyan-400"
                />
              </div>

              {status.message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-green-400/20 bg-green-400/10 text-green-300"
                      : "border-red-400/20 bg-red-400/10 text-red-300"
                  }`}
                >
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3.5 font-semibold text-[#080b12] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Message"}
                {!isSending && <Send size={17} />}
              </button>

              <p className="text-center text-xs text-gray-500">
                Your message will be delivered directly to my inbox.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
