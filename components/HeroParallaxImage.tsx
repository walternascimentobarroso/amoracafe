"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

export function HeroParallaxImage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -90]);
  const scale = useTransform(scrollY, [0, 600], [1, 1.06]);
  const rotate = useTransform(scrollY, [0, 600], [0, -6]);

  return (
    <motion.div
      style={{ y, scale, rotate }}
      className="pointer-events-none hidden shrink-0 select-none lg:flex lg:items-center lg:justify-center"
      aria-hidden="true"
    >
      <div className="relative">
        {/* Warm amber glow behind the tart */}
        <div className="absolute inset-0 scale-110 rounded-full bg-amber-500/30 blur-3xl" />
        {/* Pastel de nata — radial mask to fade into the dark hero */}
        <Image
          src="/images/pastel_nata.png"
          alt="Pastel de nata"
          width={400}
          height={400}
          className="relative h-[340px] w-[340px] object-contain shadow-2xl shadow-black/60 xl:h-[400px] xl:w-[400px]"
          priority
          style={{
            maskImage:
              "radial-gradient(ellipse 85% 85% at 50% 50%, black 45%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 85% at 50% 50%, black 45%, transparent 100%)"
          }}
        />
      </div>
    </motion.div>
  );
}
