"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BookOpen,
  Users,
  Trophy,
  ArrowRight,
  Download,
  MapPin,
  Bell,
} from "lucide-react";
import ProgramsShowcase from "@/components/programs-showcase";
import NoticeBoard from "@/components/notice-board";
import KidsPrograms from "@/components/kids-programs";
import AnimatedShowcase from "@/components/AnimatedShowcase";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 sm:py-32 overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source
              src="https://videos.pexels.com/video-files/9373137/9373137-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 min-h-96">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Transform Your Future with Professional Education
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Join our academy to gain the skills and knowledge needed to excel
              in your career. Learn from industry experts and get certified in
              your field of interest.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="/courses">Explore Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Programs Showcase & Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-6 lg:px-8 py-8"
      >
        {/* Main Content */}
        <div className="flex-1">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="py-20"
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose Our Academy?
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                We provide comprehensive education solutions designed to help
                you succeed in today's competitive world.
              </p>
            </div>
            <div className="mx-auto mt-16">
              <AnimatedShowcase />
            </div>
          </motion.section>
        </div>
        {/* Side Components */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="lg:w-80 space-y-8"
        >
          {/* Notice Board */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="h-5 w-5 text-emerald-600" />
              <h2 className="text-xl font-semibold">Notice Board</h2>
            </div>
            <NoticeBoard />
          </Card>
          {/* Downloads */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Download className="h-5 w-5 text-emerald-600" />
              <h2 className="text-xl font-semibold">Downloads</h2>
            </div>
            <div className="space-y-3">
              {[
                { name: "Academy Brochure 2024", size: "2.5 MB" },
                { name: "Course Catalog", size: "1.8 MB" },
                { name: "Fee Structure", size: "500 KB" },
              ].map((file, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-between text-left font-normal transition-all duration-300 hover:bg-emerald-50"
                >
                  <span>{file.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {file.size}
                  </span>
                </Button>
              ))}
            </div>
          </Card>
          {/* Campus Location */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-emerald-600" />
              <h2 className="text-xl font-semibold">Campus Location</h2>
            </div>
            <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
              <img
                src="img-01.jpg"
                alt="Campus"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-2 text-sm">
              <p className="font-medium">Main Campus</p>
              <p className="text-muted-foreground">Meanwood Ndeke Phase 2</p>
              <p className="text-muted-foreground">Plot 2436 Lusaka</p>
              <p className="text-emerald-600">+260 953500666</p>
              <p className="text-emerald-600">
                briispacademyacademy111@gmail.com
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>

      {/* Kids Programs Section */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <KidsPrograms />
      </motion.div> */}

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative isolate py-20 sm:py-32 bg-muted mt-auto"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Join thousands of students who have already transformed their
              careers through our academy.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 group"
                size="lg"
                asChild
              >
                <Link href="/courses">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
