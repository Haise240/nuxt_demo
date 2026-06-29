<template>
  <footer class="bg-forest text-stone-300">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
        <!-- Brand -->
        <div class="md:col-span-5">
          <NuxtLink to="/" class="inline-block mb-6 group">
            <div class="font-cormorant text-3xl font-light text-stone-100 tracking-wider group-hover:text-gold transition-colors duration-300">
              Аланские
            </div>
            <div class="font-jost text-xs tracking-ultra uppercase text-gold font-light">
              горные дома
            </div>
          </NuxtLink>
          <p class="font-jost text-sm font-light leading-relaxed text-stone-400 max-w-xs mt-4">
            Boutique-размещение в горах Северной Осетии. Тишина, природа и неспешный ритм жизни.
          </p>
          <div class="flex gap-4 mt-8">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-10 h-10 border border-stone-200/20 flex items-center justify-center text-stone-400 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <span class="text-xs font-jost">{{ social.short }}</span>
            </a>
          </div>
        </div>

        <!-- Navigation -->
        <div class="md:col-span-3 md:col-start-7">
          <h4 class="font-jost text-xs tracking-ultra uppercase text-stone-500 mb-6">
            Навигация
          </h4>
          <nav class="flex flex-col gap-3">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="font-jost text-sm font-light text-stone-400 hover:text-gold transition-colors duration-300"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>

        <!-- Contact -->
        <div class="md:col-span-3">
          <h4 class="font-jost text-xs tracking-ultra uppercase text-stone-500 mb-6">
            Контакты
          </h4>
          <div class="flex flex-col gap-3">
            <a
              href="tel:+79280000000"
              class="font-jost text-sm font-light text-stone-400 hover:text-gold transition-colors duration-300"
            >
              +7 (928) 000-00-00
            </a>
            <a
              href="mailto:hello@alanskie.ru"
              class="font-jost text-sm font-light text-stone-400 hover:text-gold transition-colors duration-300"
            >
              hello@alanskie.ru
            </a>
            <p class="font-jost text-sm font-light text-stone-500 leading-relaxed mt-1">
              Республика Северная Осетия–Алания
            </p>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-stone-200/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p class="font-jost text-xs text-stone-600">
          © {{ new Date().getFullYear() }} Аланские горные дома. Все права защищены.
        </p>
        <p class="font-jost text-xs text-stone-600">
          Северная Осетия · Алания · Кавказ
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/cabins', label: 'Все дома' },
  { to: '/about', label: 'О нас' },
  { to: '/contacts', label: 'Контакты' },
]

const socials = [
  { label: 'Telegram', short: 'TG', href: '#' },
  { label: 'ВКонтакте', short: 'VK', href: '#' },
  { label: 'WhatsApp', short: 'WA', href: '#' },
]
</script>
