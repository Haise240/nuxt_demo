<template>
  <div v-if="cabin">
    <!-- Image Gallery -->
    <div class="grid grid-cols-12 gap-2 h-[70vh] min-h-[500px] pt-20">
      <!-- Main Image -->
      <div
        class="col-span-12 md:col-span-8 overflow-hidden cursor-pointer relative group"
        @click="openGallery(0)"
      >
        <img
          :src="cabin.gallery[0]"
          :alt="cabin.name"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="eager"
        />
        <div class="absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-colors duration-500" />
      </div>

      <!-- Side Images -->
      <div class="hidden md:flex md:col-span-4 flex-col gap-2">
        <div
          v-for="(img, i) in cabin.gallery.slice(1, 3)"
          :key="i"
          class="flex-1 overflow-hidden cursor-pointer relative group"
          @click="openGallery(i + 1)"
        >
          <img
            :src="img"
            :alt="`${cabin.name} — фото ${i + 2}`"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <!-- View All Photos button on last -->
          <div
            v-if="i === 1 && cabin.gallery.length > 3"
            class="absolute inset-0 bg-forest/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <span class="font-jost text-xs tracking-widest uppercase text-white border border-white/50 px-4 py-2">
              Все фото ({{ cabin.gallery.length }})
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 py-20 lg:py-28">
        <!-- Left: Details -->
        <div class="lg:col-span-7">
          <!-- Breadcrumb -->
          <nav class="flex items-center gap-2 mb-10">
            <NuxtLink to="/cabins" class="font-jost text-xs text-mist hover:text-gold transition-colors tracking-widest uppercase">
              Домики
            </NuxtLink>
            <span class="text-stone-300">·</span>
            <span class="font-jost text-xs text-forest/40 tracking-widest uppercase">
              {{ cabin.name }}
            </span>
          </nav>

          <!-- Badge & Name -->
          <div v-if="cabin.badge" class="inline-block bg-gold text-forest font-jost text-xs font-medium tracking-widest uppercase px-3 py-1.5 mb-6">
            {{ cabin.badge }}
          </div>
          <h1 class="font-cormorant text-5xl lg:text-7xl font-light text-forest leading-none mb-3">
            {{ cabin.name }}
          </h1>
          <p class="font-cormorant italic text-2xl text-mist mb-10">
            {{ cabin.tagline }}
          </p>

          <!-- Meta chips -->
          <div class="flex flex-wrap gap-4 mb-12">
            <div class="flex items-center gap-2 border border-stone-200 px-4 py-2">
              <svg class="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="font-jost text-xs text-forest/70">{{ cabin.guests }} гостя</span>
            </div>
            <div class="flex items-center gap-2 border border-stone-200 px-4 py-2">
              <svg class="w-4 h-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              <span class="font-jost text-xs text-forest/70">{{ cabin.area }} м²</span>
            </div>
          </div>

          <!-- Long Description -->
          <div class="mb-14">
            <h2 class="font-cormorant text-2xl text-forest mb-5">О домике</h2>
            <p class="font-jost text-sm font-light text-forest/70 leading-relaxed">
              {{ cabin.longDescription }}
            </p>
          </div>

          <!-- Features / Amenities -->
          <div>
            <h2 class="font-cormorant text-2xl text-forest mb-7">Удобства</h2>
            <div class="grid grid-cols-2 gap-3">
              <div
                v-for="feature in cabin.features"
                :key="feature"
                class="flex items-center gap-3 py-3 border-b border-stone-100"
              >
                <div class="w-1 h-1 bg-gold rounded-full shrink-0" />
                <span class="font-jost text-sm font-light text-forest/80">{{ feature }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Booking Form Sidebar -->
        <div class="lg:col-span-4 lg:col-start-9">
          <div class="sticky top-28">
            <div class="border border-stone-200 p-8 lg:p-10 bg-white shadow-sm">
              <!-- Price -->
              <div class="flex items-baseline gap-2 mb-2">
                <span class="font-cormorant text-5xl text-forest font-light">
                  {{ formatPrice(cabin.price) }} ₽
                </span>
              </div>
              <p class="font-jost text-xs text-mist tracking-widest uppercase mb-8">
                за ночь · не включая питание
              </p>

              <div class="w-full h-px bg-stone-100 mb-8" />

              <BookingForm :cabin-name="cabin.name" />
            </div>

            <!-- Trust signals -->
            <div class="mt-4 px-2 flex gap-6">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-mist shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span class="font-jost text-xs text-mist">Безопасная оплата</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-mist shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span class="font-jost text-xs text-mist">Ответ за 1 час</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="galleryOpen"
          class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          @click.self="galleryOpen = false"
        >
          <button
            class="absolute top-6 right-6 text-white/60 hover:text-white transition-colors font-jost text-xs tracking-widest uppercase"
            @click="galleryOpen = false"
          >
            Закрыть ✕
          </button>
          <button
            class="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-colors"
            @click="prevImage"
          >
            ‹
          </button>
          <img
            :src="cabin.gallery[activeImage]"
            :alt="cabin.name"
            class="max-w-[90vw] max-h-[85vh] object-contain"
          />
          <button
            class="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:border-gold hover:text-gold transition-colors"
            @click="nextImage"
          >
            ›
          </button>
          <div class="absolute bottom-6 font-jost text-xs text-white/40">
            {{ activeImage + 1 }} / {{ cabin.gallery.length }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>

  <!-- 404 state -->
  <div v-else class="pt-40 pb-32 text-center">
    <p class="section-label">Ошибка</p>
    <h1 class="font-cormorant text-6xl text-forest mb-6">Домик не найден</h1>
    <NuxtLink to="/cabins" class="btn-primary">Все домики</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { getCabinBySlug } = useCabins()

const cabin = getCabinBySlug(route.params.slug as string)

useHead({
  title: cabin
    ? `${cabin.name} — Аланские горные домики`
    : 'Домик не найден',
})

// Gallery lightbox
const galleryOpen = ref(false)
const activeImage = ref(0)

function openGallery(index: number) {
  activeImage.value = index
  galleryOpen.value = true
}

function nextImage() {
  if (!cabin) return
  activeImage.value = (activeImage.value + 1) % cabin.gallery.length
}

function prevImage() {
  if (!cabin) return
  activeImage.value =
    (activeImage.value - 1 + cabin.gallery.length) % cabin.gallery.length
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU').format(price)
}

// Keyboard navigation for gallery
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
