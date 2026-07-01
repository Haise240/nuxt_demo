<template>
  <div>
    <!-- Hero -->
    <HeroSection
      title="Горный очаг"
      subtitle="Дом осетинской кухни во Владикавказе. Пироги из печи, мясо на углях и застолье, к которому хочется возвращаться."
      image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85"
      label="Осетинская кухня · Владикавказ"
      :cta="{ label: 'Смотреть меню', to: '/menu' }"
      :secondary-cta="{ label: 'Забронировать столик', to: '/contacts' }"
    />

    <!-- Intro -->
    <SectionContainer size="xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div class="lg:col-span-5">
          <p class="section-label">О месте</p>
          <h2 class="section-title mb-8">
            Вкус, который<br />
            <em class="text-clay not-italic font-semibold">помнят руки</em><br />
            бабушки
          </h2>
          <p class="font-sans font-light text-cocoa/70 leading-relaxed mb-6">
            «Горный очаг» — это большая печь и общий стол, за которым собирается вся семья. Мы сохранили этот дух: настоящую осетинскую кухню без упрощений и компромиссов.
          </p>
          <p class="font-sans font-light text-cocoa/70 leading-relaxed mb-10">
            Пироги печём на заказ, тесто раскатываем вручную, мясо берём у местных хозяйств. Здесь не едят на бегу — здесь сидят долго и уходят сытыми.
          </p>
          <NuxtLink to="/about" class="btn-ghost">Наша история</NuxtLink>
        </div>

        <div class="lg:col-span-6 lg:col-start-7">
          <div class="grid grid-cols-2 gap-4">
            <div class="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
                alt="Свежий хлеб и пироги"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div class="aspect-[3/4] overflow-hidden mt-10 rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80"
                alt="Местные продукты"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- Three Pies Ritual -->
    <SectionContainer size="xl" bg="wine">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="order-2 lg:order-1 aspect-[4/3] overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1574484284002-952d92456975?w=1000&q=80"
            alt="Три осетинских пирога"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div class="order-1 lg:order-2">
          <p class="section-label !text-saffron">Æртæ чъиритæ · Три пирога</p>
          <h2 class="font-display text-4xl lg:text-5xl font-medium text-cream-50 leading-tight mb-8">
            Традиция, которой<br />тысяча лет
          </h2>
          <p class="font-sans font-light text-cream-200/80 leading-relaxed mb-6">
            На осетинском столе всегда три пирога. Они лежат друг на друге и символизируют Бога, Солнце и Землю — основу мироздания в понимании предков.
          </p>
          <p class="font-sans font-light text-cream-200/80 leading-relaxed">
            В дни траура пирогов два — Солнце уходит. Эта мелочь говорит о народе больше, чем любые слова. Мы храним её бережно.
          </p>
        </div>
      </div>
    </SectionContainer>

    <!-- Stats -->
    <div class="bg-cocoa py-14">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label" class="flex flex-col items-center">
            <span class="font-display text-5xl lg:text-6xl text-saffron font-medium">{{ stat.value }}</span>
            <span class="font-sans text-xs tracking-widest uppercase text-cream-300/70 mt-2">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Advantages -->
    <SectionContainer size="xl" bg="cream">
      <div class="text-center mb-16">
        <p class="section-label">Почему у нас</p>
        <h2 class="section-title">Честно и по-домашнему</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(adv, i) in advantages"
          :key="adv.title"
          class="group p-8 bg-white border border-cream-200 hover:border-clay transition-all duration-500 hover:shadow-xl hover:shadow-clay/5 hover:-translate-y-1"
        >
          <div class="font-display text-5xl text-clay/25 font-medium mb-6 group-hover:text-clay/50 transition-colors duration-300">
            {{ String(i + 1).padStart(2, '0') }}
          </div>
          <h3 class="font-display text-xl text-cocoa mb-3">{{ adv.title }}</h3>
          <p class="font-sans text-sm font-light text-cocoa/60 leading-relaxed">{{ adv.text }}</p>
        </div>
      </div>
    </SectionContainer>

    <!-- Menu Preview -->
    <SectionContainer size="xl">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <p class="section-label">Из нашего меню</p>
          <h2 class="section-title">Чем угощаем</h2>
        </div>
        <NuxtLink to="/menu" class="btn-outline shrink-0">Всё меню</NuxtLink>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="dish in featured"
          :key="dish.name"
          class="group bg-white border border-cream-200 overflow-hidden hover:shadow-xl hover:shadow-clay/5 transition-all duration-500 hover:-translate-y-1"
        >
          <div class="aspect-square overflow-hidden">
            <img
              :src="dish.image"
              :alt="dish.name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div class="p-5">
            <div class="flex items-baseline justify-between gap-2">
              <h3 class="font-display text-lg text-cocoa">{{ dish.name }}</h3>
              <span class="font-sans font-semibold text-clay shrink-0">{{ dish.price }} ₽</span>
            </div>
            <p class="font-sans text-xs font-light text-cocoa/55 leading-relaxed mt-2 line-clamp-2">
              {{ dish.description }}
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- CTA Banner -->
    <div class="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80"
        alt="Застолье"
        class="w-full h-[500px] object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-wine-dark/75 flex items-center justify-center">
        <div class="text-center px-6">
          <p class="section-label !text-saffron mb-6">Соберитесь у нас</p>
          <h2 class="font-display text-5xl md:text-7xl font-medium text-cream-50 mb-10 leading-tight">
            Забронируйте<br />столик
          </h2>
          <NuxtLink to="/contacts" class="btn-primary">Забронировать</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Горный очаг — осетинская кухня во Владикавказе' })

const { getFeatured } = useMenu()
const featured = getFeatured()

const stats = [
  { value: 'с 2014', label: 'Готовим для вас' },
  { value: '18', label: 'Видов пирогов' },
  { value: '4.9★', label: 'Рейтинг гостей' },
  { value: '60', label: 'Посадочных мест' },
]

const advantages = [
  {
    title: 'Печём на заказ',
    text: 'Пироги не лежат под лампой. Раскатываем тесто и ставим в печь, когда вы садитесь за стол.',
  },
  {
    title: 'Местные продукты',
    text: 'Сыр, мясо и зелень — от хозяйств Северной Осетии. Знаем каждого поставщика лично.',
  },
  {
    title: 'Живой огонь',
    text: 'Шашлык и мясо готовим на углях. Тот самый дымок, который не повторить на сковороде.',
  },
  {
    title: 'Горское гостеприимство',
    text: 'У нас не торопят. Хороший стол — это про неспешность, тосты и долгий разговор.',
  },
]
</script>
