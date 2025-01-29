import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import AccommodationCard from '@/components/accommodation-card';

const Fulltime = () => {
  const courses = [
    {
      title: "Artificial Intelligence",
      subtitle: "Unlock The Power Of Artificial Intelligence And Become An AI Expert",
      duration: "3 Months Program",
      price: "K850/Pm",
      image: "/ai-course.jpg"
    },
    {
      title: "Application Development",
      subtitle: "Unlock Your Potential In App Development And Create Amazing Applications",
      duration: "3 Months Program",
      price: "K850/Pm",
      image: "/app-dev.jpg"
    },
    {
      title: "Automation and Robotics",
      subtitle: "Immerse Yourself In The Captivating World Of Automation",
      duration: "3 Months Program",
      price: "K850/Pm",
      image: "/robotics.jpg"
    },
    {
      title: "Graphic Designing",
      subtitle: "Unleash Your Creativity And Master The Art Of Graphic Design",
      duration: "3 Months Program",
      price: "K850/Pm",
      image: "/graphic-design.jpg"
    },
    {
      title: "Cyber Security",
      subtitle: "Become A Cybersecurity Expert And Protect Against Digital Threats",
      duration: "3 Months Program",
      price: "K850/Pm",
      image: "/cyber-security.jpg"
    },
    {
      title: "Computer Networking",
      subtitle: "Learn The Fundamental Concepts And Principles Of Networking",
      duration: "3 Months Program",
      price: "K850/Pm",
      image: "/networking.jpg"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Full-Time Programs
          </h1>
          <p className="text-lg text-muted-foreground">
            Intensive professional courses designed to kickstart your career
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Course Grid */}
          <div className="lg:flex-1">
            <div className="grid md:grid-cols-2 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="overflow-hidden flex flex-col">
                  <div className="relative h-48">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-sm text-emerald-600 mb-2">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                    <p className="text-muted-foreground mb-4 flex-1">
                      {course.subtitle}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-emerald-600">
                        {course.price}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700 group"
                        asChild
                      >
                        <Link href="/apply">
                          Apply
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        asChild
                      >
                        <Link href={`/full-time/${course.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          View More
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="sticky top-6">
              <AccommodationCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fulltime;