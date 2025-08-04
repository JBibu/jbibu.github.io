"use client";

import { Github } from "lucide-react";
import Image from "next/image";

import { OptimizedParticles } from "@/components/ui/optimized-particles";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS_DATA } from "@/lib/constants";

export const Projects = () => {

  return (
    <section id="projects" className="py-16 relative">
      <OptimizedParticles variant="projects" />
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Some of my recent work
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {PROJECTS_DATA.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-all hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 2}
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
                <Button size="sm" className="gap-1">
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};