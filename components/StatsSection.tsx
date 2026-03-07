'use client';

import { motion, type Variants } from 'motion/react';
import { BiUserCheck, BiStar, BiTime, BiSupport } from 'react-icons/bi';

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

const stats = [
  {
    label: 'Successful Pilgrims Served',
    value: '25k+',
    icon: BiUserCheck,
  },
  {
    label: 'Pilgrim Satisfaction Rate',
    value: '98%',
    icon: BiStar,
  },
  {
    label: 'Experience in Hajj Services',
    value: '15+ Years',
    icon: BiTime,
  },
  {
    label: 'On-Ground Support',
    value: '24/7',
    icon: BiSupport,
  },
];

export default function StatsSection() {
  return (
    <motion.section
      id="stats"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mt-20"
    >
      {/* Section heading */}
      <motion.div variants={fadeUp} className="mb-8 text-center">
        <h2 className="text-3xl font-light leading-snug text-text-primary lg:text-4xl">
          Trusted by{' '}
          <strong className="font-black">
            Thousands
            <br />
            of Pilgrims
          </strong>
        </h2>
      </motion.div>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 perspective-[1000px]">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              whileHover={{
                rotateX: 10,
                rotateY: -10,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                backgroundColor: 'var(--color-accent)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative flex aspect-square flex-col justify-between rounded-[20px] p-6 text-left bg-surface text-text-primary"
            >
              <div className="flex w-full justify-end">
                <div className="rounded-xl p-3 bg-accent/50 text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <p className="text-4xl font-black text-text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-text-secondary">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
