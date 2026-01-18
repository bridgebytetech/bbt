import type { Metadata } from 'next';
import { HomeContent } from '@/components/home/home-content';

export const metadata: Metadata = {
  title: 'Bridge Byte Tech | Home',
  description: 'We build scalable SaaS products, mobile apps, and enterprise software solutions. Partner with us for digital excellence.',
};

export default function HomePage() {
  return <HomeContent />;
}