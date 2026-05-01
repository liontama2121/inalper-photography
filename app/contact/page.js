"use client";
import { useState, useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const EVENT_TYPES = [
  "Sports Event",
  "Corporate Event",
  "Landscape / Nature",
  "Documentary",
  "Other",
];

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const { default: anime } = await import("animejs");

    // Animate button
    anime({
      targets: ".submit-btn",
      scale: [1, 0.96, 1],
      duration: 600,
      easing: "easeInOutExpo",
    });

    // Simulate send
    await new Promise((r) => setTimeout(r, 1200));

    // Success animation
    anime({
      targets: formRef.current,
      opacity: [1, 0],
      translateY: [0, -20],
      duration: 400,
      easing: "easeInExpo",
    });

    setStatus("sent");
  };

  return (
    <div className="min-h-screen pt-28">
      <div className="px-8 md:px-16 py-16 border-b border-white/10">
        <p className="text-xs tracking-[0.4em] uppercase text-white/30 mb-4">
          Contact
        </p>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight">
          Let&apos;s talk
        </h1>
      </div>

      <div className="px-8 md:px-16 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left info */}
        <div className="flex flex-col gap-10">
          <ScrollReveal>
            <p className="text-lg font-light leading-relaxed text-white/60 max-w-sm">
              Available for sports events, editorial projects, and documentary
              work across Colombia and internationally.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="flex flex-col gap-4 text-sm">
              {[
                ["Email", "inaldo@inalper.com"],
                ["Instagram", "@inalper_photo"],
                ["Location", "Colombia"],
              ].map(([label, value]) => (
                <div key={label}>
                  <span className="text-xs tracking-[0.2em] uppercase text-white/25 block mb-1">
                    {label}
                  </span>
                  <span className="text-white/60">{value}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Form */}
        <ScrollReveal delay={100} direction="right">
          {status === "sent" ? (
            <div className="flex flex-col gap-4 py-16">
              <p className="text-xs tracking-[0.3em] uppercase text-white/30">
                Message sent
              </p>
              <p className="text-2xl font-light text-white/80">
                Thank you. I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-8"
            >
              {[
                { id: "name", label: "Name", type: "text", required: true },
                { id: "email", label: "Email", type: "email", required: true },
              ].map(({ id, label, type, required }) => (
                <div key={id} className="flex flex-col gap-2">
                  <label
                    htmlFor={id}
                    className="text-xs tracking-[0.25em] uppercase text-white/30"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    required={required}
                    className="bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/60 transition-colors"
                    placeholder={label}
                  />
                </div>
              ))}

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="event"
                  className="text-xs tracking-[0.25em] uppercase text-white/30"
                >
                  Type of project
                </label>
                <select
                  id="event"
                  name="event"
                  className="bg-black border-b border-white/20 pb-3 text-white/60 text-sm focus:outline-none focus:border-white/60 transition-colors appearance-none"
                >
                  <option value="">Select type</option>
                  {EVENT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-xs tracking-[0.25em] uppercase text-white/30"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="bg-transparent border-b border-white/20 pb-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/60 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="submit-btn mt-4 border border-white px-10 py-4 text-xs tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-colors duration-500 w-fit disabled:opacity-40"
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </div>
  );
}
