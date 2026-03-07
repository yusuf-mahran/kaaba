'use client';

import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { Button } from './utils/Button';
import Logo from './utils/Logo';
import { useState, useRef } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#about' },
  { label: 'Package', href: '#packages' },
  { label: 'Journey', href: '#journey' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      onClick={(event) => {
        if (
          isMobileMenuOpen &&
          buttonRef.current &&
          !buttonRef.current.contains(event?.target as Node)
        ) {
          setIsMobileMenuOpen(false);
        }
      }}
      className="sticky top-0 z-3000 border-b border-border-light bg-surface/90"
    >
      <div className="mx-auto flex w-full max-w-300 items-center justify-between px-5 py-3.5 lg:px-8 backdrop-blur-sm">
        {/* Logo */}
        <Logo />

        {/* Nav */}
        <nav className="hidden items-center gap-7 text-sm sm:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex font-semibold items-center gap-1 transition-colors hover:font-bold hover:text-text-primary text-text-secondary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          ref={buttonRef}
          type="button"
          className="sm:hidden cursor-pointer rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          onClick={toggleMobileMenu}
        >
          <>
            <BiMenuAltRight size={28} className="text-text-primary" />
          </>
          <span className="hidden">menu</span>
        </button>

        {/* CTA */}
        <Button
          href="#packages"
          variant="primaryWithAccent"
          className="max-sm:hidden"
        >
          Book Now
        </Button>
      </div>

      {/* make the menu animated while open and close using variances*/}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%', scaleX: 0 }}
            animate={{ opacity: 1, x: '0%', scaleX: 1 }}
            exit={{ opacity: 0, x: '-100%', scaleX: 0 }}
            transition={{ duration: 0.3 }}
            className={`sm:hidden z-2000 absolute left-0 top-full w-full h-[calc(100vh-64px)] bg-surface/90 backdrop-blur-sm flex flex-col items-center justify-center gap-12 text-text-primary transition-colors overflow-y-auto overflow-x-hidden`}
          >
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex font-semibold items-center gap-1 transition-colors hover:font-bold text-text-primary text-4xl bg-transparent py-2 px-4 rounded-lg"
              >
                {item.label}
              </Link>
            ))}
            {/* CTA */}
            <Button
              href="#packages"
              variant="primaryWithAccent"
              className="hidden lg:inline-flex scale-135 mt-10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Now
            </Button>
            <div className="-z-10 h-2/3 aspect-square bg-linear-to-b from-primary to-secondary absolute top-1/2 left-0 -translate-y-1/2 -translate-x-5/6 rounded-full"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
