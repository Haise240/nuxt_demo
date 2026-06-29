<template>
  <div>
    <!-- Page Header -->
    <div class="bg-wine pt-40 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-grain opacity-15 pointer-events-none" />
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <p class="section-label !text-saffron mb-6">Наша кухня</p>
        <h1 class="font-display text-6xl lg:text-8xl font-medium text-cream-50 leading-none">Меню</h1>
        <p class="font-sans text-base font-light text-cream-200/80 mt-6 max-w-lg leading-relaxed">
          Пироги печём на заказ — дайте нам 15–20 минут. Всё остальное готовится из свежих продуктов каждый день.
        </p>
      </div>
    </div>

    <!-- Decorative line -->
    <div class="h-px bg-gradient-to-r from-saffron via-saffron/30 to-transparent" />

    <!-- Menu -->
    <SectionContainer size="lg">
      <!-- Legend -->
      <div class="flex items-center gap-2 mb-14 font-sans text-xs text-cocoa/50">
        <span class="w-2 h-2 rounded-full bg-olive inline-block" />
        — постные и вегетарианские блюда
      </div>

      <div class="space-y-20">
        <div v-for="cat in menu" :key="cat.id" :id="cat.id">
          <div class="mb-6 max-w-2xl">
            <h2 class="font-display text-4xl text-clay mb-2">{{ cat.title }}</h2>
            <p class="font-sans text-sm font-light text-cocoa/55">{{ cat.subtitle }}</p>
          </div>
          <div class="divide-y divide-cream-200 border-t border-cream-200">
            <MenuItem v-for="item in cat.items" :key="item.name" :item="item" />
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- Reservation CTA -->
    <SectionContainer size="lg" bg="cream">
      <div class="text-center max-w-xl mx-auto">
        <p class="section-label">Хотите попробовать всё?</p>
        <h2 class="font-display text-4xl lg:text-5xl text-cocoa mb-6">Собирайтесь компанией</h2>
        <p class="font-sans text-sm font-light text-cocoa/70 leading-relaxed mb-10">
          Закажите ассорти пирогов и горячее на стол — мы накроем к вашему приходу. Бронируйте заранее, особенно на выходные.
        </p>
        <NuxtLink to="/contacts" class="btn-primary">Забронировать столик</NuxtLink>
      </div>
    </SectionContainer>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Меню — Фарн · осетинская кухня' })

const { getMenu } = useMenu()
const menu = getMenu()
</script>
