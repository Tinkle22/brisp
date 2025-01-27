'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { ChevronRight, BookOpen, FileCode, Users, Lightbulb, PenTool, GraduationCap } from 'lucide-react';

interface ServiceDetails {
  title: string;
  description: string;
  image: string;
  applyLink: string;
  viewMoreLink: string;
}

const services = [
  {
    id: 'refresher',
    label: 'Refresher Course',
    icon: BookOpen,
    details: {
      title: 'Graduate Refresher Course',
      description: 'We help you practice and become proficient in your field through hands-on training and expert guidance.',
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80',
      applyLink: '/apply/refresher',
      viewMoreLink: '/services/refresher'
    }
  },
  {
    id: 'final-year',
    label: 'Final Year Project',
    icon: FileCode,
    details: {
      title: 'Final Year Project Consultation',
      description: 'We give guidance to prototype, abstract, and implement your final year project effectively.',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=400&q=80',
      applyLink: '/apply/project',
      viewMoreLink: '/services/project'
    }
  },
  {
    id: 'consultations',
    label: 'Consultations',
    icon: Users,
    details: {
      title: 'Professional Consultations',
      description: 'Get expert advice and guidance for your technical projects and career decisions.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400&q=80',
      applyLink: '/apply/consultation',
      viewMoreLink: '/services/consultation'
    }
  },
  {
    id: 'internship',
    label: 'Internship',
    icon: GraduationCap,
    details: {
      title: 'Internship Program',
      description: 'We offer and connect students to different internship opportunities in the industry.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=400&q=80',
      applyLink: '/apply/internship',
      viewMoreLink: '/services/internship'
    }
  },
  {
    id: 'innovation',
    label: 'Innovations Technology',
    icon: Lightbulb,
    details: {
      title: 'Innovation Hub',
      description: 'Access cutting-edge technology and resources to bring your innovative ideas to life.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80',
      applyLink: '/apply/innovation',
      viewMoreLink: '/services/innovation'
    }
  },
  {
    id: 'pitch',
    label: 'Pitch Decks',
    icon: PenTool,
    details: {
      title: 'Pitch Deck Creation',
      description: 'Learn to create compelling pitch decks and present your ideas professionally.',
      image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&w=400&q=80',
      applyLink: '/apply/pitch',
      viewMoreLink: '/services/pitch'
    }
  }
];

export default function ServicesDropdown() {
  const [activeService, setActiveService] = useState<ServiceDetails | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.services-dropdown')) {
      setIsOpen(false);
      setActiveService(null);
    }
  };

  // Add/remove event listener
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <div className="relative services-dropdown">
      <button 
        className="text-sm font-semibold leading-6 text-muted-foreground hover:text-emerald-600"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
          if (!isOpen) {
            setActiveService(null);
          }
        }}
      >
        Other Services
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-[800px] origin-top-left rounded-lg bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="flex">
            {/* Services List */}
            <div className="w-1/3 border-r">
              <div className="p-2">
                {services.map((service) => (
                  <button
                    key={service.id}
                    className="flex items-center gap-2 w-full p-3 text-sm rounded-md hover:bg-muted text-left"
                    onMouseEnter={() => setActiveService(service.details)}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveService(service.details);
                    }}
                  >
                    <service.icon className="h-5 w-5 text-emerald-600" />
                    <span>{service.label}</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details Panel */}
            <div className="w-2/3 p-4">
              {activeService ? (
                <div className="space-y-4">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{activeService.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {activeService.description}
                    </p>
                    <div className="flex gap-3">
                      <Link
                        href={activeService.applyLink}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-emerald-600 text-white hover:bg-emerald-700 h-10 px-4 py-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Apply
                      </Link>
                      <Link
                        href={activeService.viewMoreLink}
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View More
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center text-muted-foreground">
                  <p>Select a service to see details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}