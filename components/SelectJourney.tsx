'use client';

import dynamic from 'next/dynamic';
import { differenceInCalendarDays } from 'date-fns';
import { useCallback, useMemo, useState } from 'react';
import type { DateRange } from 'react-day-picker';
import { AnimatePresence, motion } from 'motion/react';
import {
  BiCalendar,
  BiChevronDown,
  BiDollar,
  BiPackage,
  BiUser,
} from 'react-icons/bi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { discounts, numberOfPeople, packages } from '../data/packages';
import TrustedBy from './utils/TrustedBy';
import { Button } from './utils/Button';

const DateRangePicker = dynamic(() => import('./utils/DateRangePicker'), {
  ssr: false,
  loading: () => (
    <div className="h-11 animate-pulse rounded-xl border border-neutral-200 bg-neutral-100" />
  ),
});

// ── Reusable styled select ─────────────────────────────────────────────────
function StyledSelect({
  ariaLabel,
  value,
  options,
  onChange,
}: {
  ariaLabel: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <select
        aria-label={ariaLabel}
        className="h-10.5 w-full appearance-none rounded-xl border border-border bg-surface py-0 pl-3.5 pr-9 text-sm font-medium text-text-primary transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <BiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-base text-text-tertiary" />
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────
export default function SelectJourney() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [people, setPeople] = useState(numberOfPeople[0]);
  const [packageType, setPackageType] = useState(packages[0].name);

  const nights = useMemo(() => {
    if (!dateRange?.from || !dateRange?.to) return null;
    return Math.max(0, differenceInCalendarDays(dateRange.to, dateRange.from));
  }, [dateRange]);

  const handleRangeChange = useCallback((range: DateRange | undefined) => {
    setDateRange(range);
  }, []);

  const handleReserve = () => {
    toast.success('Reservation done successfully!');
  };

  const parsedPeople = parseInt(people);
  const selectedPackage = packages.find((p) => p.name === packageType);
  const pricePerNight = selectedPackage?.pricePerNightPerPerson || 0;

  let estPrice = 0;
  let originalPrice = 0;
  let isDiscountApplied = false;

  if (nights !== null && nights > 0 && selectedPackage) {
    originalPrice = pricePerNight * nights * parsedPeople;
    estPrice = originalPrice;

    // Apply highest applicable discount
    const applicableDiscounts = discounts.filter(
      (d) => parsedPeople >= d.minPersons && nights >= d.minNights,
    );

    if (applicableDiscounts.length > 0) {
      const maxDiscount = Math.max(
        ...applicableDiscounts.map((d) => d.discountPercentage),
      );
      estPrice = originalPrice * (1 - maxDiscount / 100);
      isDiscountApplied = true;
    }
  }

  return (
    <motion.section
      id="select-journey"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, ease: 'easeOut' as const }}
      className="mt-3"
    >
      <ToastContainer position="bottom-right" />
      {/* ── Search card ── */}
      <div className="rounded-3xl bg-surface shadow-sm ring-1 ring-border-light">
        {/* Card header */}
        <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-4">
          <p className="text-base font-medium text-text-primary">
            Select <strong className="font-black">Your Journey</strong>
          </p>

          {/* Animated nights badge */}
          <AnimatePresence mode="wait">
            <motion.span
              key={nights ?? 'empty'}
              initial={{ opacity: 0, y: -4, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.9 }}
              transition={{ duration: 0.18 }}
              className="inline-flex h-7 items-center gap-1.5 rounded-full bg-neutral-100 px-3 text-xs font-semibold text-neutral-600"
            >
              <span className="text-sm leading-none">🌙</span>
              {nights !== null
                ? `${nights} night${nights === 1 ? '' : 's'}`
                : 'Pick travel dates'}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* ── Desktop: horizontal bar with dividers ── */}
        <div className="hidden lg:flex lg:items-stretch lg:divide-x lg:divide-neutral-100">
          {/* Flight Date — wider */}
          <div className="flex min-w-0 flex-[1.5] flex-col gap-1.5 px-5 py-4">
            <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-text-tertiary">
              <BiCalendar className="shrink-0 text-sm" />
              Flight Date
            </label>
            <DateRangePicker value={dateRange} onChange={handleRangeChange} />
          </div>

          {/* Number of People */}
          <div className="flex w-52 shrink-0 flex-col gap-1.5 px-5 py-4">
            <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-text-tertiary">
              <BiUser className="shrink-0 text-sm" />
              Number of People
            </label>
            <StyledSelect
              ariaLabel="Number of People"
              value={people}
              options={numberOfPeople}
              onChange={setPeople}
            />
          </div>

          {/* Package */}
          <div className="flex w-52 shrink-0 flex-col gap-1.5 px-5 py-4">
            <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-text-tertiary">
              <BiPackage className="shrink-0 text-sm" />
              Package
            </label>
            <StyledSelect
              ariaLabel="Package"
              value={packageType}
              options={packages.map((p) => p.name)}
              onChange={setPackageType}
            />
          </div>

          {/* Est. Price */}
          <div className="flex w-40 shrink-0 flex-col gap-1.5 px-5 py-4">
            <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-text-tertiary">
              <BiDollar className="shrink-0 text-sm" />
              Est. Price
            </label>
            <div className="flex h-11 flex-col justify-center rounded-xl border border-neutral-100 bg-neutral-50 px-3.5">
              {nights ? (
                <>
                  <span className="text-sm font-bold leading-tight text-text-primary flex items-center gap-2">
                    ${estPrice.toLocaleString()}
                    {isDiscountApplied && (
                      <span className="text-[10px] font-normal text-text-tertiary line-through">
                        ${originalPrice.toLocaleString()}
                      </span>
                    )}
                  </span>
                  <span className="text-[10px] leading-tight text-text-tertiary">
                    / total
                  </span>
                </>
              ) : (
                <span className="text-sm font-medium leading-tight text-text-tertiary">
                  Pick dates
                </span>
              )}
            </div>
          </div>

          {/* Search */}
          <div className="flex shrink-0 items-center px-5 py-4">
            <Button
              onClick={handleReserve}
              href="#"
              className="group inline-flex h-11 items-center gap-2 rounded-xl bg-neutral-900 px-5 text-sm font-semibold text-text-inverse transition-all hover:bg-neutral-800 active:scale-95"
            >
              Reserve
            </Button>
          </div>
        </div>

        {/* ── Mobile: stacked ── */}
        <div className="flex flex-col gap-4 p-5 lg:hidden">
          <div className="flex flex-col gap-1.5">
            <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-text-tertiary">
              <BiCalendar className="shrink-0 text-sm" />
              Flight Date
            </label>
            <DateRangePicker value={dateRange} onChange={handleRangeChange} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-text-tertiary">
                <BiUser className="shrink-0 text-sm" />
                Number of People
              </label>
              <StyledSelect
                ariaLabel="Number of People"
                value={people}
                options={numberOfPeople}
                onChange={setPeople}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-text-tertiary">
                <BiPackage className="shrink-0 text-sm" />
                Package
              </label>
              <StyledSelect
                ariaLabel="Package"
                value={packageType}
                options={packages.map((p) => p.name)}
                onChange={setPackageType}
              />
            </div>
          </div>

          <div className="flex justify-between items-center bg-neutral-50 px-3.5 py-2.5 rounded-xl border border-neutral-100">
            <label className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-text-tertiary">
              <BiDollar className="shrink-0 text-sm" />
              Est. Price
            </label>
            {nights ? (
              <div className="text-right">
                <span className="text-sm font-bold text-text-primary flex items-center gap-2">
                  ${estPrice.toLocaleString()}
                  {isDiscountApplied && (
                    <span className="text-[10px] font-normal text-text-tertiary line-through">
                      ${originalPrice.toLocaleString()}
                    </span>
                  )}
                </span>
                <span className="text-[10px] text-text-tertiary">/ total</span>
              </div>
            ) : (
              <span className="text-sm font-medium text-text-tertiary">
                Pick dates
              </span>
            )}
          </div>

          <Button
            onClick={handleReserve}
            href="#"
            className="group flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 text-sm font-semibold text-text-inverse transition-all active:scale-95"
          >
            Reserve
          </Button>
        </div>
      </div>

      {/* ── Partner logos strip ── */}
      <TrustedBy />
    </motion.section>
  );
}
