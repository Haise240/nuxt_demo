<template>
  <div>
    <!-- Page Header -->
    <div class="bg-night pt-40 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-grain opacity-15 pointer-events-none" />
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <p class="section-label !text-amber mb-6">Наши маршруты</p>
        <h1 class="font-display text-5xl lg:text-7xl font-bold text-white leading-none">Все туры</h1>
        <p class="font-sans text-base font-light text-sand-300/80 mt-6 max-w-lg leading-relaxed">
          {{ allTours.length }} авторских маршрута по Северной Осетии — от лёгкой однодневной вылазки до серьёзной трёхдневной экспедиции.
        </p>
      </div>
    </div>

    <!-- Decorative line -->
    <div class="h-px bg-gradient-to-r from-amber via-amber/30 to-transparent" />

    <!-- Tours Grid -->
    <SectionContainer size="xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <TourCard v-for="tour in allTours" :key="tour.id" :tour="tour" />
      </div>
    </SectionContainer>

    <!-- Custom tour nudge -->
    <SectionContainer size="lg" bg="sand">
      <div class="text-center max-w-xl mx-auto">
        <p class="section-label">Не нашли подходящий?</p>
        <h2 class="font-display text-4xl lg:text-5xl font-bold text-night mb-6">Соберём индивидуальный тур</h2>
        <p class="font-sans text-sm font-light text-night/70 leading-relaxed mb-10">
          Расскажите, сколько у вас дней и что хочется увидеть — мы составим маршрут под вашу группу, бюджет и уровень подготовки.
        </p>
        <NuxtLink to="/contacts" class="btn-primary">Обсудить маршрут</NuxtLink>
      </div>
    </SectionContainer>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Все туры — Дикий Кавказ' })

const { getAllTours } = useTours()
const allTours = getAllTours()
</script>
