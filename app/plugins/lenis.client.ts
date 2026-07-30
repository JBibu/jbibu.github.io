export default defineNuxtPlugin({
  name: 'lenis',
  dependsOn: ['gsap'],
  setup() {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time: number) => lenis.raf(time * 1000))
    gsap.ticker.lagSmoothing(0)
  },
})
