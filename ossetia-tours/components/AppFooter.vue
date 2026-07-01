<template>
  <footer class="bg-night text-sand-200">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
        <!-- Brand -->
        <div class="md:col-span-5">
          <NuxtLink to="/" class="inline-block mb-6 group">
            <div class="font-display text-2xl font-bold text-white tracking-tight group-hover:text-amber transition-colors duration-300">
              Дикий Кавказ
            </div>
            <div class="font-sans text-xs tracking-ultra uppercase text-amber font-medium mt-0.5">
              джип-туры по Осетии
            </div>
          </NuxtLink>
          <p class="font-sans text-sm font-light leading-relaxed text-sand-300/70 max-w-xs mt-4">
            Авторские джип-туры, треккинг и экспедиции по Северной Осетии. Малые группы, опытные гиды, настоящие горы.
          </p>
          <div class="flex gap-4 mt-8">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-10 h-10 border border-sand-200/20 flex items-center justify-center text-sand-300 hover:border-amber hover:text-amber transition-all duration-300"
            >
              <span class="text-xs font-sans">{{ social.short }}</span>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div class="md:col-span-3 md:col-start-7">
          <h4 class="font-sans text-xs tracking-ultra uppercase text-sand-400/60 mb-6">Навигация</h4>
          <nav class="flex flex-col gap-3">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="font-sans text-sm font-light text-sand-300/70 hover:text-amber transition-colors duration-300"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Contact -->
        <div class="md:col-span-3">
          <h4 class="font-sans text-xs tracking-ultra uppercase text-sand-400/60 mb-6">Контакты</h4>
          <div class="flex flex-col gap-3">
            <a href="tel:+79280000000" class="font-sans text-sm font-light text-sand-300/70 hover:text-amber transition-colors duration-300">
              +7 (928) 000-00-00
            </a>
            <a href="mailto:go@dikiy-kavkaz.example" class="font-sans text-sm font-light text-sand-300/70 hover:text-amber transition-colors duration-300">
              go@dikiy-kavkaz.example
            </a>
            <p class="font-sans text-sm font-light text-sand-400/60 leading-relaxed mt-1">
              Владикавказ, Северная Осетия
            </p>
          </div>
        </div>
      </div>

      <div class="border-t border-sand-200/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p class="font-sans text-xs text-sand-400/50">
          © {{ new Date().getFullYear() }} Дикий Кавказ. Демонстрационный сайт, названия и контакты вымышленные.
        </p>
        <p class="font-sans text-xs text-sand-400/50">Северная Осетия · Кавказ</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/tours', label: 'Все туры' },
  { to: '/about', label: 'О нас' },
  { to: '/contacts', label: 'Контакты' },
]

const socials = [
  { label: 'Telegram', short: 'TG', href: '#' },
  { label: 'Instagram', short: 'IG', href: '#' },
  { label: 'WhatsApp', short: 'WA', href: '#' },
]
</script>
