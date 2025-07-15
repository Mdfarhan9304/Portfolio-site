'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

const projects = [
  {
    title: "Unicapp Logistics",
    description: "Unicapp Logistics is a modern logistics and fleet management web app with live tracking, Razorpay payment integration, and a custom backend built with Next.js.",
    image: "/unicapp.webp",
    tags: ["Next.js", "Tailwind CSS", "Razorpay", "Mapbox", "API Routes", "MongoDB"],
    demoUrl: "https://www.unicapp.in/",
    githubUrl: "", // leave blank or add private repo if applicable
    features: [
      "Live vehicle tracking with Mapbox integration",
      "Secure online payments via Razorpay",
      "Server-side backend using Next.js API routes",
      "User and driver management system",
      "Mobile-friendly responsive design with Tailwind CSS"
    ]
  }

  // ... Add more projects with features
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <h2 className="inline-block text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent mb-2 sm:mb-3">
            Projects
          </h2>
        </div>

        <div className="grid gap-10 max-w-7xl mx-auto px-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border border-white/10 rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r border-white/10">

                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">

                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>

                <p className="text-gray-300">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="border-white/10 text-white text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm" variant="outline" className="border-white/10 text-white hover:bg-white/5">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <Link2Icon className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  {project.githubUrl && (
                    <Button size="sm" variant="outline" className="border-white/10 text-white hover:bg-white/5">
                      <Link
                        href={project.githubUrl}
                        className="flex items-center"
                        target="_blank"
                      >
                        <GitHubLogoIcon className="mr-2 h-4 w-4" /> Source
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 