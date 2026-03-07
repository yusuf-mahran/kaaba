import type { Metadata } from 'next';
import { Montserrat_Alternates } from 'next/font/google';
import './globals.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const islandMoments = Montserrat_Alternates({
  variable: '--font-island-moments',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Kaaba | Premium Hajj & Umrah',
  description:
    'Premium Hajj & Umrah journeys with curated packages, trusted guidance, and seamless planning.',
  metadataBase: new URL('https://kaaba.example'),
  openGraph: {
    title: 'Kaaba | Premium Hajj & Umrah',
    description:
      'Premium Hajj & Umrah journeys with curated packages, trusted guidance, and seamless planning.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${islandMoments.className} antialiased bg-slate-50 text-slate-900`}
      >
        <div className="min-h-screen bg-background text-text-primary">
          <Navbar />
          <main className="mx-auto w-full max-w-300 px-5 pb-28 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
