"use client";

import { 
  Github,
  Linkedin,
  Mail,
  MapPin
} from "lucide-react";

import { OptimizedParticles } from "@/components/ui/optimized-particles";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PERSONAL_INFO } from "@/lib/constants";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 relative">
      <OptimizedParticles variant="contact" />
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact</h2>
            <p className="text-gray-500 md:text-xl dark:text-gray-400">
              Get in touch
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-5 w-5" />
                <span>linkedin.com/in/jbibu</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                <span>github.com/JBibu</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input id="name" className="w-full rounded-md border border-gray-300 p-2" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input id="email" className="w-full rounded-md border border-gray-300 p-2" placeholder="Your email" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input id="subject" className="w-full rounded-md border border-gray-300 p-2" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" className="min-h-[120px] w-full rounded-md border border-gray-300 p-2" placeholder="Your message" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};