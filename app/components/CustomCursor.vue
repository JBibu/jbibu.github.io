<script setup lang="ts">
const dot = useTemplateRef<HTMLDivElement>('dot')
const ring = useTemplateRef<HTMLDivElement>('ring')

const INTERACTIVE_SELECTOR = 'a, button, [data-hover]'

onMounted(() => {
  const dotEl = dot.value
  const ringEl = ring.value
  if (!dotEl || !ringEl) return

  let current: Element | null = null

  const moveCursor = (e: MouseEvent) => {
    gsap.set(dotEl, { x: e.clientX - 3, y: e.clientY - 3 })
    gsap.to(ringEl, {
      x: e.clientX - 14,
      y: e.clientY - 14,
      duration: 0.25,
      ease: 'power3.out',
    })
  }

  const grow = () => {
    gsap.to(ringEl, { scale: 1.8, opacity: 0.15, duration: 0.3 })
    gsap.to(dotEl, { scale: 0, duration: 0.2 })
  }

  const shrink = () => {
    gsap.to(ringEl, { scale: 1, opacity: 0.35, duration: 0.3 })
    gsap.to(dotEl, { scale: 1, duration: 0.2 })
  }

  const onOver = (e: MouseEvent) => {
    if (!(e.target instanceof Element)) return
    const interactive = e.target.closest(INTERACTIVE_SELECTOR)
    if (!interactive || interactive === current) return
    if (current === null) grow()
    current = interactive
  }

  const onOut = (e: MouseEvent) => {
    if (!current) return
    const related = e.relatedTarget instanceof Element ? e.relatedTarget : null
    if (related && current.contains(related)) return
    if (related?.closest(INTERACTIVE_SELECTOR)) return
    current = null
    shrink()
  }

  window.addEventListener('mousemove', moveCursor)
  document.addEventListener('mouseover', onOver)
  document.addEventListener('mouseout', onOut)

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', moveCursor)
    document.removeEventListener('mouseover', onOver)
    document.removeEventListener('mouseout', onOut)
  })
})
</script>

<template>
  <div ref="dot" class="cursor-dot" />
  <div ref="ring" class="cursor-ring" />
</template>
