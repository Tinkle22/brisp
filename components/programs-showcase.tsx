'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BsArrowRight } from 'react-icons/bs';
import { 
  SiMysql, 
  SiCisco, 
  SiPython, 
  SiAdobecreativecloud, 
  SiKalilinux, 
  SiReact 
} from 'react-icons/si';
import Link from 'next/link';

const techSpaceImages = [
  {
    main: "event2.jpg",
    thumbnails: [
      "event2.jpg",
      "event1.jpg",
      "event3.jpg",
      "event4.jpg",
      "event5.jpg"
    ]
  }
];

const adultCourses = [
  {
    name: 'Database Management',
    icon: SiMysql,
    color: 'bg-orange-500',
  },
  {
    name: 'Computer Networking',
    icon: SiCisco,
    color: 'bg-indigo-500',
  },
  {
    name: 'Robotics & Automation',
    icon: SiReact,
    color: 'bg-blue-500',
  },
  {
    name: 'Data Science',
    icon: SiPython,
    color: 'bg-red-500',
  },
  {
    name: 'Graphic Designing',
    icon: SiAdobecreativecloud,
    color: 'bg-pink-500',
  },
  {
    name: 'Cyber Security',
    icon: SiKalilinux,
    color: 'bg-green-500',
  },
  {
    name: 'Web Development',
    icon: SiReact,
    color: 'bg-blue-400',
  },
];

export default function ProgramsShowcase() {
  const [selectedImage, setSelectedImage] = useState(techSpaceImages[0].main);

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tech Space Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Tech-Space</h2>
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden">
                <img
                  src={selectedImage}
                  alt="Tech Space"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {techSpaceImages[0].thumbnails.map((thumb, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(thumb)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedImage === thumb ? 'border-emerald-600' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={thumb}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Adult Courses Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b">Adults Program (Full-Time)</h2>
            <div className="grid grid-cols-2 gap-3">
              {adultCourses.map((course, index) => (
                <Card
                  key={index}
                  className={`p-4 flex items-center gap-3 cursor-pointer hover:shadow-md transition-shadow ${
                    index === adultCourses.length - 1 ? 'col-span-2' : ''
                  } hover-card-animation`}
                >
                  <div className={`p-2 rounded-lg ${course.color}`}>
                    <course.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium">{course.name}</span>
                </Card>
              ))}
              <Button
                className="col-span-2 bg-purple-600 hover:bg-purple-700"
                asChild
              >
                <Link href="/courses">
                  View All Programs
                  <BsArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}