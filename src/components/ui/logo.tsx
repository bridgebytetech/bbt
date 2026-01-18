import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
}

export function Logo({ className, showText = true, size = 'md', variant = 'dark' }: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32, text: 'text-sm' },
    md: { width: 40, height: 40, text: 'text-[15px]' },
    lg: { width: 48, height: 48, text: 'text-lg' },
  };

  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      <div className="relative">
        {/* Real Logo Image */}
        <Image
          src="/images/logo.png" // Make sure file name matches exactly
          alt="Bridge Byte Tech"
          width={sizes[size].width}
          height={sizes[size].height}
          className="rounded-lg object-contain"
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          priority
        />
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={cn(
            "font-semibold leading-tight tracking-tight",
            sizes[size].text,
            variant === 'dark' ? "text-white" : "text-gray-900"
          )}>
            Bridge Byte
          </span>
          <span className={cn(
            "text-[9px] font-medium uppercase tracking-[0.2em]",
            variant === 'dark' ? "text-gray-500" : "text-gray-500"
          )}>
            Technology
          </span>
        </div>
      )}
    </Link>
  );
}