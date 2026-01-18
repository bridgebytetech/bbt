'use client';

import { useEffect, useRef, useState } from 'react';

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(element);
      }
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
}

export function useStaggerAnimation(itemCount: number, baseDelay: number = 100) {
  return Array.from({ length: itemCount }, (_, i) => ({
    style: { animationDelay: `${i * baseDelay}ms` },
  }));
}