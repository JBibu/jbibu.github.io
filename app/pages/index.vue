<script setup lang="ts">
const siteUrl = 'https://jbibu.xyz'
const siteTitle = 'Javier Muñoz Solano — Web Developer & Systems Administrator'
const siteDescription = 'Web developer and systems administrator from Murcia, Spain. Linux infrastructure, Docker, AWS and AI-driven tooling. Currently at C3i Servicios Informáticos.'
const ogImage = `${siteUrl}/avatar-optimized.jpg`

useSeoMeta({
  title: siteTitle,
  description: siteDescription,
  author: 'Javier Muñoz Solano',
  keywords: 'system administrator, web developer, devops, linux, docker, aws, typescript, python, murcia, spain',
  ogTitle: siteTitle,
  ogDescription: siteDescription,
  ogType: 'website',
  ogUrl: siteUrl,
  ogLocale: 'en_US',
  ogSiteName: 'Javier Muñoz Solano',
  ogImage,
  ogImageWidth: 400,
  ogImageHeight: 400,
  ogImageAlt: 'Javier Muñoz Solano',
  twitterCard: 'summary',
  twitterTitle: siteTitle,
  twitterDescription: siteDescription,
  twitterImage: ogImage,
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
})

interface Project {
  readonly num: string
  readonly title: string
  readonly category: string
  readonly year: string
  readonly description: string
  readonly repo: string
  readonly demo?: string
  readonly demoLabel?: string
}

const projects: Project[] = [
  {
    num: '01',
    title: 'bsgo-server',
    category: 'C# — .NET 9',
    year: '2026',
    description: 'Server emulator for Battlestar Galactica Online, with the network protocol derived from the original client. AGPL-3.0.',
    repo: 'https://github.com/JBibu/bsgo-server',
  },
  {
    num: '02',
    title: 'Tasca Story',
    category: 'Godot — Game Jam',
    year: '2025',
    description: 'A short narrative game built for MJAM25 in Godot, with assets modelled in Blender. Playable in the browser.',
    repo: 'https://github.com/JBibu/tasca_story',
    demo: 'https://mariamartinezros.itch.io/tasca-story',
    demoLabel: 'Play on itch.io',
  },
  {
    num: '03',
    title: 'This site',
    category: 'Nuxt — GSAP',
    year: '2026',
    description: 'Portfolio rebuilt in Nuxt 4 with GSAP, Lenis and a WebGL hero. Statically generated and deployed to GitHub Pages.',
    repo: 'https://github.com/JBibu/jbibu.github.io',
  },
]

interface SkillGroup {
  readonly label: string
  readonly items: readonly string[]
}

const skillGroups: SkillGroup[] = [
  {
    label: 'Development',
    items: ['TypeScript', 'JavaScript', 'Vue', 'Nuxt', 'React', 'Next.js', 'Node.js', 'NestJS', 'Laravel', 'Prisma', 'PostgreSQL', 'Tailwind', 'Java', 'Python', 'Electron'],
  },
  {
    label: 'Infrastructure',
    items: ['Linux', 'Bash', 'PowerShell', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'GitHub Actions', 'AWS', 'Azure', 'GCP', 'Nginx', 'Prometheus', 'Grafana'],
  },
  {
    label: 'Learning',
    items: ['Rust', 'Tauri', 'Godot', 'WebAssembly'],
  },
]

interface TimelineEntry {
  readonly role: string
  readonly place: string
  readonly period: string
}

const timeline: TimelineEntry[] = [
  { role: 'System Administrator', place: 'C3i Servicios Informáticos', period: 'Current — part-time' },
  { role: 'Web Application Development', place: 'CIFP Carlos III, Murcia', period: '2023 — 2025' },
  { role: 'Microcomputer Systems & Networks', place: 'IES Ingeniero De la Cierva', period: '2021 — 2023' },
]

const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Fluent' },
] as const

interface ContactLink {
  readonly label: string
  readonly href: string
  readonly external?: boolean
}

const contactLinks: ContactLink[] = [
  { label: 'javier@munozsolano.com', href: 'mailto:javier@munozsolano.com' },
  { label: 'GitHub', href: 'https://github.com/JBibu', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jbibu', external: true },
]

const sectionLabelClass = 'mb-6 inline-block font-mono text-[10px] uppercase tracking-widest text-muted-foreground'
const navLinkClass = 'hidden font-mono text-xs uppercase tracking-widest text-white/60 transition-colors hover:text-white md:inline'
const contactLinkClass = 'group flex items-center gap-3 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground'
const footerTextClass = 'font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40'

const container = useTemplateRef<HTMLDivElement>('container')
const hero = useTemplateRef<HTMLElement>('hero')
const about = useTemplateRef<HTMLElement>('about')
const gallery = useTemplateRef<HTMLDivElement>('gallery')
const galleryTrack = useTemplateRef<HTMLDivElement>('galleryTrack')
const contact = useTemplateRef<HTMLElement>('contact')
const marquee = useTemplateRef<HTMLDivElement>('marquee')
const scrollBar = useTemplateRef<HTMLDivElement>('scrollBar')

const introComplete = ref(false)

useScrollProgress(scrollBar)
useHeroAnimations({ container, hero, play: introComplete })
useScrollReveal(about, '[data-about-text] > *:not([data-skills-wrap])', {
  opacity: 0, y: 40, duration: 0.8, stagger: 0.12, ease: 'power2.out', scrollStart: 'top 75%',
})
useScrollReveal('[data-skills-wrap]', '[data-skill]', {
  opacity: 0, scale: 0.3, duration: 0.8, stagger: 0.05, ease: 'elastic.out(1, 0.5)', scrollStart: 'top 85%',
})
useHorizontalGallery({ container, gallery, track: galleryTrack })
useScrollMarquee(marquee)
useScrollReveal(contact, '[data-contact] > *', {
  opacity: 0, y: 30, duration: 0.7, stagger: 0.1, ease: 'power2.out',
})
</script>

<template>
  <div ref="container" class="relative">
    <Intro v-if="!introComplete" @complete="introComplete = true" />

    <!-- Scroll progress bar -->
    <div
      ref="scrollBar"
      class="fixed bottom-0 left-0 z-[10001] h-[2px] w-full origin-left bg-foreground/30"
      style="transform: scaleX(0)"
    />

    <!-- ── Navigation ── -->
    <nav
      data-nav
      class="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-5 mix-blend-difference md:px-10"
    >
      <a href="#" data-hover class="font-mono text-xs uppercase tracking-widest text-white">
        Javier Muñoz
      </a>

      <div class="flex items-center gap-8">
        <a href="#about" data-hover :class="navLinkClass">About</a>
        <a href="#work" data-hover :class="navLinkClass">Work</a>
        <a href="#contact" data-hover :class="navLinkClass">Contact</a>
        <ThemeToggle />
      </div>
    </nav>

    <!-- ── Hero ── -->
    <section
      ref="hero"
      class="relative grid min-h-svh grid-cols-1 px-6 pb-16 md:grid-cols-12 md:px-10"
    >
      <div class="pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-100">
        <PixelBlast
          variant="square"
          :pixel-size="4"
          color="#424242"
          :pattern-scale="2"
          :pattern-density="1"
          :pixel-size-jitter="0"
          :enable-ripples="true"
          :ripple-speed="0.4"
          :ripple-thickness="0.12"
          :ripple-intensity-scale="1.5"
          :speed="0.5"
          :edge-fade="0.25"
          :transparent="true"
        />
      </div>

      <div
        class="absolute top-32 right-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/40 md:right-10 [writing-mode:vertical-rl]"
      >
        Murcia, Spain / 2026
      </div>

      <div data-hero-content class="flex items-end pt-24 md:hidden">
        <img
          data-hero-fade
          src="/avatar-optimized.jpg"
          alt="Javier Muñoz Solano"
          width="400"
          height="400"
          class="aspect-[4/3] w-full max-w-xs rounded-sm object-cover"
        >
      </div>

      <div data-hero-content class="flex flex-col justify-end md:col-span-7">
        <div class="overflow-hidden">
          <h1 class="font-serif text-[clamp(3rem,10vw,8rem)] leading-none tracking-tight pt-[0.15em] pb-[0.1em]">
            <span
              v-for="(char, i) in 'Javier'"
              :key="`l1-${i}`"
              data-char
              data-char-line="1"
              class="inline-block"
              :style="char === ' ' ? { width: '0.3em' } : undefined"
            >{{ char === ' ' ? ' ' : char }}</span>
          </h1>
        </div>
        <div class="overflow-hidden">
          <h1 class="font-serif text-[clamp(3rem,10vw,8rem)] leading-none tracking-tight">
            <span
              v-for="(char, i) in 'Muñoz Solano'"
              :key="`l2-${i}`"
              data-char
              data-char-line="2"
              class="inline-block"
              :style="char === ' ' ? { width: '0.3em' } : undefined"
            >{{ char === ' ' ? ' ' : char }}</span>
          </h1>
        </div>

        <div class="mt-8 flex flex-col gap-4 md:mt-12 md:flex-row md:items-end md:gap-16">
          <p data-hero-fade class="max-w-md font-mono text-sm leading-relaxed text-muted-foreground">
            Web developer &amp; systems administrator. Linux infrastructure,
            containers and AI-driven tooling — building things that work well.
          </p>
          <div data-hero-fade class="flex items-center gap-3 text-muted-foreground/50">
            <span class="h-px w-8 bg-current" />
            <span class="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
          </div>
        </div>
      </div>

      <div data-hero-content class="hidden items-end justify-end md:col-span-5 md:flex">
        <img
          data-hero-fade
          src="/avatar-optimized.jpg"
          alt="Javier Muñoz Solano"
          width="400"
          height="400"
          class="aspect-[3/4] w-full max-w-sm rounded-sm object-cover"
        >
      </div>
    </section>

    <!-- ── About ── -->
    <section ref="about" id="about" class="relative px-6 py-32 md:px-10 md:py-48">
      <div data-about-text class="mx-auto max-w-3xl">
        <span :class="sectionLabelClass">About</span>
        <h2 class="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-tight">
          Building the software
          <br>
          and running the <em>infrastructure</em>
          <br>
          it lives on
        </h2>
        <p class="mt-8 max-w-lg font-mono text-sm leading-relaxed text-muted-foreground">
          I'm a web developer and systems administrator based in Murcia, Spain,
          currently keeping the IT infrastructure running at C3i Servicios
          Informáticos and building internal web applications alongside it.
        </p>
        <p class="mt-4 max-w-lg font-mono text-sm leading-relaxed text-muted-foreground">
          I care about clean code, machines that stay up, and the details that
          make an experience feel intentional. Linux enthusiast, and a
          ThinkPad one too.
        </p>

        <div data-skills-wrap class="mt-12 flex flex-col gap-6">
          <div v-for="group in skillGroups" :key="group.label">
            <span class="mb-3 inline-block font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
              {{ group.label }}
            </span>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="skill in group.items"
                :key="skill"
                data-skill
                class="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground"
              >{{ skill }}</span>
            </div>
          </div>
        </div>

        <div class="mt-16">
          <span class="mb-6 inline-block font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
            Experience &amp; Education
          </span>
          <ul class="flex flex-col gap-6 border-l border-border pl-6">
            <li v-for="entry in timeline" :key="entry.role">
              <h3 class="font-serif text-xl leading-tight tracking-tight">
                {{ entry.role }}
              </h3>
              <p class="mt-1 font-mono text-xs text-muted-foreground">
                {{ entry.place }}
              </p>
              <p class="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
                {{ entry.period }}
              </p>
            </li>
          </ul>
        </div>

        <div class="mt-12">
          <span class="mb-3 inline-block font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
            Languages
          </span>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="lang in languages"
              :key="lang.name"
              class="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground"
            >{{ lang.name }} — {{ lang.level }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Marquee divider ── -->
    <div ref="marquee" class="overflow-hidden border-y border-border py-6">
      <div data-marquee-inner class="flex w-max gap-12">
        <span
          v-for="i in 3"
          :key="i"
          class="flex shrink-0 gap-12 font-serif text-[clamp(2rem,4vw,3rem)] italic text-muted-foreground/20"
        >
          <span>Development</span>
          <span aria-hidden="true">—</span>
          <span>Infrastructure</span>
          <span aria-hidden="true">—</span>
          <span>Automation</span>
          <span aria-hidden="true">—</span>
        </span>
      </div>
    </div>

    <!-- ── Projects — horizontal scroll ── -->
    <section id="work">
      <div ref="gallery" class="relative h-svh overflow-hidden">
        <div class="absolute top-8 left-6 z-10 md:left-10">
          <span :class="sectionLabelClass">Selected Work</span>
        </div>

        <div
          ref="galleryTrack"
          class="absolute top-0 left-0 flex h-full items-center gap-8 pl-6 md:gap-12 md:pl-10"
        >
          <div class="w-0 shrink-0 md:w-16" />

          <article
            v-for="project in projects"
            :key="project.num"
            data-project-card
            data-hover
            class="group relative flex h-[70vh] w-[75vw] shrink-0 flex-col justify-end overflow-hidden rounded-sm border border-border bg-card p-8 transition-colors duration-500 md:w-[45vw] md:p-10"
          >
            <a
              :href="project.repo"
              target="_blank"
              rel="noopener noreferrer"
              class="absolute inset-0 z-20"
              :aria-label="`${project.title} on GitHub`"
            />

            <span
              data-card-num
              class="absolute top-8 right-8 font-mono text-[10px] tracking-widest text-muted-foreground/40 md:top-10 md:right-10"
            >{{ project.num }}</span>

            <div
              data-card-bg
              class="img-placeholder absolute inset-0 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.06]"
            />

            <div class="relative z-10">
              <span class="mb-3 inline-block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {{ project.category }} — {{ project.year }}
              </span>
              <h3 class="font-serif text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-tight">
                {{ project.title }}
              </h3>
              <p class="mt-4 max-w-sm font-mono text-xs leading-relaxed text-muted-foreground">
                {{ project.description }}
              </p>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                class="relative z-30 mt-6 inline-block font-mono text-[10px] uppercase tracking-widest text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >{{ project.demoLabel }} ↗</a>
            </div>

            <div class="absolute right-8 bottom-8 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:right-10 md:bottom-10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                class="text-muted-foreground"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </article>

          <div class="w-6 shrink-0 md:w-10" />
        </div>
      </div>
    </section>

    <!-- ── Contact ── -->
    <section ref="contact" id="contact" class="relative px-6 py-32 md:px-10 md:py-48">
      <div data-contact class="mx-auto max-w-4xl">
        <span :class="sectionLabelClass">Contact</span>
        <h2 class="font-serif text-[clamp(2.5rem,7vw,5rem)] leading-[1] tracking-tight">
          Let's work
          <br>
          <em>together</em>
        </h2>
        <div class="mt-12 flex flex-col gap-4 md:flex-row md:gap-16">
          <a
            v-for="link in contactLinks"
            :key="link.label"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener noreferrer' : undefined"
            data-hover
            :class="contactLinkClass"
          >
            <span class="h-px w-6 bg-current transition-all group-hover:w-10" />
            {{ link.label }}
          </a>
        </div>
      </div>
    </section>

    <!-- ── Footer ── -->
    <footer class="flex items-center justify-between border-t border-border px-6 py-6 md:px-10">
      <span :class="footerTextClass">© 2026 Javier Muñoz Solano</span>
      <span :class="footerTextClass">Murcia, Spain</span>
    </footer>
  </div>
</template>
