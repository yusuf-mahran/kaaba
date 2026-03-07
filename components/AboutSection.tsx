'use client';

import { motion, type Variants } from 'motion/react';
import { Button } from './utils/Button';
import AnimatedImg from './utils/AnimatedImg';

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-20 flex flex-col gap-20"
    >
      {/* Top Row: 2 columns */}
      <div className="grid gap-10 md:grid-cols-[3fr_1fr] md:items-center">
        {/* Left: text */}
        <div className="flex w-full flex-col gap-6">
          <motion.span
            variants={fadeUp}
            className="inline-flex w-fit rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground"
          >
            About Burak
          </motion.span>

          <motion.p
            variants={fadeUp}
            className="text-2xl font-light leading-snug text-text-primary sm:text-3xl md:text-[36px]"
          >
            Performing <strong className="font-black">Hajj or Umrah</strong> is
            one of the <strong className="font-black">Most important</strong>{' '}
            journeys of <strong className="font-black">a Lifetime.</strong> Make
            that journey smooth.
          </motion.p>
        </div>

        {/* Right: image placeholder */}
        <AnimatedImg
          src="/hajj.avif"
          alt="About Kaaba"
          className="relative mx-auto aspect-2/3 h-85 max-w-full overflow-hidden rounded-full bg-surface-secondary"
        />
      </div>

      {/* Bottom Row: 3 columns */}
      <div className="grid gap-10 md:grid-cols-3 md:items-stretch">
        {/* Box 1: Text Top & Stat End */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col justify-between gap-8 rounded-3xl"
        >
          <p className="text-sm leading-relaxed text-text-secondary">
            With over a decade of dedication to service, our highly experienced
            team coordinates all the logistics so that you can entirely focus on
            your spiritual journey without worrying about accommodations or
            transport.
          </p>
          <div>
            <span className="block text-4xl font-black text-text-primary">
              15k+
            </span>
            <span className="mt-2 block text-sm text-text-secondary">
              Happy pilgrims guided successfully
            </span>
          </div>
        </motion.div>

        {/* Box 2: Image */}
        <AnimatedImg
          src="/kaaba-about.jpg"
          alt="Pilgrimage journey"
          className="relative h-64 w-full overflow-hidden rounded-3xl bg-surface-secondary md:h-auto"
        />

        {/* Box 3: Card with CTA Button */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col justify-center rounded-3xl bg-surface-secondary p-8"
        >
          <h3 className="mb-4 text-xl font-bold text-text-primary">
            Ready to Embark?
          </h3>
          <p className="mb-8 text-sm leading-relaxed text-text-secondary">
            Browse our diverse range of carefully curated Umrah and Hajj
            packages designed for every budget and preference. Let us help you
            plan the journey of a lifetime.
          </p>
          <Button href="#packages" className="w-fit" variants={fadeUp}>
            View Packages
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
