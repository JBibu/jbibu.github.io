<script setup lang="ts">
const emit = defineEmits<{ complete: [] }>()

const overlay = useTemplateRef<HTMLDivElement>('overlay')
const text = useTemplateRef<HTMLSpanElement>('text')

let ctx: gsap.Context | null = null
let prevOverflow = ''

onMounted(() => {
  prevOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'

  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      onComplete: () => emit('complete'),
      defaults: { ease: 'power2.out' },
    })

    tl.fromTo(
      text.value,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.6 },
    )
      .to(text.value, { duration: 0.4 })
      .to(text.value, {
        scale: 1.5,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.in',
      })
      .to(
        overlay.value,
        {
          yPercent: -100,
          duration: 0.7,
          ease: 'power4.inOut',
        },
        '-=0.2',
      )
  })
})

onBeforeUnmount(() => {
  document.body.style.overflow = prevOverflow
  ctx?.revert()
})
</script>

<template>
  <div
    ref="overlay"
    class="fixed inset-0 z-[9998] flex items-center justify-center bg-background"
  >
    <span
      ref="text"
      class="font-serif text-[clamp(4rem,15vw,10rem)] leading-none tracking-tight opacity-0"
    >
      J.
    </span>
  </div>
</template>
