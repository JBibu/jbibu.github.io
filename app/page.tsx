import { AcrylicNavbar } from "@/components/acrylic-navbar";
import { Hero } from "@/components/hero";
import { lazy, Suspense } from "react";
import { Banner } from "@/components/banner";

// Lazy load components that are below the fold
const About = lazy(() => import("@/components/about").then(module => ({ default: module.About })));
const Projects = lazy(() => import("@/components/projects").then(module => ({ default: module.Projects })));
const Skills = lazy(() => import("@/components/skills").then(module => ({ default: module.Skills })));
const Contact = lazy(() => import("@/components/contact").then(module => ({ default: module.Contact })));
const Footer = lazy(() => import("@/components/footer").then(module => ({ default: module.Footer })));

// Loading fallback component
const SectionLoader = () => (
  <div className="py-16 flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);

export default function HomePage() {
  return (
    <main className="min-h-screen mx-auto">
      <AcrylicNavbar />
      <Banner />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </main>
  );
}