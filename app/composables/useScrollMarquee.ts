import type { ShallowRef } from 'vue'

export function useScrollMarquee(marquee: Readonly<ShallowRef<HTMLElement | null>>) {
  let ctx: gsap.Context | null = null
  let tickerFn: (() => void) | null = null

  onMounted(() => {
    const marqueeEl = marquee.value
    const marqueeInner = marqueeEl?.querySelector<HTMLElement>('[data-marquee-inner]')
    if (!marqueeEl || !marqueeInner) return

    ctx = gsap.context(() => {
      const contentWidth = marqueeInner.scrollWidth / 3
      let xPos = 0
      let speedMultiplier = 1
      const baseSpeed = 0.5

      ScrollTrigger.create({
        trigger: marqueeEl,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          speedMultiplier = 1 + Math.min(Math.abs(self.getVelocity()) / 300, 5)
        },
      })

      tickerFn = () => {
        speedMultiplier += (1 - speedMultiplier) * 0.05
        xPos -= baseSpeed * speedMultiplier
        if (xPos <= -contentWidth) xPos += contentWidth
        gsap.set(marqueeInner, { x: xPos })
      }
      gsap.ticker.add(tickerFn)
    })
  })

  onBeforeUnmount(() => {
    if (tickerFn) gsap.ticker.remove(tickerFn)
    ctx?.revert()
  })
}
