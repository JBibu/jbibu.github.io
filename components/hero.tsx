"use client";

import { 
  Linkedin,
  Mail,
  Download,
  MapPin,
  Github
} from "lucide-react";

import Particles from "@/components/particles";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PERSONAL_INFO } from "@/lib/constants";

export const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 relative">
      <Particles quantity={50} />
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="animate-fade-in-up animation-delay-100">
                <Badge variant="outline" className="inline-block">
                  {PERSONAL_INFO.title}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fade-in-up animation-delay-200">
                {PERSONAL_INFO.name}
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in-up animation-delay-300">
                {PERSONAL_INFO.description}
              </p>
              <div className="flex items-center gap-2 text-muted-foreground mt-2 animate-fade-in-up animation-delay-400">
                <MapPin className="h-4 w-4" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-in-up animation-delay-500">
              <Button size="lg" className="gap-2 hover:scale-105 transition-transform">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="gap-2 hover:scale-105 transition-transform">
                View Projects
              </Button>
            </div>
            <div className="flex gap-4 animate-fade-in-up animation-delay-600">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="ghost" size="icon" className="hover:scale-110 hover:rotate-3 transition-all">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="ghost" size="icon" className="hover:scale-110 hover:rotate-3 transition-all">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} aria-label="Email">
                <Button variant="ghost" size="icon" className="hover:scale-110 hover:rotate-3 transition-all">
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-border md:w-[400px] animate-fade-in-scale animation-delay-700 hover:scale-105 transition-transform">
              <Avatar className="h-full w-full">
                <AvatarImage 
                  src={PERSONAL_INFO.avatar} 
                  alt={PERSONAL_INFO.name}
                  className="object-cover"
                />
                <AvatarFallback>JMS</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};