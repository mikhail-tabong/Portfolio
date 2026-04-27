'use client';

import { useEffect } from 'react';

export default function RevealObserver() {
  useEffect(() => {
    const noMo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (noMo || !('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('show'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('show');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
