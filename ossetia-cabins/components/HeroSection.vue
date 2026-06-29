<template>
  <section class="relative h-screen min-h-[600px] flex items-end overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover"
        loading="eager"
      />
      <!-- Gradient Overlays -->
      <div class="absolute inset-0 bg-gradient-to-t from-forest via-forest/40 to-transparent" />
      <div class="absolute inset-0 bg-gradient-to-r from-forest/60 via-transparent to-transparent" />
    </div>

    <!-- Grain texture -->
    <div class="absolute inset-0 bg-grain opacity-30 mix-blend-overlay pointer-events-none" />

    <!-- Scroll indicator -->
    <div class="absolute right-8 bottom-8 hidden lg:flex flex-col items-center gap-3">
      <span class="font-jost text-xs tracking-ultra uppercase text-stone-400 rotate-90 origin-center">Прокрутите</span>
      <div class="w-px h-16 bg-gradient-to-b from-stone-400 to-transparent animate-pulse" />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28 w-full">
      <div class="max-w-3xl">
        <!-- Label -->
        <div
          class="flex items-center gap-4 mb-8 opacity-0 animate-[fadeIn_0.8s_ease_0.2s_forwards]"
        >
          <div class="w-12 h-px bg-gold" />
          <span class="section-label !mb-0 !text-gold">
            {{ label || 'Северная Осетия · Алания' }}
          </span>
        </div>

        <!-- Main Title -->
        <h1
          class="font-cormorant text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light text-stone-50 leading-none tracking-tight mb-8 opacity-0 animate-[fadeUp_1s_cubic-bezier(0.19,1,0.22,1)_0.4s_forwards]"
        >
          {{ title }}
        </h1>

        <!-- Subtitle -->
        <p
          v-if="subtitle"
          class="font-jost font-light text-base lg:text-lg text-stone-300 max-w-lg leading-relaxed mb-12 opacity-0 animate-[fadeUp_1s_cubic-bezier(0.19,1,0.22,1)_0.6s_forwards]"
        >
          {{ subtitle }}
        </p>

        <!-- CTA -->
        <div
          v-if="cta"
          class="opacity-0 animate-[fadeUp_1s_cubic-bezier(0.19,1,0.22,1)_0.8s_forwards]"
        >
          <NuxtLink :to="cta.to" class="btn-primary">
            {{ cta.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  image: string
  label?: string
  cta?: {
    label: string
    to: string
  }
}>()
</script>
