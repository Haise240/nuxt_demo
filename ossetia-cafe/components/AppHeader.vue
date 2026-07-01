<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
      scrolled ? 'bg-wine/95 backdrop-blur-md shadow-lg shadow-black/20 py-4' : 'bg-transparent py-6',
    ]"
  >
    <div class="max-w-7xl mx-auto px-5 lg:px-12 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex flex-col leading-none group" aria-label="На главную">
        <span class="font-display text-2xl md:text-3xl font-semibold text-cream-50 tracking-wide group-hover:text-saffron transition-colors duration-300">
          Горный очаг
        </span>
        <span class="font-sans text-[10px] md:text-xs tracking-ultra uppercase text-saffron font-medium">
          осетинская кухня
        </span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-10">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="font-sans text-xs tracking-widest uppercase text-cream-200 hover:text-saffron transition-colors duration-300 relative group"
        >
          {{ link.label }}
          <span class="absolute -bottom-1 left-0 w-0 h-px bg-saffron transition-all duration-300 group-hover:w-full" />
        </NuxtLink>
      </nav>

      <!-- Desktop CTA -->
      <NuxtLink to="/contacts" class="hidden md:inline-block btn-primary text-xs py-3 px-7">
        Забронировать столик
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
// Initialize from the actual scroll position, not just false — otherwise a
// page that mounts already scrolled (e.g. scroll offset carried over from
// client-side navigation) shows the transparent header until the next
// 'scroll' event fires.
const scrolled = ref(import.meta.client ? window.scrollY > 60 : false)

const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/menu', label: 'Меню' },
  { to: '/about', label: 'О нас' },
  { to: '/contacts', label: 'Контакты' },
]

onMounted(() => {
  const handleScroll = () => { scrolled.value = window.scrollY > 60 }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>
