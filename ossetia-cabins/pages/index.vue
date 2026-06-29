<template>
  <div>
    <!-- Hero -->
    <HeroSection
      title="Горные домики в Осетии"
      subtitle="Уединённые домики среди Кавказских гор. Тишина, воздух и пространство — всё, что нужно, чтобы восстановиться."
      image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=85"
      label="Северная Осетия · Алания"
      :cta="{ label: 'Посмотреть домики', to: '/cabins' }"
    />

    <!-- Intro Section -->
    <SectionContainer size="xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div class="lg:col-span-5">
          <p class="section-label">О месте</p>
          <h2 class="section-title mb-8">
            Место, где<br />
            <em class="text-gold not-italic">горы говорят</em><br />
            за себя
          </h2>
          <p class="font-jost font-light text-forest/70 leading-relaxed mb-6">
            Аланские домики — это небольшая коллекция тщательно отобранных объектов размещения в горах Северной Осетии. Каждый домик — это отдельная история.
          </p>
          <p class="font-jost font-light text-forest/70 leading-relaxed mb-10">
            Здесь нет суеты, нет шума города, нет ненужных опций. Есть только горы, чистый воздух и время — ваше.
          </p>
          <NuxtLink to="/about" class="btn-ghost">
            Узнать больше
          </NuxtLink>
        </div>

        <div class="lg:col-span-6 lg:col-start-7">
          <div class="grid grid-cols-2 gap-4">
            <div class="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80"
                alt="Горный пейзаж"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div class="aspect-[3/4] overflow-hidden mt-10">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80"
                alt="Горное озеро"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- Stats Bar -->
    <div class="bg-forest py-14">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.value" class="flex flex-col items-center">
            <span class="font-cormorant text-5xl lg:text-6xl text-gold font-light">
              {{ stat.value }}
            </span>
            <span class="font-jost text-xs tracking-widest uppercase text-stone-400 mt-2">
              {{ stat.label }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Advantages -->
    <SectionContainer size="xl" bg="stone">
      <div class="text-center mb-16">
        <p class="section-label">Почему выбирают нас</p>
        <h2 class="section-title">
          Разница в деталях
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(adv, i) in advantages"
          :key="adv.title"
          class="group p-8 bg-white border border-stone-200 hover:border-gold transition-all duration-500 hover:shadow-xl hover:shadow-forest/5 hover:-translate-y-1"
        >
          <div class="font-cormorant text-5xl text-gold/30 font-light mb-6 group-hover:text-gold/60 transition-colors duration-300">
            {{ String(i + 1).padStart(2, '0') }}
          </div>
          <h3 class="font-cormorant text-xl text-forest mb-3">{{ adv.title }}</h3>
          <p class="font-jost text-sm font-light text-forest/60 leading-relaxed">
            {{ adv.text }}
          </p>
        </div>
      </div>
    </SectionContainer>

    <!-- Cabins Preview -->
    <SectionContainer size="xl">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <p class="section-label">Наши объекты</p>
          <h2 class="section-title">
            Выберите<br />свой домик
          </h2>
        </div>
        <NuxtLink to="/cabins" class="btn-outline shrink-0">
          Все домики
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <CabinCard
          v-for="cabin in featuredCabins"
          :key="cabin.id"
          :cabin="cabin"
        />
      </div>
    </SectionContainer>

    <!-- CTA Banner -->
    <div class="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&q=80"
        alt="Горы"
        class="w-full h-[500px] object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-forest/70 flex items-center justify-center">
        <div class="text-center px-6">
          <p class="section-label !text-gold mb-6">Готовы к отдыху?</p>
          <h2 class="font-cormorant text-5xl md:text-7xl font-light text-stone-50 mb-10 leading-tight">
            Забронируйте<br />свой домик
          </h2>
          <NuxtLink to="/cabins" class="btn-primary">
            Посмотреть домики
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Горные домики в Северной Осетии — Аланские домики' })

const { getFeaturedCabins } = useCabins()
const featuredCabins = getFeaturedCabins(3)

const stats = [
  { value: '4', label: 'Домика' },
  { value: '1800', label: 'Метров над морем' },
  { value: '5★', label: 'Средний рейтинг' },
  { value: '200+', label: 'Довольных гостей' },
]

const advantages = [
  {
    title: 'Абсолютное уединение',
    text: 'Каждый домик расположен отдельно, вдали от туристических маршрутов и городского шума.',
  },
  {
    title: 'Дикая природа',
    text: 'Горные реки, ледники, сосновые леса и чистейший воздух прямо за вашей дверью.',
  },
  {
    title: 'Никаких лишних услуг',
    text: 'Только то, что действительно нужно: тепло, уют, горячая вода и живописный вид.',
  },
  {
    title: 'Личный подход',
    text: 'Мы отвечаем лично и знаем каждый домик до последней детали. Всегда на связи.',
  },
]
</script>
