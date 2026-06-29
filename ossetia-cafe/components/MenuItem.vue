<template>
  <div class="flex gap-5 py-6 group">
    <!-- Optional image -->
    <div
      v-if="item.image"
      class="hidden sm:block w-24 h-24 shrink-0 overflow-hidden rounded-sm"
    >
      <img
        :src="item.image"
        :alt="item.name"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <div class="flex-1 min-w-0">
      <!-- Name + price leader -->
      <div class="flex items-baseline gap-3">
        <h3 class="font-display text-xl text-cocoa shrink-0 flex items-center gap-2">
          {{ item.name }}
          <span
            v-if="item.veg"
            class="w-1.5 h-1.5 rounded-full bg-olive inline-block"
            title="Постное / вегетарианское"
          />
        </h3>
        <span class="flex-1 border-b border-dotted border-cream-300 translate-y-[-3px]" />
        <span class="font-sans font-semibold text-clay shrink-0">{{ item.price }} ₽</span>
      </div>

      <!-- Badge -->
      <span
        v-if="item.badge"
        class="inline-block mt-1 mb-1 font-sans text-[10px] font-semibold tracking-widest uppercase text-saffron-dark"
      >
        {{ item.badge }}
      </span>

      <!-- Description -->
      <p class="font-sans text-sm font-light text-cocoa/60 leading-relaxed mt-1">
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MenuItem } from '~/composables/useMenu'

defineProps<{ item: MenuItem }>()
</script>
