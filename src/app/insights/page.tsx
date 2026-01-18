import type { Metadata } from 'next';
import { InsightsContent } from '@/components/insights/insights-content';

export const metadata: Metadata = {
  title: 'Tech Insights & Engineering Blog | Bridge Byte Tech',
  description: 'Read the latest articles on Software Architecture, AI, SaaS trends, and Coding best practices from Bridge Byte Tech engineering team.',
  keywords: ['Tech Blog', 'Software Engineering Blog', 'SaaS Trends', 'Coding Tutorials', 'Bridge Byte Insights'],
};

export default function InsightsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Bridge Byte Tech Insights',
    description: 'Engineering and Technology Blog',
    publisher: {
      '@type': 'Organization',
      name: 'Bridge Byte Tech',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bridgebytetech.com/images/logos/logo.png'
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <InsightsContent />
    </>
  );
}