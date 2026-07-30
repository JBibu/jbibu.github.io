import type { ShallowRef } from 'vue'

type TriggerSource = Readonly<ShallowRef<HTMLElement | null>> | string

export function useScrollReveal(
  trigger: TriggerSource,
  target: gsap.DOMTarget,
  vars: gsap.TweenVars & { scrollStart?: string } = {},
) {
  let ctx: gsap.Context | null = null

  onMounted(() => {
    const { scrollStart = 'top 80%', ...rest } = vars
    ctx = gsap.context(() => {
      gsap.from(target, {
        ...rest,
        scrollTrigger: {
          trigger: typeof trigger === 'string' ? trigger : trigger.value,
          start: scrollStart,
        },
      })
    })
  })

  onBeforeUnmount(() => {
    ctx?.revert()
  })
}
