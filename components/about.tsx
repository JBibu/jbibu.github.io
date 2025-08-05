"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EXPERIENCE_DATA, LANGUAGES } from "@/lib/constants";

export const About = () => {
  return (
    <section id="about" className="py-16 bg-muted/30 relative">      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 animate-fade-in-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="text-muted-foreground md:text-lg">
              I'm a passionate system administrator and web developer who enjoys building things that work well. 
              Currently studying Web Application Development and working part-time managing IT infrastructure.
            </p>
            <p className="text-muted-foreground md:text-lg">
              I love working with modern technologies and creating efficient, scalable solutions. 
              My experience spans from system administration to full-stack development.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((lang, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="hover:scale-110 transition-transform cursor-default"
                  >
                    {lang.name} - {lang.level}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in-right">
            <h3 className="text-2xl font-bold">Experience & Education</h3>
            {EXPERIENCE_DATA.map((item, index) => (
              <Card 
                key={index} 
                className="card-hover hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>
                    <span className="font-medium">{item.company}</span>
                    <span className="text-muted-foreground ml-2">• {item.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};