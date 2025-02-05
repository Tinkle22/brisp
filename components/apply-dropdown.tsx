'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const programs = {
  ADULTS: [
    { name: 'Full Time', href: '/fulltime' },
    { name: 'Online', href: '/adults-online' },
    { name: 'Distance', href: '/distance' },
    { name: 'Part Time', href: '/part-time' },
  ],
  KIDS: [
    { name: 'Weekends Program', href: '/weekends' },
    { name: 'Holiday Program', href: '/holiday' },
    { name: 'Online Program', href: '/online-kids' },
    { name: 'Briisp Kids-Hub', href: '/hub' },
  ],
};

export default function ApplyDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.apply-dropdown')) {
      setIsOpen(false);
    }
  };

  // Add/remove event listener
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative apply-dropdown">
      <Link
        href="#"
        className="text-sm font-semibold leading-6 text-muted-foreground hover:text-emerald-600"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        Apply
      </Link>

      {isOpen && (
        <Card className="absolute left-1 mt-2 w-[600px] origin-top-right rounded-lg bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 p-6">
          <div className="grid grid-cols-2 gap-8">
            {/* Adults Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-emerald-600">ADULTS</h3>
              <div className="space-y-2">
                {programs.ADULTS.map((program) => (
                  <Link
                    key={program.name}
                    href={program.href}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {program.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Kids Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-emerald-600">KIDS</h3>
              <div className="space-y-2">
                {programs.KIDS.map((program) => (
                  <Link
                    key={program.name}
                    href={program.href}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {program.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}