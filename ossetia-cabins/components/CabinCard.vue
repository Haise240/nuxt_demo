<template>
  <article class="group relative flex flex-col bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-forest/10 hover:-translate-y-1">
    <!-- Image -->
    <div class="relative overflow-hidden aspect-[4/3]">
      <img
        :src="cabin.image"
        :alt="cabin.name"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <!-- Overlay on hover -->
      <div
        class="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      <!-- Badge -->
      <div
        v-if="cabin.badge"
        class="absolute top-5 left-5 bg-gold text-forest font-jost text-xs font-medium tracking-widest uppercase px-3 py-1.5"
      >
        {{ cabin.badge }}
      </div>
      <!-- Price overlay on hover -->
      <div
        class="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-forest to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      >
        <span class="font-cormorant text-2xl text-stone-100">
          от {{ formatPrice(cabin.price) }} ₽
        </span>
        <span class="font-jost text-xs text-stone-400 ml-1">/ ночь</span>
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-col flex-1 p-7">
      <!-- Meta -->
      <div class="flex items-center gap-4 mb-3">
        <span class="font-jost text-xs text-mist tracking-widest uppercase">
          {{ cabin.guests }} гостя · {{ cabin.area }} м²
        </span>
      </div>

      <!-- Name -->
      <h3 class="font-cormorant text-2xl lg:text-3xl font-light text-forest mb-2 leading-tight">
        {{ cabin.name }}
      </h3>

      <!-- Tagline -->
      <p class="font-cormorant italic text-mist text-base mb-4">
        {{ cabin.tagline }}
      </p>

      <!-- Description -->
      <p class="font-jost text-sm font-light text-forest/70 leading-relaxed flex-1 line-clamp-3">
        {{ cabin.description }}
      </p>

      <!-- Footer -->
      <div class="flex items-center justify-between mt-7 pt-6 border-t border-stone-200">
        <div>
          <span class="font-cormorant text-2xl text-forest">
            {{ formatPrice(cabin.price) }} ₽
          </span>
          <span class="font-jost text-xs text-mist ml-1">/ ночь</span>
        </div>
        <NuxtLink
          :to="`/cabins/${cabin.slug}`"
          class="font-jost text-xs tracking-widest uppercase text-forest border-b border-forest hover:text-gold hover:border-gold transition-all duration-300 pb-0.5"
        >
          Подробнее
        </NuxtLink>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Cabin } from '~/composables/useCabins'

defineProps<{
  cabin: Cabin
}>()

function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU').format(price)
}
</script>
