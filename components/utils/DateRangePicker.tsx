'use client';

import { AnimatePresence, motion } from 'motion/react';
import { addDays, endOfMonth, format, startOfDay } from 'date-fns';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DayPicker, type DateRange } from 'react-day-picker';
import { BiCalendar, BiChevronDown } from 'react-icons/bi';
import { CgMoveRight } from 'react-icons/cg';
import 'react-day-picker/style.css';

export type DateRangePickerProps = {
  value: DateRange | undefined;
  onChange: (range: DateRange | undefined) => void;
  placeholder?: string;
};

type ActiveField = 'start' | 'end';

/** All presets start from tomorrow so no past / today dates are ever picked */
function getPresets(tomorrow: Date) {
  return [
    {
      label: '3 nights',
      range: { from: tomorrow, to: addDays(tomorrow, 3) },
    },
    {
      label: '10 nights',
      range: { from: tomorrow, to: addDays(tomorrow, 10) },
    },
    {
      label: '15 nights',
      range: { from: tomorrow, to: addDays(tomorrow, 15) },
    },
    {
      label: 'This month',
      range: { from: tomorrow, to: endOfMonth(tomorrow) },
    },
    {
      label: 'Next month',
      range: {
        from: addDays(tomorrow, 30),
        to: endOfMonth(addDays(tomorrow, 30)),
      },
    },
  ];
}

export default function DateRangePicker({
  value,
  onChange,
  placeholder = 'Select dates',
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false);
  const [activeField, setActiveField] = useState<ActiveField>('start');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const today = useMemo(() => startOfDay(new Date()), []);
  // Earliest selectable date is tomorrow
  const tomorrow = useMemo(() => addDays(today, 1), [today]);

  const fromLabel = value?.from ? format(value.from, 'MMM dd, yyyy') : null;
  const toLabel = value?.to ? format(value.to, 'MMM dd, yyyy') : null;

  /** Open the popover (if not already) and set which field is being edited */
  const openWithField = (field: ActiveField) => {
    setActiveField(field);
    setOpen(true);
  };

  /**
   * Custom day-selection logic.
   * – activeField === 'start': update from, keep to when still valid, switch to end.
   * – activeField === 'end':   update to, or reset if clicked before from.
   */
  const handleSelect = useCallback(
    (_range: DateRange | undefined, selectedDay: Date) => {
      if (activeField === 'start') {
        const newTo =
          value?.to && value.to > selectedDay ? value.to : undefined;
        onChange({ from: selectedDay, to: newTo });
        setActiveField('end');
      } else {
        const from = value?.from;
        if (!from || selectedDay < from) {
          // Clicked before current start → treat clicked day as new start
          onChange({ from: selectedDay, to: undefined });
          setActiveField('end');
        } else {
          onChange({ from, to: selectedDay });
          setOpen(false);
        }
      }
    },
    [activeField, value, onChange],
  );

  // Close on outside click
  useEffect(() => {
    const handler = (e: PointerEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* ── Trigger button ─────────────────────────────── */}
      <button
        type="button"
        onClick={() => {
          if (!open) {
            // Re-open: land on whichever field makes sense
            setActiveField(value?.from && !value?.to ? 'end' : 'start');
            setOpen(true);
          } else {
            setOpen(false);
          }
        }}
        className={`flex w-full items-center gap-2 rounded-xl border px-3.5 py-2.5 text-left text-xs transition ${
          open
            ? 'border-primary ring-2 ring-primary/20'
            : 'border-border hover:border-border-focus'
        }`}
      >
        <BiCalendar
          className={`shrink-0 text-base ${
            fromLabel ? 'text-primary' : 'text-text-tertiary'
          }`}
        />
        {fromLabel ? (
          <span className="flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden">
            <span className="truncate font-medium text-text-primary">
              {fromLabel}
            </span>
            {toLabel ? (
              <>
                <span className="shrink-0 text-xs text-text-tertiary">→</span>
                <span className="truncate font-medium text-text-primary">
                  {toLabel}
                </span>
              </>
            ) : (
              <CgMoveRight className="shrink-0 text-xs text-text-tertiary" />
            )}
          </span>
        ) : (
          <span className="flex-1 text-text-tertiary">{placeholder}</span>
        )}
      </button>

      <BiChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-base text-text-tertiary" />

      {/* ── Popover ────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="popover"
            initial={{ opacity: 0, scaleY: 0, y: -10 }}
            animate={{ opacity: 1, scaleY: 1, y: 0 }}
            exit={{ opacity: 0, scaleY: 0, y: 4 }}
            transition={{ duration: 0.18, ease: 'easeOut' as const }}
            className="absolute left-0 top-[calc(100%+8px)] z-50 w-60 max-w-full overflow-hidden rounded-2xl border border-border-light bg-surface shadow-2xl shadow-neutral-300/40 transform origin-top"
          >
            {/* ── Start / End day interactive fields ── */}
            <div className="p-3 pb-0">
              <div className="rounded-xl border border-border-light bg-surface-secondary/60 p-3 shadow-sm">
                <div className="w-full flex flex-col items-stretch justify-center gap-2">
                  {/* Start day */}
                  <div className="flex flex-1 flex-col gap-1.5">
                    <span className="text-[11.5px] text-text-secondary">
                      Start day
                    </span>
                    <button
                      type="button"
                      onClick={() => openWithField('start')}
                      className={`flex w-full items-center gap-1.5 rounded-lg border bg-surface px-3 py-1.5 text-left transition ${
                        activeField === 'start'
                          ? 'border-primary ring-1 ring-primary'
                          : 'border-border hover:border-border-focus'
                      }`}
                    >
                      <BiCalendar
                        className={`shrink-0 text-xs ${
                          activeField === 'start'
                            ? 'text-primary'
                            : 'text-text-secondary'
                        }`}
                      />
                      <span
                        className={`text-xs font-medium ${
                          fromLabel ? 'text-text-primary' : 'text-text-tertiary'
                        }`}
                      >
                        {fromLabel ?? '—'}
                      </span>
                    </button>
                  </div>

                  {/* End day */}
                  <div className="flex flex-1 flex-col gap-1.5">
                    <span className="text-[11.5px] text-text-secondary">
                      End day
                    </span>
                    <button
                      type="button"
                      onClick={() => openWithField('end')}
                      className={`flex w-full items-center gap-1.5 rounded-lg border bg-surface px-3 py-1.5 text-left transition ${
                        activeField === 'end'
                          ? 'border-primary ring-1 ring-primary'
                          : 'border-border hover:border-border-focus'
                      }`}
                    >
                      <BiCalendar
                        className={`shrink-0 text-xs ${
                          activeField === 'end'
                            ? 'text-primary'
                            : 'text-text-secondary'
                        }`}
                      />
                      <span
                        className={`text-xs font-medium ${
                          toLabel ? 'text-text-primary' : 'text-text-tertiary'
                        }`}
                      >
                        {toLabel ?? '—'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* ── Preset chips ── */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {getPresets(tomorrow).map(({ label, range }) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => {
                        onChange(range);
                        setOpen(false);
                      }}
                      className="rounded-md bg-neutral-100/80 px-2 py-1 text-[11.5px] font-medium text-text-secondary transition hover:bg-neutral-200"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Calendar ── */}
            <div className="p-3 pt-2">
              <DayPicker
                captionLayout="label"
                mode="range"
                navLayout="around"
                animate
                showOutsideDays
                selected={value}
                onSelect={handleSelect}
                defaultMonth={new Date()}
                startMonth={new Date(2020, 0, 1)}
                endMonth={new Date(2050, 11, 1)}
                weekStartsOn={1}
                disabled={{ before: tomorrow }}
                modifiersClassNames={{
                  selected: 'drp-range-stripe',
                  today: 'drp-today',
                  month: 'drp-month',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
