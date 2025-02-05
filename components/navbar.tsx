'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme-toggle';
import ServicesDropdown from '@/components/services-dropdown';
import ApplyDropdown from '@/components/apply-dropdown';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Apply', href: '#',  component: ApplyDropdown },
  { name: 'Other Services', href: '#', component: ServicesDropdown },
  {
    name: 'Admissions',
    href: '#',
    dropdown: [
      { name: 'Adults', href: '/admissions/adults' },
      { name: 'Kids', href: '/admissions/kids' },
    ],
  },
  {
    name: 'Depts',
    href: '#',
    dropdown: [
      { name: 'Computer Science', href: '/depts/computer-science' },
      { name: 'Auto Engineering', href: '/depts/auto-engineering' },
    ],
  },
  { name: 'Campus', href: '/campus' },
  { name: 'Contact', href: '/contact' },
  { name: 'Graduates', href: '/graduates' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const renderNavItem = (item: any) => {
    if (item.component) {
      const Component = item.component;
      return <Component />;
    }

    if (item.dropdown) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm font-semibold leading-6 text-muted-foreground hover:text-emerald-600">
            {item.name}
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-48">
            {item.dropdown.map((dropdownItem: any) => (
              <DropdownMenuItem key={dropdownItem.name} asChild>
                <Link
                  href={dropdownItem.href}
                  className="w-full cursor-pointer"
                >
                  {dropdownItem.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link
        href={item.href}
        className={cn(
          'text-sm font-semibold leading-6',
          pathname === item.href
            ? 'text-emerald-600'
            : 'text-muted-foreground hover:text-emerald-600'
        )}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header className="bg-background border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-emerald-600" />
            <span className="font-semibold text-xl">Academy</span>
          </Link>
        </div>
        <div className="flex lg:hidden items-center gap-4">
          <ThemeToggle />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <div key={item.name}>
              {renderNavItem(item)}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
          <ThemeToggle />
        </div>
      </nav>
      
      <div className={cn(
        'lg:hidden',
        mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'
      )}>
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-emerald-600" />
              <span className="font-semibold text-xl">Academy</span>
            </Link>
            <Button
              variant="ghost"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <>
                        <div className="text-base font-semibold leading-7 text-muted-foreground mb-2">
                          {item.name}
                        </div>
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground hover:text-emerald-600 pl-6"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7',
                          pathname === item.href
                            ? 'text-emerald-600'
                            : 'text-muted-foreground hover:text-emerald-600'
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="py-6 space-y-2">
                <div className="flex items-center justify-between px-3">
                  <span className="text-sm font-medium">Theme</span>
                  <ThemeToggle />
                </div>
                <ApplyDropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}