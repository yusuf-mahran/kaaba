import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="#" className="flex items-center gap-0">
      <Image
        src="/logo.avif"
        alt="Burak Logo"
        width={96}
        height={96}
        className="rounded-full w-12 h-12"
      />
      <span className="text-md font-extrabold text-text-primary">Kaaba</span>
    </Link>
  );
}
