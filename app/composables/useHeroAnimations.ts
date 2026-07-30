import type { Ref, ShallowRef } from 'vue'

interface UseHeroAnimationsOptions {
  container: Readonly<ShallowRef<HTMLElement | null>>
  hero: Readonly<ShallowRef<HTMLElement | null>>
  play: Ref<boolean>
}

export function useHeroAnimations({ container, hero, play }: UseHeroAnimationsOptions) {
  let timeline: gsap.core.Timeline | null = null
  let ctx: gsap.Context | null = null

  onMounted(() => {
    ctx = gsap.context(() => {
      timeline = gsap.timeline({ paused: true, defaults: { ease: 'power4.out' } })
        .from('[data-char-line=\'1\']', { yPercent: 130, rotateZ: 8, duration: 1.2, stagger: 0.04 })
        .from('[data-char-line=\'2\']', { yPercent: 130, rotateZ: 8, duration: 1.2, stagger: 0.04 }, '-=0.9')
        .from('[data-hero-fade]', { opacity: 0, y: 20, duration: 0.8, stagger: 0.1 }, '-=0.6')
        .from('[data-nav]', { opacity: 0, y: -10, duration: 0.6 }, '-=0.8')

      gsap.to('[data-hero-content]', {
        opacity: 0,
        scale: 0.97,
        y: -50,
        ease: 'none',
        scrollTrigger: { trigger: hero.value, start: 'top top', end: 'bottom top', scrub: 1 },
      })
    }, container.value ?? undefined)

    if (play.value) timeline?.play()
  })

  watch(play, (val) => {
    if (val) timeline?.play()
  })

  onBeforeUnmount(() => {
    ctx?.revert()
    timeline = null
  })
}
