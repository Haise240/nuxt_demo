<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
      scrolled ? 'bg-night/95 backdrop-blur-md shadow-lg shadow-black/30 py-4' : 'bg-transparent py-6',
    ]"
  >
    <div class="max-w-7xl mx-auto px-5 lg:px-12 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex flex-col leading-none group" aria-label="На главную">
        <span class="font-display text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-amber transition-colors duration-300">
          Дикий Кавказ
        </span>
        <span class="font-sans text-[10px] md:text-xs tracking-ultra uppercase text-amber font-medium mt-0.5">
          джип-туры по Осетии
        </span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-10">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="font-sans text-xs tracking-widest uppercase text-sand-200 hover:text-amber transition-colors duration-300 relative group"
        >
          {{ link.label }}
          <span class="absolute -bottom-1 left-0 w-0 h-px bg-amber transition-all duration-300 group-hover:w-full" />
        </NuxtLink>
      </nav>

      <!-- Desktop CTA -->
      <NuxtLink to="/tours" class="hidden md:inline-block btn-primary text-xs py-3 px-7">
        Выбрать тур
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)

const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/tours', label: 'Туры' },
  { to: '/about', label: 'О нас' },
  { to: '/contacts', label: 'Контакты' },
]

onMounted(() => {
  const handleScroll = () => { scrolled.value = window.scrollY > 60 }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>
