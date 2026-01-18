import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto">
          {/* 404 Number */}
          <div className="relative mb-8">
            <span className="text-[150px] md:text-[200px] font-bold text-gray-900 select-none">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl">🔍</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          
          <p className="text-lg text-gray-400 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 text-white font-medium rounded-full hover:bg-cyan-600 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-full border border-gray-800 hover:border-gray-700 hover:bg-gray-800 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm mb-4">Maybe you're looking for:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/services" className="text-cyan-500 hover:text-cyan-400 text-sm">
                Services
              </Link>
              <Link href="/products" className="text-cyan-500 hover:text-cyan-400 text-sm">
                Products
              </Link>
              <Link href="/about" className="text-cyan-500 hover:text-cyan-400 text-sm">
                About
              </Link>
              <Link href="/contact" className="text-cyan-500 hover:text-cyan-400 text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}