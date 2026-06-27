'use client';

import { useEffect, useState } from 'react';

const SECTIONS = ['overview', 'projects', 'tools', 'skills', 'education', 'certification'];

export function useActiveSection() {
  const [active, setActive] = useState<string>('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.25, rootMargin: '-60px 0px -40% 0px' }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
