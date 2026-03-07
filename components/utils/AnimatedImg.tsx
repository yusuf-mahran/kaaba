import * as motion from 'motion/react-client';
import Image from 'next/image';

export default function AnimatedImg({
  src,
  alt,
  className = '',
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
  [key: string]: unknown;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-3xl bg-surface-secondary shadow-sm group ${className}`}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 group-hover:brightness-95 group-hover:-rotate-2"
      />
    </motion.div>
  );
}
