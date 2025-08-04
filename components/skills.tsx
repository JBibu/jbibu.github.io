"use client";

import { OptimizedParticles } from "@/components/ui/optimized-particles";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SKILLS_DATA } from "@/lib/constants";

export const Skills = () => {

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900 relative">
      <OptimizedParticles variant="skills" opacity="opacity-20" />
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Technologies I work with
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Tabs defaultValue="devops" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="devops">DevOps</TabsTrigger>
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
            </TabsList>
            <TabsContent value="devops" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {SKILLS_DATA.devops.map((skill, index) => (
                  <Card key={index} className="flex items-center justify-center p-4">
                    <p className="text-center font-medium">{skill}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="development" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {SKILLS_DATA.development.map((skill, index) => (
                  <Card key={index} className="flex items-center justify-center p-4">
                    <p className="text-center font-medium">{skill}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="learning" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {SKILLS_DATA.learning.map((skill, index) => (
                  <Card key={index} className="flex items-center justify-center p-4">
                    <p className="text-center font-medium">{skill}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};