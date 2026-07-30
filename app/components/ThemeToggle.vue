<script setup lang="ts">
const colorMode = useColorMode()
const dark = computed(() => colorMode.value === 'dark')

function toggle() {
  document.documentElement.classList.add('theme-transitioning')
  colorMode.preference = dark.value ? 'light' : 'dark'
  setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 700)
}
</script>

<template>
  <ClientOnly>
    <button
      data-hover
      class="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
      :aria-label="dark ? 'Switch to light mode' : 'Switch to dark mode'"
      @click="toggle"
    >
      {{ dark ? 'Light' : 'Dark' }}
    </button>
    <template #fallback>
      <span class="font-mono text-xs uppercase tracking-widest text-muted-foreground">·</span>
    </template>
  </ClientOnly>
</template>
