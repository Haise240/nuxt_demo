<template>
  <div v-if="tour">
    <!-- Image Gallery -->
    <div class="grid grid-cols-12 gap-2 h-[70vh] min-h-[500px] pt-20">
      <div class="col-span-12 md:col-span-8 overflow-hidden cursor-pointer relative group" @click="openGallery(0)">
        <img
          :src="tour.gallery[0]"
          :alt="tour.name"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="eager"
        />
        <div class="absolute inset-0 bg-night/0 group-hover:bg-night/10 transition-colors duration-500" />
      </div>

      <div class="hidden md:flex md:col-span-4 flex-col gap-2">
        <div
          v-for="(img, i) in tour.gallery.slice(1, 3)"
          :key="i"
          class="flex-1 overflow-hidden cursor-pointer relative group"
          @click="openGallery(i + 1)"
        >
          <img
            :src="img"
            :alt="`${tour.name} — фото ${i + 2}`"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div
            v-if="i === 1 && tour.gallery.length > 3"
            class="absolute inset-0 bg-night/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span class="font-sans text-xs tracking-widest uppercase text-white border border-white/50 px-4 py-2">
              Все фото ({{ tour.gallery.length }})
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 py-20 lg:py-28">
        <!-- Left -->
        <div class="lg:col-span-7">
          <nav class="flex items-center gap-2 mb-10">
            <NuxtLink to="/tours" class="font-sans text-xs text-ice-dark hover:text-amber transition-colors tracking-widest uppercase">
              Туры
            </NuxtLink>
            <span class="text-sand-300">·</span>
            <span class="font-sans text-xs text-night/40 tracking-widest uppercase">{{ tour.name }}</span>
          </nav>

          <div v-if="tour.badge" class="inline-block bg-amber text-night font-sans text-xs font-semibold tracking-widest uppercase px-3 py-1.5 mb-6">
            {{ tour.badge }}
          </div>
          <h1 class="font-display text-4xl lg:text-6xl font-bold text-night leading-none mb-3">{{ tour.name }}</h1>
          <p class="font-sans italic text-xl text-ice-dark mb-10">{{ tour.tagline }}</p>

          <!-- Meta chips -->
          <div class="flex flex-wrap gap-3 mb-12">
            <div class="flex items-center gap-2 border border-sand-200 px-4 py-2">
              <span class="font-sans text-xs text-night/50 uppercase tracking-wide">Длительность</span>
              <span class="font-sans text-xs font-semibold text-night">{{ tour.duration }}</span>
            </div>
            <div class="flex items-center gap-2 border border-sand-200 px-4 py-2">
              <span class="font-sans text-xs text-night/50 uppercase tracking-wide">Сложность</span>
              <span class="font-sans text-xs font-semibold text-night">{{ tour.difficulty }}</span>
            </div>
            <div class="flex items-center gap-2 border border-sand-200 px-4 py-2">
              <span class="font-sans text-xs text-night/50 uppercase tracking-wide">Группа</span>
              <span class="font-sans text-xs font-semibold text-night">{{ tour.groupSize }}</span>
            </div>
            <div class="flex items-center gap-2 border border-sand-200 px-4 py-2">
              <span class="font-sans text-xs text-night/50 uppercase tracking-wide">Сезон</span>
              <span class="font-sans text-xs font-semibold text-night">{{ tour.season }}</span>
            </div>
          </div>

          <!-- Description -->
          <div class="mb-14">
            <h2 class="font-display text-2xl font-bold text-night mb-5">О маршруте</h2>
            <p class="font-sans text-sm font-light text-night/70 leading-relaxed">{{ tour.longDescription }}</p>
          </div>

          <!-- Highlights -->
          <div class="mb-14">
            <h2 class="font-display text-2xl font-bold text-night mb-7">Что увидим</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                v-for="h in tour.highlights"
                :key="h"
                class="flex items-center gap-3 py-3 border-b border-sand-100"
              >
                <div class="w-1.5 h-1.5 bg-amber rounded-full shrink-0" />
                <span class="font-sans text-sm font-light text-night/80">{{ h }}</span>
              </div>
            </div>
          </div>

          <!-- Includes -->
          <div>
            <h2 class="font-display text-2xl font-bold text-night mb-7">Что входит</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                v-for="inc in tour.includes"
                :key="inc"
                class="flex items-start gap-3 py-2"
              >
                <svg class="w-4 h-4 text-ice mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="font-sans text-sm font-light text-night/80">{{ inc }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Request Form -->
        <div class="lg:col-span-4 lg:col-start-9">
          <div class="sticky top-28">
            <div class="border border-sand-200 p-8 lg:p-10 bg-white shadow-sm">
              <div class="flex items-baseline gap-2 mb-1">
                <span class="font-display text-4xl font-bold text-night">от {{ formatPrice(tour.price) }} ₽</span>
              </div>
              <p class="font-sans text-xs text-ice-dark tracking-widest uppercase mb-8">за человека</p>

              <div class="w-full h-px bg-sand-100 mb-8" />

              <TourRequestForm :tour-name="tour.name" />
            </div>

            <div class="mt-4 px-2 flex gap-6">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-fog shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span class="font-sans text-xs text-fog">Страховка включена</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-fog shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="font-sans text-xs text-fog">Ответ за 1 час</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="galleryOpen" class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" @click.self="galleryOpen = false">
          <button
            class="absolute top-6 right-6 text-white/60 hover:text-white transition-colors font-sans text-xs tracking-widest uppercase"
            @click="galleryOpen = false"
          >
            Закрыть ✕
          </button>
          <button
            class="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:border-amber hover:text-amber transition-colors"
            @click="prevImage"
          >
            ‹
          </button>
          <img :src="tour.gallery[activeImage]" :alt="tour.name" class="max-w-[90vw] max-h-[85vh] object-contain" />
          <button
            class="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:border-amber hover:text-amber transition-colors"
            @click="nextImage"
          >
            ›
          </button>
          <div class="absolute bottom-6 font-sans text-xs text-white/40">
            {{ activeImage + 1 }} / {{ tour.gallery.length }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>

  <!-- 404 -->
  <div v-else class="pt-40 pb-32 text-center">
    <p class="section-label">Ошибка</p>
    <h1 class="font-display text-5xl font-bold text-night mb-6">Тур не найден</h1>
    <NuxtLink to="/tours" class="btn-primary">Все туры</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { getTourBySlug } = useTours()

const tour = getTourBySlug(route.params.slug as string)

useHead({
  title: tour ? `${tour.name} — Дикий Кавказ` : 'Тур не найден',
})

const galleryOpen = ref(false)
const activeImage = ref(0)

function openGallery(index: number) {
  activeImage.value = index
  galleryOpen.value = true
}

function nextImage() {
  if (!tour) return
  activeImage.value = (activeImage.value + 1) % tour.gallery.length
}

function prevImage() {
  if (!tour) return
  activeImage.value = (activeImage.value - 1 + tour.gallery.length) % tour.gallery.length
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU').format(price)
}

onMounted(() => {
  const handler = (e: KeyboardEvent) => {
    if (!galleryOpen.value) return
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
    if (e.key === 'Escape') galleryOpen.value = false
  }
  window.addEventListener('keydown', handler)
  onUnmounted(() => window.removeEventListener('keydown', handler))
})
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
