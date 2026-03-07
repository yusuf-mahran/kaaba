'use client';

import { motion, type Variants } from 'motion/react';
import Avatar, { genConfig } from 'react-nice-avatar';
import { Button } from './utils/Button';
import AnimatedImg from './utils/AnimatedImg';

const avatarConfigs = [
  genConfig('user4'),
  genConfig('user3'),
  genConfig('user2'),
  genConfig('user1'),
];

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

export default function HeroSection() {
  return (
    <section className="relative pt-10 pb-2">
      <div className="grid min-h-130 items-start gap-8 lg:grid-cols-[380px_1fr]">
        {/* ── Left: text ───────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex h-full flex-col justify-between py-4"
        >
          <div className="flex flex-col gap-5">
            {/* Trustpilot badge */}
            <motion.div
              variants={fadeUp}
              className="flex w-fit items-center gap-3 rounded-full border border-border-light bg-surface px-3 py-2 shadow-sm"
            >
              <div className="flex -space-x-1.5">
                {avatarConfigs.map((config, i) => (
                  <Avatar
                    key={i}
                    className={`w-6 h-6 ring-2 ring-surface`}
                    style={{
                      zIndex: i * 10,
                    }}
                    {...config}
                  />
                ))}
              </div>
              <div>
                <p className="text-[10px] font-bold text-primary">
                  ★ Trustpilot
                </p>
                <p className="text-[10px] text-text-secondary">
                  Trusted by 40+ clients
                </p>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-[42px] font-light leading-[1.08] text-text-primary lg:text-[52px]"
            >
              Discover the <strong className="font-black">Majesty of</strong>
              <br />
              <strong className="font-black">Hajj &amp; Umrah</strong>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="max-w-66.25 text-sm leading-6 text-text-secondary"
            >
              Book your Hajj or Umrah pilgrimage with trusted services &amp;
              package.
            </motion.p>

            {/* CTA */}
            <Button
              href="#select-journey"
              variants={fadeUp}
              className="w-max px-6 py-3"
            >
              Book Your Journey
            </Button>
          </div>

          {/* Address */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-start gap-2.5"
          >
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-[9px] text-neutral-600">
              ◎
            </div>
            <p className="text-xs leading-5 text-text-secondary">
              123 Organic Street,{' '}
              <strong className="font-semibold text-text-primary">
                Green Tower,
              </strong>
              <br />
              Mecca, Saudi Arabia
            </p>
          </motion.div>
        </motion.div>

        {/* ── Right: image + floats ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.15 }}
          className="relative"
        >
          <AnimatedImg
            src="/pilgrimage-to-kaaba-in-mecca.jpg"
            alt="The city of Mecca with its Kaaba lit up at night"
            className="h-125"
          />
        </motion.div>
      </div>
    </section>
  );
}
