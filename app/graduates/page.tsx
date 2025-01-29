import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Trophy, Calendar, Star } from 'lucide-react';

const graduates = [
  {
    rank: 1,
    name: "David K Nyula",
    image: "/graduates/david.jpg",
    program: "Mobile Programming",
    year: 2024,
    score: 6.8,
  },
  {
    rank: 2,
    name: "Daniel Munyenyembe",
    image: "/graduates/daniel.jpg",
    program: "Web Development",
    year: 2024,
    score: 5.1,
  },
  // Add more graduates as needed
];

const Graduates = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-background border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Distinguished Graduates
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Meet our successful graduates who have excelled in their respective programs
              and are now making their mark in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Graduates Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {graduates.map((graduate) => (
              <Card key={graduate.name} className="overflow-hidden">
                <div className="relative">
                  {graduate.rank <= 3 && (
                    <div className="absolute top-4 left-4 z-10 bg-emerald-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                      <Trophy className="w-4 h-4" />
                      
                    </div>
                  )}
                  <div className="aspect-square relative">
                    <img
                      src={graduate.image}
                      alt={graduate.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{graduate.name}</h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <GraduationCap className="w-4 h-4" />
                      <span>{graduate.program}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Class of {graduate.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Star className="w-4 h-4 text-emerald-600" />
                      <span>B-Score: {graduate.score}</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                      View Profile
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Graduates;