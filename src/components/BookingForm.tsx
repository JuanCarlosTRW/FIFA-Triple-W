"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BlurFade } from "./ui/BlurFade";
import { ShinyButton } from "./ui/ShinyButton";

const GROUP_SIZES = ["1-2", "3-4", "5-6", "7-10", "10+"];

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
          <h2 className="font-display text-cream text-4xl md:text-5xl text-center leading-tight mb-5">
            20 RVs. 3.8 Million Visitors. You Do the Math.
          </h2>
        </BlurFade>
        <BlurFade delay={0.15}>
          <p className="text-text-secondary text-center text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Fill out the form below. Westin will personally reach out within 24 hours
            to lock in your unit and dates.
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
                    Westin will be in touch within 24 hours to confirm your reservation
                    and help you choose the right unit.
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
                    {status === "submitting" ? "Sending…" : "Reserve My World Cup RV"}
                  </ShinyButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </BlurFade>

        <BlurFade delay={0.35}>
          <p className="text-text-secondary text-center text-[13px] mt-6 leading-relaxed">
            Westin from Triple W will personally confirm your reservation within 24 hours.
            <br className="hidden sm:inline" />
            No spam. No pressure. Just premium RVs.
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
