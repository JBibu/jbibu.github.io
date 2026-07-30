import type { ShallowRef } from 'vue'

interface UseHorizontalGalleryOptions {
  container: Readonly<ShallowRef<HTMLElement | null>>
  gallery: Readonly<ShallowRef<HTMLElement | null>>
  track: Readonly<ShallowRef<HTMLElement | null>>
}

export function useHorizontalGallery({ container, gallery, track }: UseHorizontalGalleryOptions) {
  let ctx: gsap.Context | null = null

  onMounted(() => {
    const galleryEl = gallery.value
    const trackEl = track.value
    if (!galleryEl || !trackEl) return

    ctx = gsap.context(() => {
      const totalScroll = trackEl.scrollWidth - galleryEl.offsetWidth

      const scrollTween = gsap.to(trackEl, {
        x: -totalScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: galleryEl,
          start: 'top top',
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      gsap.from('[data-project-card]', {
        opacity: 0, y: 60, rotateZ: 2, duration: 0.8, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: galleryEl, start: 'top 80%' },
      })

      const parallax = (sel: string, axis: 'y' | 'x', from: number, to: number) => {
        gsap.utils.toArray<HTMLElement>(sel).forEach((el) => {
          gsap.fromTo(el, { [`${axis}Percent`]: from }, {
            [`${axis}Percent`]: to,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('[data-project-card]'),
              containerAnimation: scrollTween,
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          })
        })
      }
      parallax('[data-card-num]', 'y', -30, 30)
      parallax('[data-card-bg]', 'x', -5, 5)
    }, container.value ?? undefined)
  })

  onBeforeUnmount(() => {
    ctx?.revert()
  })
}
