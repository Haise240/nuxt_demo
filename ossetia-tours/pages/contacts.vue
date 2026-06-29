<template>
  <div>
    <!-- Page Header -->
    <div class="bg-night pt-40 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-grain opacity-15 pointer-events-none" />
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <p class="section-label !text-amber mb-6">Связаться с нами</p>
        <h1 class="font-display text-5xl lg:text-7xl font-bold text-white leading-none">Контакты</h1>
        <p class="font-sans text-base font-light text-sand-300/80 mt-6 max-w-md leading-relaxed">
          Ответим на вопросы, подберём маршрут и дату. Обычно отвечаем в течение часа.
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <SectionContainer size="xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <!-- Left: Info -->
        <div class="lg:col-span-5">
          <h2 class="font-display text-3xl lg:text-4xl font-bold text-night mb-10">Как нас найти</h2>

          <div class="space-y-10">
            <!-- Phone -->
            <div class="flex gap-5 items-start group">
              <div class="w-10 h-10 border border-sand-200 group-hover:border-amber flex items-center justify-center transition-colors duration-300 shrink-0">
                <svg class="w-4 h-4 text-ice-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p class="font-sans text-xs tracking-widest uppercase text-ice-dark mb-1">Телефон / WhatsApp</p>
                <a href="tel:+79280000000" class="font-display text-2xl font-bold text-night hover:text-amber transition-colors duration-300">
                  +7 (928) 000-00-00
                </a>
                <p class="font-sans text-xs text-night/50 mt-1">Ежедневно с 9:00 до 21:00</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex gap-5 items-start group">
              <div class="w-10 h-10 border border-sand-200 group-hover:border-amber flex items-center justify-center transition-colors duration-300 shrink-0">
                <svg class="w-4 h-4 text-ice-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="font-sans text-xs tracking-widest uppercase text-ice-dark mb-1">Email</p>
                <a href="mailto:go@dikiy-kavkaz.ru" class="font-display text-2xl font-bold text-night hover:text-amber transition-colors duration-300">
                  go@dikiy-kavkaz.ru
                </a>
                <p class="font-sans text-xs text-night/50 mt-1">Ответим в течение часа</p>
              </div>
            </div>

            <!-- Location -->
            <div class="flex gap-5 items-start group">
              <div class="w-10 h-10 border border-sand-200 group-hover:border-amber flex items-center justify-center transition-colors duration-300 shrink-0">
                <svg class="w-4 h-4 text-ice-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="font-sans text-xs tracking-widest uppercase text-ice-dark mb-1">Где встречаемся</p>
                <p class="font-display text-2xl font-bold text-night leading-tight">Владикавказ</p>
                <p class="font-sans text-sm font-light text-night/60 mt-2 leading-relaxed max-w-xs">
                  Забираем из любой точки города или от вашего отеля. Точку и время согласуем после заявки.
                </p>
              </div>
            </div>

            <!-- Messengers -->
            <div class="pt-6 border-t border-sand-200">
              <p class="font-sans text-xs tracking-widest uppercase text-ice-dark mb-5">Мессенджеры</p>
              <div class="flex gap-3">
                <a
                  v-for="m in messengers"
                  :key="m.label"
                  :href="m.href"
                  class="flex items-center gap-2 px-4 py-2 border border-sand-200 hover:border-amber hover:text-amber-dark text-night transition-all duration-300"
                >
                  <span class="font-sans text-xs font-semibold">{{ m.label }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="lg:col-span-6 lg:col-start-7">
          <div class="bg-sand-100 p-10 lg:p-14">
            <div class="mb-8">
              <h2 class="font-display text-3xl font-bold text-night mb-2">Оставьте заявку</h2>
              <p class="font-sans text-sm font-light text-night/60">
                Расскажите, что хотите увидеть — подберём маршрут под вашу группу.
              </p>
            </div>
            <TourRequestForm />
          </div>
        </div>
      </div>
    </SectionContainer>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Контакты — Дикий Кавказ' })

const messengers = [
  { label: 'Telegram', href: '#' },
  { label: 'WhatsApp', href: '#' },
  { label: 'Instagram', href: '#' },
]
</script>
