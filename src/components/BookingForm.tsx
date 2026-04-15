"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BlurFade } from "./ui/BlurFade";
import { ShinyButton } from "./ui/ShinyButton";

const GROUP_SIZES = ["1-2", "3-4", "5-6", "7-10", "10+"];

type Status = "idle" | "submitting" | "success";

export default function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("submitting");
    // TODO: Connect to Resend API
    console.log("[BookingForm submit]", data);
    setTimeout(() => setStatus("success"), 500);
  }

  return (
    <section id="booking" className="bg-charcoal-warm w-full py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <BlurFade>
          <h2 className="font-display text-cream text-4xl md:text-5xl text-center leading-tight mb-5">
            Limited Fleet. 3.8 Million Fans. Don&apos;t Wait.
          </h2>
        </BlurFade>
        <BlurFade delay={0.15}>
          <p className="text-text-secondary text-center text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            20 premium RVs for the biggest sporting event in US history.
            Fill out the form and Westin will personally confirm your reservation within 24 hours.
          </p>
        </BlurFade>

        <BlurFade delay={0.25}>
          <div className="bg-charcoal/80 border border-gold/15 rounded-2xl p-8 md:p-10 backdrop-blur-sm animate-pulse-gold">
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
