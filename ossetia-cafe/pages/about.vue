<template>
  <div>
    <!-- Hero -->
    <div class="relative bg-wine pt-40 pb-0 overflow-hidden">
      <div class="absolute inset-0 bg-grain opacity-15 pointer-events-none" />
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <p class="section-label !text-saffron mb-6">Наша история</p>
        <h1 class="font-display text-6xl lg:text-8xl font-medium text-cream-50 leading-none max-w-2xl">
          Стол как<br />
          <em class="text-saffron not-italic">признание в любви</em>
        </h1>
      </div>
      <div class="mt-16 relative h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="Зал ресторана"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-wine/60 to-transparent" />
      </div>
    </div>

    <!-- Story -->
    <SectionContainer size="xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div class="lg:col-span-4">
          <p class="section-label">С чего всё началось</p>
          <h2 class="font-display text-4xl lg:text-5xl font-medium text-cocoa leading-tight">
            Всё началось с маминой печи
          </h2>
        </div>
        <div class="lg:col-span-7 lg:col-start-6">
          <div class="space-y-6 font-sans text-sm font-light text-cocoa/70 leading-relaxed">
            <p>
              «Фарн» вырос из домашней кухни. Мама пекла пироги по выходным, и весь подъезд знал об этом по запаху. Друзья просили «ещё разок», потом просили за деньги, потом — стол на компанию. Так и получился наш дом.
            </p>
            <p>
              Мы не стали гнаться за модой и «переосмыслять» осетинскую кухню. Наоборот — собрали старые рецепты, нашли поставщиков сыра и мяса в горных сёлах и поставили настоящую печь. Всё, что подаём, мы готовы съесть сами и накормить этим своих детей.
            </p>
            <p>
              Слово «фарн» в осетинской традиции — это благодать, мир и достаток, которые приходят в дом, где умеют принимать гостей. Мы стараемся, чтобы это слово было не на вывеске, а за столом.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- Values -->
    <SectionContainer size="xl" bg="wine">
      <div class="text-center mb-16">
        <p class="section-label !text-saffron">Наши принципы</p>
        <h2 class="font-display text-5xl lg:text-6xl font-medium text-cream-50 leading-tight">Что для нас важно</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="value in values"
          :key="value.title"
          class="p-8 border border-cream-200/10 hover:border-saffron/40 transition-all duration-500"
        >
          <div class="font-display text-6xl text-saffron/30 mb-6 leading-none">{{ value.icon }}</div>
          <h3 class="font-display text-2xl text-cream-50 mb-4">{{ value.title }}</h3>
          <p class="font-sans text-sm font-light text-cream-200/75 leading-relaxed">{{ value.text }}</p>
        </div>
      </div>
    </SectionContainer>

    <!-- Photo Grid -->
    <SectionContainer size="xl">
      <p class="section-label text-center mb-4">Наша кухня</p>
      <h2 class="font-display text-5xl lg:text-6xl font-medium text-cocoa text-center mb-16">
        Как у нас<br />пахнет домом
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
        <div
          v-for="(img, i) in galleryImages"
          :key="i"
          :class="['overflow-hidden group rounded-sm', i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square']"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </SectionContainer>

    <!-- CTA -->
    <SectionContainer size="lg" bg="cream">
      <div class="text-center max-w-lg mx-auto">
        <p class="section-label">Приходите голодными</p>
        <h2 class="font-display text-4xl lg:text-5xl text-cocoa mb-6 leading-tight">Лучше один раз попробовать</h2>
        <p class="font-sans text-sm font-light text-cocoa/70 leading-relaxed mb-10">
          Никакие слова не передадут вкус горячего пирога с молодым сыром. Забронируйте столик — и убедитесь сами.
        </p>
        <NuxtLink to="/contacts" class="btn-primary">Забронировать столик</NuxtLink>
      </div>
    </SectionContainer>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'О нас — Фарн · осетинская кухня' })

const values = [
  {
    icon: '◈',
    title: 'Никаких полуфабрикатов',
    text: 'Тесто, фарш, соусы — всё своими руками каждый день. Если чего-то нет свежего, мы это не подаём.',
  },
  {
    icon: '◉',
    title: 'Поддерживаем своих',
    text: 'Продукты берём у фермеров Северной Осетии. Ваш ужин кормит не агрохолдинг, а соседнее село.',
  },
  {
    icon: '◎',
    title: 'Гость в доме — радость',
    text: 'Мы небольшая семейная команда. Вас встретят по имени, а не по номеру столика.',
  },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80', alt: 'Накрытый стол' },
  { src: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600&q=80', alt: 'Свежий хлеб' },
  { src: 'https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=600&q=80', alt: 'Осетинский сыр' },
  { src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80', alt: 'Горячее блюдо' },
  { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80', alt: 'Мясо на углях' },
]
</script>
