"use client";

import { OptimizedParticles } from "@/components/ui/optimized-particles";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCE_DATA, LANGUAGES } from "@/lib/constants";

export const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900 relative">
      <OptimizedParticles variant="about" />
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              I work as a system admin at C3i Servicios Informáticos and develop web applications. I like solving problems on both the server and application sides.
            </p>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Whether it&apos;s setting up infrastructure or writing code, I enjoy making things work smoothly. Always learning something new.
            </p>
            <div className="mt-6 space-y-2">
              <h3 className="text-xl font-bold">Languages</h3>
              <div className="flex gap-2">
                {LANGUAGES.map((lang, index) => (
                  <Badge key={index}>{lang.name} ({lang.level})</Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Experience & Education</h3>
            <div className="grid gap-4">
              {EXPERIENCE_DATA.map((exp, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription>{exp.company} • {exp.period}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};