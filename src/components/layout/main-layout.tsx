import { Navbar } from './navbar';
import { Footer } from './footer';
import { Toaster } from '@/components/ui';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 relative">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* FORCE SPACER: This div forces a 160px gap before footer */}
      <div className="h-24 md:h-40 w-full bg-transparent" aria-hidden="true" />

      <Footer />
      <Toaster />
    </div>
  );
}