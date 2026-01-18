import { cn } from '@/lib/utils';

export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
}

export function Skeleton({
  className,
  variant = 'rectangular',
  width,
  height,
}: SkeletonProps) {
  const variants = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  return (
    <div
      className={cn('skeleton', variants[variant], className)}
      style={{
        width: width,
        height: height || (variant === 'text' ? '1em' : undefined),
      }}
    />
  );
}

// Pre-made skeleton components
export function SkeletonCard() {
  return (
    <div className="card space-y-4">
      <Skeleton height={200} className="w-full" />
      <Skeleton height={24} width="75%" />
      <Skeleton height={16} width="100%" />
      <Skeleton height={16} width="60%" />
    </div>
  );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height={16}
          width={i === lines - 1 ? '60%' : '100%'}
          variant="text"
        />
      ))}
    </div>
  );
}

export function SkeletonAvatar({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 32,
    md: 48,
    lg: 64,
  };

  return (
    <Skeleton
      variant="circular"
      width={sizes[size]}
      height={sizes[size]}
    />
  );
}