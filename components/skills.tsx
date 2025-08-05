"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SKILLS_DATA } from "@/lib/constants";

export const Skills = () => {
  const [activeTab, setActiveTab] = useState<'devops' | 'development' | 'learning'>('devops');

  const tabs = [
    { 
      id: 'devops' as const, 
      label: 'DevOps & Infrastructure', 
      description: 'Tools and platforms I use for deployment, monitoring, and system administration',
      skills: SKILLS_DATA.devops 
    },
    { 
      id: 'development' as const, 
      label: 'Development', 
      description: 'Programming languages, frameworks, and development tools I work with',
      skills: SKILLS_DATA.development 
    },
    { 
      id: 'learning' as const, 
      label: 'Currently Learning', 
      description: 'New technologies and concepts I\'m currently exploring and learning',
      skills: SKILLS_DATA.learning 
    }
  ];

  const handleTabClick = (tabId: 'devops' | 'development' | 'learning') => {
    setActiveTab(tabId);
  };

  const getVariantForTab = (tabId: string) => {
    switch (tabId) {
      case 'devops': return 'default' as const;
      case 'development': return 'secondary' as const;
      case 'learning': return 'outline' as const;
      default: return 'secondary' as const;
    }
  };

  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section id="skills" className="py-16 bg-muted/30">
      
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills & Technologies
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              The tools and technologies I use to bring ideas to life
            </p>
          </div>
        </div>

        {/* Custom Tab Buttons */}
        <div className="flex justify-center mb-8 animate-fade-in-up animation-delay-200">
          <div className="inline-flex bg-card/50 backdrop-blur-sm p-1 rounded-lg border relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-6 py-4 text-sm font-medium transition-all duration-300 relative z-10 hover:scale-105 ${
                  activeTab === tab.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div 
                    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out"
                    style={{ width: 'calc(100% - 12px)' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-8 animate-fade-in-up animation-delay-400">
          <div className="mb-8 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {currentTab.description}
            </p>
          </div>

          <div className={`grid gap-4 ${
            activeTab === 'learning' 
              ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
              : 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5'
          }`}>
            {currentTab.skills.map((skill, index) => (
              <Card 
                key={`${activeTab}-${skill}-${index}`}
                className="skill-card group flex items-center justify-center p-6 bg-card/50 backdrop-blur-sm border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
              >
                <Badge 
                  variant={getVariantForTab(activeTab)}
                  className="text-sm font-semibold py-2 px-4 group-hover:scale-110 transition-transform duration-200"
                >
                  {skill}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};