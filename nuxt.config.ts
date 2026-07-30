import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/fonts', '@nuxtjs/color-mode'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  // Static export for GitHub Pages (custom domain jbibu.xyz, so no baseURL).
  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: ['/'],
      failOnError: true,
    },
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
    storageKey: 'theme',
  },

  fonts: {
    families: [
      { name: 'DM Sans', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'IBM Plex Mono', provider: 'google', weights: [300, 400, 500] },
      { name: 'Instrument Serif', provider: 'google', weights: [400], styles: ['normal', 'italic'] },
    ],
  },

  imports: {
    presets: [
      { from: 'gsap', imports: ['gsap'] },
      { from: 'gsap/ScrollTrigger', imports: ['ScrollTrigger'] },
      { from: 'lenis', imports: [{ name: 'default', as: 'Lenis' }] },
      { from: 'postprocessing', imports: ['EffectComposer', 'EffectPass', 'RenderPass', 'Effect'] },
    ],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'theme-color', content: '#1a1817', media: '(prefers-color-scheme: dark)' },
        { name: 'theme-color', content: '#f5f3f0', media: '(prefers-color-scheme: light)' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },
})
