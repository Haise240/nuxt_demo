<template>
  <footer class="bg-wine text-cream-200">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
        <!-- Brand -->
        <div class="md:col-span-5">
          <NuxtLink to="/" class="inline-block mb-6 group">
            <div class="font-display text-3xl font-semibold text-cream-50 tracking-wide group-hover:text-saffron transition-colors duration-300">
              Горный очаг
            </div>
            <div class="font-sans text-xs tracking-ultra uppercase text-saffron font-medium">
              осетинская кухня
            </div>
          </NuxtLink>
          <p class="font-sans text-sm font-light leading-relaxed text-cream-300/80 max-w-xs mt-4">
            Дом осетинской кухни во Владикавказе. Пироги из печи, мясо на углях и тёплое горское гостеприимство.
          </p>
          <div class="flex gap-4 mt-8">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-10 h-10 border border-cream-200/20 flex items-center justify-center text-cream-300 hover:border-saffron hover:text-saffron transition-all duration-300"
            >
              <span class="text-xs font-sans">{{ social.short }}</span>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div class="md:col-span-3 md:col-start-7">
          <h4 class="font-sans text-xs tracking-ultra uppercase text-cream-400/70 mb-6">Меню сайта</h4>
          <nav class="flex flex-col gap-3">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="font-sans text-sm font-light text-cream-300/80 hover:text-saffron transition-colors duration-300"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Contact -->
        <div class="md:col-span-3">
          <h4 class="font-sans text-xs tracking-ultra uppercase text-cream-400/70 mb-6">Контакты</h4>
          <div class="flex flex-col gap-3">
            <a href="tel:+78672000000" class="font-sans text-sm font-light text-cream-300/80 hover:text-saffron transition-colors duration-300">
              +7 (8672) 00-00-00
            </a>
            <a href="mailto:zakaz@gorny-ochag.example" class="font-sans text-sm font-light text-cream-300/80 hover:text-saffron transition-colors duration-300">
              zakaz@gorny-ochag.example
            </a>
            <p class="font-sans text-sm font-light text-cream-400/70 leading-relaxed mt-1">
              Владикавказ, исторический центр
            </p>
            <p class="font-sans text-sm font-light text-cream-400/70 leading-relaxed">
              Ежедневно 11:00 – 23:00
            </p>
          </div>
        </div>
      </div>

      <div class="border-t border-cream-200/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p class="font-sans text-xs text-cream-400/60">
          © {{ new Date().getFullYear() }} Горный очаг · Осетинская кухня. Демонстрационный сайт, названия и контакты вымышленные.
        </p>
        <p class="font-sans text-xs text-cream-400/60">Владикавказ · Северная Осетия</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/menu', label: 'Меню' },
  { to: '/about', label: 'О нас' },
  { to: '/contacts', label: 'Контакты' },
]

const socials = [
  { label: 'Telegram', short: 'TG', href: '#' },
  { label: 'ВКонтакте', short: 'VK', href: '#' },
  { label: 'WhatsApp', short: 'WA', href: '#' },
]
</script>
