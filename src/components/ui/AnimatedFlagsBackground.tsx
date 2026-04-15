"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const flagGroups = [
  { name: "Group A", countries: [{ name: "Mexico", code: "mx" }, { name: "South Korea", code: "kr" }, { name: "South Africa", code: "za" }, { name: "Czech Republic", code: "cz" }] },
  { name: "Group B", countries: [{ name: "Canada", code: "ca" }, { name: "Switzerland", code: "ch" }, { name: "Qatar", code: "qa" }, { name: "Bosnia and Herzegovina", code: "ba" }] },
  { name: "Group C", countries: [{ name: "Brazil", code: "br" }, { name: "Morocco", code: "ma" }, { name: "Scotland", code: "gb-sct" }, { name: "Haiti", code: "ht" }] },
  { name: "Group D", countries: [{ name: "United States", code: "us" }, { name: "Turkey", code: "tr" }, { name: "Australia", code: "au" }, { name: "Paraguay", code: "py" }] },
  { name: "Group E", countries: [{ name: "Germany", code: "de" }, { name: "Côte d'Ivoire", code: "ci" }, { name: "Ecuador", code: "ec" }, { name: "Curaçao", code: "cw" }] },
  { name: "Group F", countries: [{ name: "Netherlands", code: "nl" }, { name: "Japan", code: "jp" }, { name: "Sweden", code: "se" }, { name: "Tunisia", code: "tn" }] },
  { name: "Group G", countries: [{ name: "Belgium", code: "be" }, { name: "Iran", code: "ir" }, { name: "Egypt", code: "eg" }, { name: "New Zealand", code: "nz" }] },
  { name: "Group H", countries: [{ name: "Spain", code: "es" }, { name: "Uruguay", code: "uy" }, { name: "Saudi Arabia", code: "sa" }, { name: "Cape Verde", code: "cv" }] },
  { name: "Group I", countries: [{ name: "France", code: "fr" }, { name: "Senegal", code: "sn" }, { name: "Norway", code: "no" }, { name: "Iraq", code: "iq" }] },
  { name: "Group J", countries: [{ name: "Argentina", code: "ar" }, { name: "Austria", code: "at" }, { name: "Algeria", code: "dz" }, { name: "Jordan", code: "jo" }] },
  { name: "Group K", countries: [{ name: "Portugal", code: "pt" }, { name: "Colombia", code: "co" }, { name: "DR Congo", code: "cd" }, { name: "Uzbekistan", code: "uz" }] },
  { name: "Group L", countries: [{ name: "England", code: "gb-eng" }, { name: "Croatia", code: "hr" }, { name: "Panama", code: "pa" }, { name: "Ghana", code: "gh" }] },
];

type Flag = {
  name: string;
  code: string;
  position: { x: number; y: number };
  layer: number;
  index: number;
};

interface FlagItemProps {
  countryCode: string;
  countryName: string;
  position: { x: number; y: number };
  delay: number;
  layer: number;
  index: number;
}

const FlagItem = ({
  countryCode,
  countryName,
  position,
  delay,
  layer,
  index,
}: FlagItemProps) => {
  const sizes: Record<number, { width: number; height: number; blur: number; opacity: number }> = {
    0: { width: 80, height: 60, blur: 2, opacity: 0.35 },
    1: { width: 100, height: 75, blur: 0, opacity: 0.5 },
    2: { width: 120, height: 90, blur: 0, opacity: 0.7 },
  };

  const { width, height, blur, opacity } = sizes[layer];

  const floatDuration = 8 + (index % 4);
  const rotateDuration = 12 + (index % 5);
  const scaleDuration = 6 + (index % 3);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, filter: `blur(${blur + 10}px)` }}
      animate={{ opacity, scale: 1, filter: `blur(${blur}px)` }}
      exit={{ opacity: 0, scale: 0.8, filter: `blur(${blur + 10}px)` }}
      transition={{ duration: 1.5, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "absolute",
        left: `${position.x}%`,
        top: `${position.y}%`,
        zIndex: layer,
        willChange: "transform, opacity",
      }}
      className="pointer-events-none"
    >
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, index % 2 === 0 ? 10 : -10, 0] }}
        transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          animate={{ rotate: [0, index % 2 === 0 ? 3 : -3, 0] }}
          transition={{ duration: rotateDuration, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: scaleDuration, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              className="relative rounded-lg overflow-hidden shadow-2xl"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                boxShadow:
                  layer === 2
                    ? "0 20px 60px rgba(0,0,0,0.5)"
                    : "0 10px 30px rgba(0,0,0,0.4)",
              }}
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(255,255,255,0.2), transparent 70%)",
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://flagcdn.com/w320/${countryCode}.png`}
                alt={countryName}
                className="w-full h-full object-cover"
                style={{ imageRendering: "crisp-edges" }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const positions = [
  { x: 5, y: 8 },
  { x: 12, y: 15 },
  { x: 8, y: 22 },
  { x: 78, y: 10 },
  { x: 85, y: 18 },
  { x: 88, y: 5 },
  { x: 10, y: 75 },
  { x: 15, y: 82 },
  { x: 6, y: 88 },
  { x: 82, y: 78 },
  { x: 88, y: 85 },
  { x: 76, y: 88 },
  { x: 3, y: 45 },
  { x: 8, y: 52 },
  { x: 90, y: 48 },
  { x: 85, y: 55 },
];

export function AnimatedFlagsBackground() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [visibleFlags, setVisibleFlags] = useState<Flag[]>([]);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const parallaxX = useTransform(mouseX, [0, 1], [-20, 20]);
  const parallaxY = useTransform(mouseY, [0, 1], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const currentGroup = flagGroups[activeGroupIndex];
    const nextGroup = flagGroups[(activeGroupIndex + 1) % flagGroups.length];
    const selected = [...currentGroup.countries, ...nextGroup.countries.slice(0, 2)];

    const flags: Flag[] = selected.map((country, index) => ({
      ...country,
      position: positions[index % positions.length],
      layer: index % 3,
      index,
    }));

    setVisibleFlags(flags);

    const interval = setInterval(() => {
      setActiveGroupIndex((prev) => (prev + 1) % flagGroups.length);
    }, 12000);

    return () => clearInterval(interval);
  }, [activeGroupIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark gradient matching site charcoal */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0D0B09 0%, #1A1510 50%, #0D0B09 100%)",
        }}
      />

      {/* Subtle grain */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Flags with parallax */}
      <motion.div className="absolute inset-0" style={{ x: parallaxX, y: parallaxY }}>
        {visibleFlags.map((flag, idx) => (
          <FlagItem
            key={`${flag.code}-${activeGroupIndex}-${idx}`}
            countryCode={flag.code}
            countryName={flag.name}
            position={flag.position}
            delay={idx * 0.1}
            layer={flag.layer}
            index={flag.index}
          />
        ))}
      </motion.div>

      {/* Readability overlay — darker in the center to keep hero text crisp */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(13,11,9,0.55) 0%, rgba(13,11,9,0.3) 60%, rgba(13,11,9,0.7) 100%)",
        }}
      />

      {/* Warm gold tint to echo brand */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(212,168,83,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: "inset 0 0 220px rgba(0,0,0,0.7)" }}
      />
    </div>
  );
}
