<template>
  <article class="group relative flex flex-col bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-night/15 hover:-translate-y-1">
    <!-- Image -->
    <div class="relative overflow-hidden aspect-[4/3]">
      <img
        :src="tour.image"
        :alt="tour.name"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-night/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <!-- Badge -->
      <div
        v-if="tour.badge"
        class="absolute top-5 left-5 bg-amber text-night font-sans text-xs font-semibold tracking-widest uppercase px-3 py-1.5"
      >
        {{ tour.badge }}
      </div>

      <!-- Duration chip -->
      <div class="absolute bottom-5 left-5 bg-night/80 backdrop-blur-sm text-sand-100 font-sans text-xs tracking-wide px-3 py-1.5">
        {{ tour.duration }}
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-col flex-1 p-7">
      <!-- Meta -->
      <div class="flex items-center gap-3 mb-3">
        <span class="font-sans text-xs tracking-widest uppercase" :class="difficultyClass">
          {{ tour.difficulty }}
        </span>
        <span class="w-1 h-1 rounded-full bg-sand-300" />
        <span class="font-sans text-xs text-night/50 tracking-wide">{{ tour.groupSize }}</span>
      </div>

      <h3 class="font-display text-2xl font-bold text-night mb-2 leading-tight">{{ tour.name }}</h3>
      <p class="font-sans italic text-ice-dark text-sm mb-4">{{ tour.tagline }}</p>

      <p class="font-sans text-sm font-light text-night/65 leading-relaxed flex-1 line-clamp-3">
        {{ tour.description }}
      </p>

      <!-- Footer -->
      <div class="flex items-center justify-between mt-7 pt-6 border-t border-sand-200">
        <div>
          <span class="font-display text-2xl font-bold text-night">от {{ formatPrice(tour.price) }} ₽</span>
          <span class="font-sans text-xs text-night/50 ml-1">/ чел.</span>
        </div>
        <NuxtLink
          :to="`/tours/${tour.slug}`"
          class="font-sans text-xs tracking-widest uppercase text-night border-b border-night hover:text-amber hover:border-amber transition-all duration-300 pb-0.5"
        >
          Подробнее
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Tour } from '~/composables/useTours'

const props = defineProps<{ tour: Tour }>()

function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU').format(price)
}

const difficultyClass = computed(() => {
  const map: Record<string, string> = {
    'Лёгкий': 'text-ice-dark',
    'Средний': 'text-amber-dark',
    'Сложный': 'text-red-600',
  }
  return map[props.tour.difficulty] ?? 'text-night/50'
})
</script>
