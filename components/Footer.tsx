import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import Logo from './utils/Logo';

const links = [
  {
    title: 'Journeys',
    items: [
      { name: 'Premium Hajj', href: '#' },
      { name: 'Custom Umrah', href: '#' },
      { name: 'Group Packages', href: '#' },
    ],
  },
  {
    title: 'Company',
    items: [
      { name: 'About Us', href: '#' },
      { name: 'Our Guides', href: '#' },
      { name: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Support', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-light bg-surface py-6 lg:py-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="flex max-w-sm flex-col gap-4">
          <Logo />
          <p className="text-sm leading-relaxed text-text-secondary">
            Premium Hajj &amp; Umrah journeys crafted for clarity, comfort, and
            devotion. Experience spiritual fulfillment without the logistical
            stress.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
          {links.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
                {section.title}
              </h4>
              {section.items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-7xl flex-col items-center justify-between gap-4 border-t border-border-light px-5 pt-8 sm:flex-row lg:px-8">
        <p className="text-xs text-text-tertiary">
          &copy; {new Date().getFullYear()} Kaaba Journeys. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="#"
            className="text-text-tertiary transition-colors hover:text-primary"
          >
            <span className="sr-only">Twitter</span>
            <BsTwitter className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#"
            className="text-text-tertiary transition-colors hover:text-primary"
          >
            <span className="sr-only">Instagram</span>
            <BsInstagram className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#"
            className="text-text-tertiary transition-colors hover:text-primary"
          >
            <span className="sr-only">Facebook</span>
            <BsFacebook className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
