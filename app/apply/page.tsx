"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { courses } from '@/lib/courses';

const ApplicationForm = () => {
  const searchParams = useSearchParams();
  const [studentType, setStudentType] = React.useState<'child' | 'adult'>('adult');
  
  // Get program from URL and find matching course
  const programSlug = searchParams.get('program');
  const selectedProgram = programSlug ? courses[programSlug as keyof typeof courses]?.title : null;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-background border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Application Form
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Fill out the form below to begin your educational journey with us.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Card className="p-6 sm:p-8">
            <form className="space-y-8">
              {/* Student Type Selection */}
              <div className="space-y-4">
                <Label>Student Type</Label>
                <RadioGroup
                  defaultValue="adult"
                  onValueChange={(value) => setStudentType(value as 'child' | 'adult')}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="adult" id="adult" />
                    <Label htmlFor="adult">Adult</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="child" id="child" />
                    <Label htmlFor="child">Child</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Study Mode */}
              <div className="space-y-4">
                <Label htmlFor="studyMode">Study Mode</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select study mode" />
                  </SelectTrigger>
                  <SelectContent>
                    {studentType === 'child' ? (
                      <>
                        <SelectItem value="online">Online Learning</SelectItem>
                        <SelectItem value="weekends">Weekend Classes</SelectItem>
                        <SelectItem value="holiday">Holiday Program</SelectItem>
                      </>
                    ) : (
                      <>
                        <SelectItem value="online">Online Learning</SelectItem>
                        <SelectItem value="distance">Distance Learning</SelectItem>
                        <SelectItem value="partTime">Part Time</SelectItem>
                        <SelectItem value="fullTime">Full Time</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="otherNames">Other Names</Label>
                  <Input id="otherNames" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Additional Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="maritalStatus">Marital Status</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married">Married</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input type="date" id="dob" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nationality">Nationality</Label>
                  <Input id="nationality" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="id">ID (NRC or Passport)</Label>
                  <Input id="id" required />
                </div>
              </div>

              {/* Academic Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="academicYear">Academic Year</Label>
                  <Input id="academicYear" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="intake">Intake</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select intake" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="january">January</SelectItem>
                      <SelectItem value="may">May</SelectItem>
                      <SelectItem value="september">September</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="program">Program</Label>
                  <Select defaultValue={programSlug || undefined}>
                    <SelectTrigger>
                      <SelectValue placeholder={selectedProgram || "Select program"} />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(courses).map(([slug, course]) => (
                        <SelectItem key={slug} value={slug}>
                          {course.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Applicant's Email</Label>
                  <Input type="email" id="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Applicant's Phone #</Label>
                  <Input type="tel" id="phone" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" required />
                </div>
              </div>

              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                Submit Application
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ApplicationForm; 