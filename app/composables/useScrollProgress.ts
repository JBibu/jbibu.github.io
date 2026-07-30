import type { ShallowRef } from 'vue'

export function useScrollProgress(bar: Readonly<ShallowRef<HTMLElement | null>>) {
  if (import.meta.server) return

  const update = () => {
    const el = document.documentElement
    const scrollHeight = el.scrollHeight - el.clientHeight
    const progress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0
    if (bar.value) bar.value.style.transform = `scaleX(${progress})`
  }

  onMounted(() => {
    window.addEventListener('scroll', update, { passive: true })
    update()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', update)
  })
}
