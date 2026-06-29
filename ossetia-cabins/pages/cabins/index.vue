<template>
  <div>
    <!-- Page Hero -->
    <div class="bg-forest pt-40 pb-20 relative overflow-hidden">
      <!-- Subtle background pattern -->
      <div class="absolute inset-0 bg-grain opacity-20 pointer-events-none" />
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <p class="section-label !text-gold mb-6">Наши объекты</p>
        <h1 class="font-cormorant text-6xl lg:text-8xl font-light text-stone-50 leading-none">
          Все домики
        </h1>
        <p class="font-jost text-base font-light text-stone-400 mt-6 max-w-lg leading-relaxed">
          {{ allCabins.length }} уединённых объекта в горах Северной Осетии. Каждый — отдельная история.
        </p>
      </div>
    </div>

    <!-- Decorative line -->
    <div class="h-px bg-gradient-to-r from-gold via-gold/30 to-transparent" />

    <!-- Cabins Grid -->
    <SectionContainer size="xl">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8 lg:gap-12">
        <CabinCard
          v-for="cabin in allCabins"
          :key="cabin.id"
          :cabin="cabin"
        />
      </div>
    </SectionContainer>

    <!-- Contact Nudge -->
    <SectionContainer size="lg" bg="stone">
      <div class="text-center max-w-xl mx-auto">
        <p class="section-label">Не можете выбрать?</p>
        <h2 class="font-cormorant text-4xl lg:text-5xl text-forest mb-6">
          Мы поможем
        </h2>
        <p class="font-jost text-sm font-light text-forest/70 leading-relaxed mb-10">
          Напишите нам, и мы подберём домик под ваш запрос: количество гостей, даты, пожелания.
        </p>
        <NuxtLink to="/contacts" class="btn-primary">
          Написать нам
        </NuxtLink>
      </div>
    </SectionContainer>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Все домики — Аланские горные домики' })

const { getAllCabins } = useCabins()
const allCabins = getAllCabins()
</script>
