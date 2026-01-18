import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  background?: 'default' | 'surface' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  background = 'default',
  padding = 'lg',
}: SectionProps) {
  const backgrounds = {
    default: 'bg-ui-background',
    surface: 'bg-ui-surface',
    gradient: 'bg-gradient-to-b from-ui-background to-ui-surface',
  };

  const paddings = {
    none: '',
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-20',
    lg: 'py-20 md:py-28 lg:py-32',
  };

  return (
    <section
      id={id}
      className={cn(backgrounds[background], paddings[padding], className)}
    >
      <div className={cn('container-custom', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

// Section Header Component
interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 md:mb-16',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {badge && (
        <span className="badge badge-primary mb-4">{badge}</span>
      )}
      <h2 className="heading-2 text-text-primary mb-4">{title}</h2>
      {description && (
        <p className="body-large">{description}</p>
      )}
    </div>
  );
}