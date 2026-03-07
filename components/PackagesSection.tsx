'use client';

import { motion, AnimatePresence, type Variants } from 'motion/react';
import { useState } from 'react';
import { packages as packagesData } from '../data/packages';
import { Button } from './utils/Button';

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

type Tab = 'hajj' | 'umrah';

export default function PackagesSection() {
  const [activeTab, setActiveTab] = useState<Tab>('hajj');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleBook = (pkgName: string) => {
    setToastMessage(`Successfully selected ${pkgName}!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <motion.section
      id="packages"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-20"
    >
      {/* Header row */}
      <motion.div
        variants={fadeUp}
        className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
      >
        <h2 className="max-w-sm text-2xl font-light leading-snug text-text-primary sm:text-3xl lg:text-4xl">
          Tailored Pilgrimage{' '}
          <strong className="font-black">
            Packages for
            <br />
            Every Need
          </strong>{' '}
          and Budget.
        </h2>

        {/* Tabs */}
        <div className="flex items-center gap-1 self-start rounded-full border border-border bg-surface p-1 sm:self-auto">
          {(['hajj', 'umrah'] as const).map((tab) => (
            <button
              type="button"
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold capitalize transition ${
                activeTab === tab
                  ? 'bg-neutral-900 text-text-inverse'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab === 'hajj' ? 'Hajj Package' : 'Umrah Package'}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Cards */}
      <div className="grid gap-5 lg:grid-cols-3">
        {packagesData.map((pkg, index) => {
          const featured = index === 1;
          return (
            <motion.article
              key={pkg.name}
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
                borderColor: 'var(--accent)',
              }}
              className={`rounded-3xl p-6 border-2 border-transparent ${
                featured
                  ? 'bg-neutral-900 text-text-inverse'
                  : 'bg-surface text-text-primary'
              }`}
            >
              {/* Package label */}
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
                  featured ? 'text-text-tertiary' : 'text-text-tertiary'
                }`}
              >
                {pkg.name}
              </p>

              {/* Price */}
              <p
                className={`mt-4 text-4xl font-black ${
                  featured ? 'text-text-inverse' : 'text-text-primary'
                }`}
              >
                ${pkg.pricePerNightPerPerson}
                <span
                  className={`ml-1 text-sm font-normal ${
                    featured ? 'text-neutral-500' : 'text-text-tertiary'
                  }`}
                >
                  /night
                </span>
              </p>

              {/* Description */}
              <p
                className={`mt-2 text-xs leading-5 ${
                  featured ? 'text-text-tertiary' : 'text-text-secondary'
                }`}
              >
                Estimated full price: {pkg.price}
              </p>

              {/* CTA */}
              <Button
                href="#"
                onClick={() => handleBook(pkg.name)}
                variants={fadeUp}
                className={`mt-5 inline-flex w-full justify-center items-center gap-2 rounded-full px-4 py-2 font-semibold transition ${
                  featured
                    ? 'bg-surface text-text-primary hover:bg-surface-secondary'
                    : 'border border-border bg-surface text-text-primary hover:text-text-inverse hover:border-border-focus'
                }`}
              >
                Book Package
              </Button>

              {/* Feature list */}
              <div
                className={`mt-6 border-t pt-5 ${
                  featured ? 'border-neutral-700' : 'border-neutral-100'
                }`}
              >
                <p
                  className={`mb-3 text-[10px] font-semibold uppercase tracking-widest ${
                    featured ? 'text-neutral-500' : 'text-text-tertiary'
                  }`}
                >
                  Includes:
                </p>
                <ul className="flex flex-col gap-2.5">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-xs ${
                        featured ? 'text-neutral-300' : 'text-text-secondary'
                      }`}
                    >
                      <span
                        className={`mt-0.5 text-[9px] ${
                          featured ? 'text-neutral-500' : 'text-neutral-300'
                        }`}
                      >
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </div>

      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 rounded-2xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-2xl"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
