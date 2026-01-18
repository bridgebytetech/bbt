import type { Metadata, Viewport } from 'next';
import { Orbitron, Inter } from 'next/font/google';
import { MainLayout } from '@/components/layout';
import './globals.css';

// Fonts
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Viewport
export const viewport: Viewport = {
  themeColor: '#030712',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// Advanced Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://bridgebytetech.com'),
  title: {
    default: 'Bridge Byte Tech | Top Software Company in Sylhet & France',
    template: '%s | Bridge Byte Tech',
  },
  description: 'Bridge Byte Tech provides Enterprise Software, SaaS, Mobile Apps, and AI Solutions. Trusted by businesses in Bangladesh & Europe. Best IT Company in Sylhet.',
  applicationName: 'Bridge Byte Tech Website',
  keywords: [
    'Software Company Sylhet',
    'Best IT Company Bangladesh',
    'Mobile App Development France',
    'SaaS Development Agency',
    'Custom Software Development',
    'Bridge Byte Tech',
    'AI Solutions Provider',
    'Web Development Sylhet',
    'Flutter App Developer',
    'Spring Boot Experts'
  ],
  authors: [{ name: 'Bridge Byte Tech Team', url: 'https://bridgebytetech.com' }],
  creator: 'Bridge Byte Tech',
  publisher: 'Bridge Byte Tech',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'fr-FR': '/fr-FR',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bridgebytetech.com',
    siteName: 'Bridge Byte Tech',
    title: 'Bridge Byte Tech | Transforming Ideas into Digital Reality',
    description: 'We build scalable SaaS, Mobile Apps, and Enterprise Software. Your trusted technology partner in Sylhet & Paris.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bridge Byte Tech - Leading Software Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bridge Byte Tech | Top Software Company',
    description: 'Expert Software Development: SaaS, Mobile Apps, AI & Cloud Solutions.',
    images: ['/images/twitter-image.png'],
    creator: '@bridgebytetech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'google-site-verification-code', // গুগল সার্চ কনসোল কোড এখানে বসাবে
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // JSON-LD Schema for Organization
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bridge Byte Tech',
    url: 'https://bridgebytetech.com',
    logo: 'https://bridgebytetech.com/images/logos/logo.png',
    sameAs: [
      'https://facebook.com/bridgebytetech',
      'https://twitter.com/bridgebytetech',
      'https://linkedin.com/company/bridgebytetech',
      'https://github.com/bridgebytetech'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+33-7-49-79-73-94',
        contactType: 'customer service',
        areaServed: ['FR', 'BD'],
        availableLanguage: ['English', 'Bengali', 'French']
      }
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Paris',
        addressCountry: 'France'
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'Sylhet',
        addressCountry: 'Bangladesh'
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${orbitron.variable} ${inter.variable} font-sans antialiased bg-gray-950 text-gray-100`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}