import type { Metadata } from 'next';
import { ContactContent } from '@/components/contact/contact-content';

export const metadata: Metadata = {
  title: 'Contact Us | Bridge Byte Tech',
  description: 'Get in touch with Bridge Byte Tech. Let\'s discuss your next project and build something amazing together.',
  keywords: ['Contact Bridge Byte Tech', 'Software Company Contact', 'Hire Developers', 'Project Inquiry'],
};

export default function ContactPage() {
  // JSON-LD for Local Business
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Bridge Byte Tech',
    image: 'https://bridgebytetech.com/images/logos/logo.png',
    url: 'https://bridgebytetech.com',
    telephone: '+33749797394',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sylhet',
      addressCountry: 'Bangladesh'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.8949',
      longitude: '91.8687'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '18:00'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  );
}