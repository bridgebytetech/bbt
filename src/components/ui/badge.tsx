import { cn } from '@/lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md';
  dot?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = 'primary',
  size = 'md',
  dot = false,
  className,
}: BadgeProps) {
  const variants = {
    primary: 'bg-brand-blue/10 text-brand-blue border-brand-blue/20',
    success: 'bg-status-success/10 text-status-success border-status-success/20',
    warning: 'bg-status-warning/10 text-status-warning border-status-warning/20',
    error: 'bg-status-error/10 text-status-error border-status-error/20',
    info: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
  };

  const dotColors = {
    primary: 'bg-brand-blue',
    success: 'bg-status-success',
    warning: 'bg-status-warning',
    error: 'bg-status-error',
    info: 'bg-brand-cyan',
  };

  return (
    <span
      className={cn(
        'badge border',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {dot && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              dotColors[variant]
            )}
          />
          <span
            className={cn(
              'relative inline-flex rounded-full h-2 w-2',
              dotColors[variant]
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}