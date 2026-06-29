<template>
  <div>
    <!-- Page Header -->
    <div class="bg-wine pt-40 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-grain opacity-15 pointer-events-none" />
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <p class="section-label !text-saffron mb-6">Бронь и контакты</p>
        <h1 class="font-display text-6xl lg:text-8xl font-medium text-cream-50 leading-none">Где нас найти</h1>
        <p class="font-sans text-base font-light text-cream-200/80 mt-6 max-w-md leading-relaxed">
          В центре Владикавказа. Бронируйте столик заранее — по выходным места разбирают быстро.
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <SectionContainer size="xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <!-- Left: Info -->
        <div class="lg:col-span-5">
          <h2 class="font-display text-3xl lg:text-4xl text-cocoa mb-10">Контакты</h2>

          <div class="space-y-10">
            <!-- Phone -->
            <div class="flex gap-5 items-start group">
              <div class="w-10 h-10 border border-cream-300 group-hover:border-clay flex items-center justify-center transition-colors duration-300 shrink-0">
                <svg class="w-4 h-4 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p class="font-sans text-xs tracking-widest uppercase text-clay mb-1">Телефон</p>
                <a href="tel:+78672000000" class="font-display text-2xl text-cocoa hover:text-clay transition-colors duration-300">
                  +7 (8672) 00-00-00
                </a>
                <p class="font-sans text-xs text-cocoa/50 mt-1">Звоните с 10:00 до 22:00</p>
              </div>
            </div>

            <!-- Address -->
            <div class="flex gap-5 items-start group">
              <div class="w-10 h-10 border border-cream-300 group-hover:border-clay flex items-center justify-center transition-colors duration-300 shrink-0">
                <svg class="w-4 h-4 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="font-sans text-xs tracking-widest uppercase text-clay mb-1">Адрес</p>
                <p class="font-display text-2xl text-cocoa leading-tight">Владикавказ, пр. Мира, 24</p>
                <p class="font-sans text-sm font-light text-cocoa/60 mt-2 leading-relaxed max-w-xs">
                  Исторический центр, рядом с площадью Штыба. Есть парковка во дворе.
                </p>
              </div>
            </div>

            <!-- Hours -->
            <div class="flex gap-5 items-start group">
              <div class="w-10 h-10 border border-cream-300 group-hover:border-clay flex items-center justify-center transition-colors duration-300 shrink-0">
                <svg class="w-4 h-4 text-clay" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="font-sans text-xs tracking-widest uppercase text-clay mb-1">Часы работы</p>
                <p class="font-display text-2xl text-cocoa leading-tight">Ежедневно 11:00 – 23:00</p>
                <p class="font-sans text-sm font-light text-cocoa/60 mt-2">Кухня принимает заказы до 22:30</p>
              </div>
            </div>

            <!-- Messengers -->
            <div class="pt-6 border-t border-cream-200">
              <p class="font-sans text-xs tracking-widest uppercase text-clay mb-5">Мессенджеры</p>
              <div class="flex gap-3">
                <a
                  v-for="m in messengers"
                  :key="m.label"
                  :href="m.href"
                  class="flex items-center gap-2 px-4 py-2 border border-cream-300 hover:border-clay hover:text-clay text-cocoa transition-all duration-300"
                >
                  <span class="font-sans text-xs font-semibold">{{ m.label }}</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Map placeholder -->
          <div class="mt-12 aspect-[16/10] bg-cream-100 border border-cream-200 relative overflow-hidden flex items-center justify-center">
            <div class="absolute inset-0 bg-grain opacity-20" />
            <div class="text-center relative z-10">
              <svg class="w-8 h-8 text-clay mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p class="font-sans text-xs tracking-widest uppercase text-cocoa/50">
                Здесь будет карта Яндекс / 2ГИС
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Reservation Form -->
        <div class="lg:col-span-6 lg:col-start-7">
          <div class="bg-cream-100 p-10 lg:p-14">
            <ReservationForm />
          </div>
        </div>
      </div>
    </SectionContainer>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Контакты и бронь — Фарн · осетинская кухня' })

const messengers = [
  { label: 'Telegram', href: '#' },
  { label: 'WhatsApp', href: '#' },
  { label: 'ВКонтакте', href: '#' },
]
</script>
