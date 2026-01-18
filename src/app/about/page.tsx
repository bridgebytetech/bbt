import type { Metadata } from 'next';
import { AboutContent } from '@/components/about/about-content';

export const metadata: Metadata = {
  title: 'About Us | Bridge Byte Tech',
  description: 'Learn about Bridge Byte Tech, our mission, vision, and the team driving digital innovation. We build scalable SaaS products and enterprise software.',
  keywords: ['About Bridge Byte Tech', 'Software Company Profile', 'Tech Team Bangladesh', 'Our Mission', 'Bridge Byte Vision'],
};

export default function AboutPage() {
  return <AboutContent />;
}