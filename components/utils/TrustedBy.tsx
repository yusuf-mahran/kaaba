import { partnerLogos } from '../../data/partners';

export default function TrustedBy() {
  return (
    <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row overflow-hidden">
      <p className="shrink-0 text-xs text-text-secondary z-10 bg-background sm:pr-4">
        Trusted by{' '}
        <strong className="font-semibold text-text-primary">
          Pilgrims Worldwide
        </strong>
      </p>

      {/* Infinite slider container */}
      <div className="logo-container relative flex w-full overflow-hidden">
        <style>
          {`.logo-container {mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);}`}
        </style>
        <div className="flex w-max animate-infinite-scroll items-center gap-8">
          {[...partnerLogos, ...partnerLogos, ...partnerLogos].map(
            (logo, idx) => (
              <span
                key={`${logo.name}-${idx}`}
                className={`flex shrink-0 cursor-default items-center gap-1 text-xs transition-colors hover:text-neutral-600 ${
                  logo.bold ? 'font-bold text-neutral-600' : 'text-neutral-400'
                }`}
              >
                <span className="text-[9px]">{logo.prefix}</span>
                {logo.name}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
