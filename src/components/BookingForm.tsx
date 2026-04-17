"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import { BlurFade } from "./ui/BlurFade";
import { ShinyButton } from "./ui/ShinyButton";

const GROUP_SIZES = ["1-2", "3-4", "5-6", "7-10", "10+"];

const HEARD_ABOUT_OPTIONS = [
  "Google Search",
  "Social Media (Instagram, Facebook, TikTok)",
  "Friend or Family",
  "Google Maps or Reviews",
  "Returning Customer",
  "News Article or Blog",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !payload.ok) {
        setErrorMsg(
          payload.error ||
            "Something went wrong. Please try again, or email jcpl-07@hotmail.com directly."
        );
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setErrorMsg(
        "Network error. Please check your connection and try again."
      );
      setStatus("error");
    }
  }

  return (
    <section id="booking" className="bg-charcoal-warm w-full py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <BlurFade>
          <p className="flex items-center justify-center gap-2 text-gold/90 text-[13px] md:text-sm tracking-wide text-center mb-5">
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full bg-gold animate-pulse"
            />
            Only 7 of 20 units still available
          </p>
        </BlurFade>
        <BlurFade delay={0.1}>
          <h2 className="font-display text-cream text-4xl md:text-5xl text-center leading-tight mb-5">
            Let&apos;s Lock in Your Dates.
          </h2>
        </BlurFade>
        <BlurFade delay={0.15}>
          <p className="text-text-secondary text-center text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Fill out the form below and Weston will personally reach out within 24
            hours to walk you through options, answer questions, and confirm your
            unit.
          </p>
        </BlurFade>

        <BlurFade delay={0.25}>
          <div className="bg-charcoal/80 border border-gold/15 rounded-2xl p-8 md:p-10 backdrop-blur-sm animate-pulse-gold shadow-[0_0_30px_rgba(212,168,83,0.08)]">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-10"
                >
                  <div className="text-gold text-5xl md:text-6xl mb-6">✦</div>
                  <h3 className="font-display text-cream text-2xl md:text-3xl mb-4">
                    We got your request.
                  </h3>
                  <p className="text-text-secondary text-base max-w-md mx-auto">
                    Weston and his team will be in touch within 24 hours to confirm your
                    reservation and help you choose the right unit.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5"
                >
                  <Field name="name" label="Name" type="text" required />
                  <Field name="email" label="Email" type="email" required />
                  <Field name="phone" label="Phone" type="tel" required />
                  <div>
                    <label className="block text-text-secondary text-[11px] tracking-[0.25em] uppercase mb-2">
                      Group Size
                    </label>
                    <select
                      name="groupSize"
                      required
                      defaultValue=""
                      className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-cream focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none transition"
                    >
                      <option value="" disabled className="text-white/30">
                        Select group size…
                      </option>
                      {GROUP_SIZES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Field
                    name="matchDates"
                    label="Match Dates"
                    type="text"
                    placeholder="e.g., June 14-22 or Argentina matches"
                  />
                  <div>
                    <label className="block text-text-secondary text-[11px] tracking-[0.25em] uppercase mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      name="heardAbout"
                      defaultValue=""
                      className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-cream focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none transition"
                    >
                      <option value="" disabled className="text-white/30">
                        Select an option…
                      </option>
                      {HEARD_ABOUT_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-text-secondary text-[11px] tracking-[0.25em] uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us about your World Cup plans..."
                      className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-cream placeholder:text-white/30 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none transition resize-none"
                    />
                  </div>

                  {status === "error" && errorMsg && (
                    <div
                      role="alert"
                      className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200"
                    >
                      {errorMsg}
                    </div>
                  )}

                  <ShinyButton
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full text-base md:text-lg py-4 mt-2"
                  >
                    {status === "submitting" ? "Sending…" : "Request My Reservation"}
                  </ShinyButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </BlurFade>

        <BlurFade delay={0.35}>
          <p className="text-text-secondary text-center text-[13px] mt-6 leading-relaxed">
            Weston and his team will personally confirm your reservation within 24 hours.
            <br className="hidden sm:inline" />
            No spam. No pressure. Just premium RVs.
          </p>
          <p className="text-text-secondary text-center text-[13px] mt-3">
            Prefer to call?{" "}
            <a
              href="tel:+19729656901"
              className="inline-flex items-center gap-1.5 align-middle text-gold hover:text-gold-light transition-colors font-medium"
            >
              <Phone size={13} aria-hidden />
              (972) 965-6901
            </a>
          </p>
        </BlurFade>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type,
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-text-secondary text-[11px] tracking-[0.25em] uppercase mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full bg-charcoal border border-white/10 rounded-lg px-4 py-3 text-cream placeholder:text-white/30 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:outline-none transition"
      />
    </div>
  );
}
