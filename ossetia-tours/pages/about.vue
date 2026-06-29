<template>
  <div>
    <!-- Hero -->
    <div class="relative bg-night pt-40 pb-0 overflow-hidden">
      <div class="absolute inset-0 bg-grain opacity-15 pointer-events-none" />
      <div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <p class="section-label !text-amber mb-6">О команде</p>
        <h1 class="font-display text-5xl lg:text-7xl font-bold text-white leading-none max-w-2xl">
          Горы — это<br />
          <span class="text-amber">наш дом</span>
        </h1>
      </div>
      <div class="mt-16 relative h-[50vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Горы Северной Осетии"
          class="w-full h-full object-cover"
          loading="eager"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-night/60 to-transparent" />
      </div>
    </div>

    <!-- Story -->
    <SectionContainer size="xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div class="lg:col-span-4">
          <p class="section-label">С чего всё началось</p>
          <h2 class="font-display text-4xl lg:text-5xl font-bold text-night leading-tight">
            Мы выросли в этих ущельях
          </h2>
        </div>
        <div class="lg:col-span-7 lg:col-start-6">
          <div class="space-y-6 font-sans text-sm font-light text-night/70 leading-relaxed">
            <p>
              «Дикий Кавказ» начался не с бизнес-плана, а с привычки возить друзей в свои любимые места. Мы — местные ребята, для которых Цей, Дигория и Кармадон — это не точки на карте, а места, куда нас в детстве возили родители.
            </p>
            <p>
              Когда друзей стало слишком много, мы купили первый внедорожник, прошли обучение на гидов, оформили страховки и разрешения. Так хобби стало делом, которым мы занимаемся уже семь лет.
            </p>
            <p>
              Мы принципиально возим маленькими группами. Большой автобус — это про «галочки» и толпу на смотровой. Мы про другое: остановиться там, где красиво, попить чай у реки и услышать тишину, которой нет в городе.
            </p>
            <p>
              Безопасность для нас не формальность. Машины проходят техобслуживание перед каждым выездом, у гидов есть аптечки и связь, а маршруты мы корректируем по погоде. В горах это решает всё.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- Values -->
    <SectionContainer size="xl" bg="night">
      <div class="text-center mb-16">
        <p class="section-label !text-amber">Наши принципы</p>
        <h2 class="font-display text-4xl lg:text-6xl font-bold text-white leading-tight">Почему едут с нами</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="value in values"
          :key="value.title"
          class="p-8 border border-sand-200/10 hover:border-amber/40 transition-all duration-500"
        >
          <div class="font-display text-5xl font-bold text-amber/30 mb-6 leading-none">{{ value.num }}</div>
          <h3 class="font-display text-2xl font-bold text-white mb-4">{{ value.title }}</h3>
          <p class="font-sans text-sm font-light text-sand-300/75 leading-relaxed">{{ value.text }}</p>
        </div>
      </div>
    </SectionContainer>

    <!-- Photo Grid -->
    <SectionContainer size="xl">
      <p class="section-label text-center mb-4">Наши места</p>
      <h2 class="font-display text-4xl lg:text-6xl font-bold text-night text-center mb-16">
        Осетия<br />крупным планом
      </h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
        <div
          v-for="(img, i) in galleryImages"
          :key="i"
          :class="['overflow-hidden group', i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square']"
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
    <SectionContainer size="lg" bg="sand">
      <div class="text-center max-w-lg mx-auto">
        <p class="section-label">Поехали?</p>
        <h2 class="font-display text-4xl lg:text-5xl font-bold text-night mb-6 leading-tight">Горы ждут именно вас</h2>
        <p class="font-sans text-sm font-light text-night/70 leading-relaxed mb-10">
          Выберите маршрут или напишите нам — соберём тур под вашу группу и уровень. Первая консультация бесплатна.
        </p>
        <NuxtLink to="/tours" class="btn-primary">Выбрать тур</NuxtLink>
      </div>
    </SectionContainer>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'О команде — Дикий Кавказ' })

const values = [
  {
    num: '01',
    title: 'Малые группы',
    text: 'Возим до 6 человек. Вы видите горы, а не затылок соседа в автобусе. Маршрут подстраиваем под группу.',
  },
  {
    num: '02',
    title: 'Местные гиды',
    text: 'Наши водители-гиды родились здесь. Они знают дороги, погоду, людей и истории, которых нет в путеводителях.',
  },
  {
    num: '03',
    title: 'Безопасность',
    text: 'Техосмотр перед каждым выездом, аптечки, связь и страховка для всех. В горах мы не рискуем.',
  },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80', alt: 'Горный пейзаж' },
  { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80', alt: 'Горная долина' },
  { src: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=80', alt: 'Заснеженные вершины' },
  { src: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600&q=80', alt: 'Горная дорога' },
  { src: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&q=80', alt: 'Бездорожье' },
]
</script>
