<template>
  <div>
    <!-- Hero -->
    <div class="relative bg-forest pt-40 pb-0 overflow-hidden">
      <div class="absolute inset-0 bg-grain opacity-15 pointer-events-none" />
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <p class="section-label !text-gold mb-6">Наша история</p>
        <h1 class="font-cormorant text-6xl lg:text-8xl font-light text-stone-50 leading-none max-w-2xl">
          Горы как<br />
          <em class="text-gold not-italic">образ жизни</em>
        </h1>
      </div>
      <!-- Image below title -->
      <div class="mt-16 relative h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
          alt="Горы Северной Осетии"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
      </div>
    </div>

    <!-- Story Section -->
    <SectionContainer size="xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div class="lg:col-span-4">
          <p class="section-label">С чего всё началось</p>
          <h2 class="font-cormorant text-4xl lg:text-5xl font-light text-forest leading-tight">
            Мы влюбились в эти горы однажды
          </h2>
        </div>
        <div class="lg:col-span-7 lg:col-start-6">
          <div class="space-y-6 font-jost text-sm font-light text-forest/70 leading-relaxed">
            <p>
              Это началось с одной поездки в Кармадонское ущелье. Тогда мы поняли: эти места должны быть доступны для тех, кто ценит настоящую красоту без суеты туристических комплексов. Мы хотели создать нечто другое.
            </p>
            <p>
              Несколько лет мы искали подходящие места — не просто красивые, но и уединённые, наполненные особой энергией. Каждый домик в нашей коллекции — результат долгого поиска и тщательной работы. Мы сотрудничаем только с местными мастерами и используем натуральные материалы.
            </p>
            <p>
              Сегодня Аланские домики — это четыре объекта, каждый из которых живёт своей жизнью. Кто-то приезжает в «Орлиное гнездо» ради рассвета над облаками, кто-то — в «Лесную заимку» с детьми, чтобы впервые показать им настоящую дикую природу.
            </p>
            <p>
              Горы учат нас замедляться. Мы рады разделить этот урок с вами.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- Values -->
    <SectionContainer size="xl" bg="forest">
      <div class="text-center mb-16">
        <p class="section-label !text-gold">Наши принципы</p>
        <h2 class="font-cormorant text-5xl lg:text-6xl font-light text-stone-50 leading-tight">
          Что для нас важно
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="value in values"
          :key="value.title"
          class="p-8 border border-stone-200/10 hover:border-gold/40 transition-all duration-500"
        >
          <div class="font-cormorant text-6xl text-gold/20 mb-6 leading-none">
            {{ value.icon }}
          </div>
          <h3 class="font-cormorant text-2xl text-stone-100 mb-4">
            {{ value.title }}
          </h3>
          <p class="font-jost text-sm font-light text-stone-400 leading-relaxed">
            {{ value.text }}
          </p>
        </div>
      </div>
    </SectionContainer>

    <!-- Photo Grid -->
    <SectionContainer size="xl">
      <p class="section-label text-center mb-4">Наши места</p>
      <h2 class="font-cormorant text-5xl lg:text-6xl font-light text-forest text-center mb-16">
        Северная Осетия<br />крупным планом
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
        <div
          v-for="(img, i) in galleryImages"
          :key="i"
          :class="[
            'overflow-hidden group',
            i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square',
          ]"
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
    <SectionContainer size="lg" bg="stone">
      <div class="text-center max-w-lg mx-auto">
        <p class="section-label">Готовы познакомиться?</p>
        <h2 class="font-cormorant text-4xl lg:text-5xl text-forest mb-6 leading-tight">
          Приедьте и почувствуйте сами
        </h2>
        <p class="font-jost text-sm font-light text-forest/70 leading-relaxed mb-10">
          Никакие слова не передадут того, что вы ощутите, когда утром откроете дверь и увидите эти горы.
        </p>
        <NuxtLink to="/cabins" class="btn-primary">
          Выбрать домик
        </NuxtLink>
      </div>
    </SectionContainer>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'О нас — Аланские горные домики' })

const values = [
  {
    icon: '◈',
    title: 'Природа без компромиссов',
    text: 'Мы не строим в охраняемых зонах, не вырубаем деревья и сохраняем природный ландшафт в первозданном виде.',
  },
  {
    icon: '◉',
    title: 'Локальное производство',
    text: 'Все домики построены местными мастерами из материалов Северной Осетии. Мы поддерживаем региональную экономику.',
  },
  {
    icon: '◎',
    title: 'Человеческий масштаб',
    text: 'Мы — небольшая команда из трёх человек. Без колл-центров, без роботов. Вы всегда говорите с живым человеком.',
  },
]

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80',
    alt: 'Горный пейзаж',
  },
  {
    src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80',
    alt: 'Горное озеро',
  },
  {
    src: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&q=80',
    alt: 'Лесной домик',
  },
  {
    src: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=600&q=80',
    alt: 'Осенний лес',
  },
  {
    src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80',
    alt: 'Заснеженные горы',
  },
]
</script>
