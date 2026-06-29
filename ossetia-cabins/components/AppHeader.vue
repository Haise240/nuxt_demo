<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
      scrolled
        ? 'bg-forest/95 backdrop-blur-md shadow-lg shadow-black/20 py-4'
        : 'bg-transparent py-6',
    ]"
  >
    <div class="max-w-7xl mx-auto px-5 lg:px-12 flex items-center justify-between">

      <!-- Logo — visible on all screen sizes -->
      <NuxtLink to="/" class="flex flex-col leading-none group" aria-label="На главную">
        <span class="font-cormorant text-xl md:text-2xl font-light text-stone-100 tracking-wider group-hover:text-gold transition-colors duration-300">
          Аланские
        </span>
        <span class="font-jost text-[10px] md:text-xs tracking-ultra uppercase text-gold font-light">
          горные дома
        </span>
      </NuxtLink>

      <!-- Desktop nav — hidden on mobile, MobileNav handles those screens -->
      <nav class="hidden md:flex items-center gap-10">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="font-jost text-xs tracking-widest uppercase text-stone-300 hover:text-gold transition-colors duration-300 relative group"
        >
          {{ link.label }}
          <span class="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
        </NuxtLink>
      </nav>

      <!-- Desktop CTA — hidden on mobile -->
      <NuxtLink to="/cabins" class="hidden md:inline-block btn-primary text-xs py-3 px-7">
        Забронировать
      </NuxtLink>

    </div>
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)

const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/cabins', label: 'Дома' },
  { to: '/about', label: 'О нас' },
  { to: '/contacts', label: 'Контакты' },
]

onMounted(() => {
  const handleScroll = () => { scrolled.value = window.scrollY > 60 }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>