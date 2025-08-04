"use client";

import { 
  Github,
  Linkedin,
  Mail
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="py-6 border-t">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-gray-500 dark:text-gray-400">© 2025 {PERSONAL_INFO.name}</p>
          <div className="flex gap-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`}>
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};