<template>
  <div>
    <!-- Hero -->
    <HeroSection
      title="Кавказ без асфальта"
      subtitle="Авторские джип-туры и экспедиции по горам Северной Осетии. Малые группы, подготовленные внедорожники, гиды, выросшие в этих ущельях."
      image="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1920&q=85"
      label="Джип-туры · треккинг · экспедиции"
      :cta="{ label: 'Выбрать тур', to: '/tours' }"
      :secondary-cta="{ label: 'Задать вопрос', to: '/contacts' }"
    />

    <!-- Intro -->
    <SectionContainer size="xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div class="lg:col-span-5">
          <p class="section-label">Кто мы</p>
          <h2 class="section-title mb-8">
            Показываем Осетию<br />
            <span class="text-amber-dark">изнутри</span>
          </h2>
          <p class="font-sans font-light text-night/70 leading-relaxed mb-6">
            «Дикий Кавказ» — это команда местных гидов-водителей, для которых горы Осетии не работа, а дом. Мы знаем дороги, которых нет на картах, и места, куда не доезжают туристические автобусы.
          </p>
          <p class="font-sans font-light text-night/70 leading-relaxed mb-10">
            Возим небольшими группами на подготовленных внедорожниках. Никакой гонки по галочкам — только то, ради чего стоит ехать в горы.
          </p>
          <NuxtLink to="/about" class="btn-ghost">О команде</NuxtLink>
        </div>

        <div class="lg:col-span-6 lg:col-start-7">
          <div class="grid grid-cols-2 gap-4">
            <div class="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80"
                alt="Горный пейзаж Осетии"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div class="aspect-[3/4] overflow-hidden mt-10">
              <img
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80"
                alt="Горная дорога"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>

    <!-- Stats -->
    <div class="bg-night py-14">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label" class="flex flex-col items-center">
            <span class="font-display text-5xl lg:text-6xl text-amber font-bold">{{ stat.value }}</span>
            <span class="font-sans text-xs tracking-widest uppercase text-sand-300/70 mt-2">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Featured tours -->
    <SectionContainer size="xl" bg="sand">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <p class="section-label">Популярные маршруты</p>
          <h2 class="section-title">Куда поедем</h2>
        </div>
        <NuxtLink to="/tours" class="btn-outline shrink-0">Все туры</NuxtLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <TourCard v-for="tour in featuredTours" :key="tour.id" :tour="tour" />
      </div>
    </SectionContainer>

    <!-- How it works -->
    <SectionContainer size="xl">
      <div class="text-center mb-16">
        <p class="section-label">Как это работает</p>
        <h2 class="section-title">Три шага до гор</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(step, i) in steps" :key="step.title" class="relative p-8 border border-sand-200 bg-white">
          <div class="font-display text-6xl font-bold text-amber/20 mb-5 leading-none">
            {{ String(i + 1).padStart(2, '0') }}
          </div>
          <h3 class="font-display text-xl font-bold text-night mb-3">{{ step.title }}</h3>
          <p class="font-sans text-sm font-light text-night/60 leading-relaxed">{{ step.text }}</p>
        </div>
      </div>
    </SectionContainer>

    <!-- CTA Banner -->
    <div class="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80"
        alt="Горы Осетии"
        class="w-full h-[500px] object-cover"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-night/75 flex items-center justify-center">
        <div class="text-center px-6">
          <p class="section-label !text-amber mb-6">Готовы в путь?</p>
          <h2 class="font-display text-5xl md:text-7xl font-bold text-white mb-10 leading-tight">
            Соберём тур<br />под вас
          </h2>
          <NuxtLink to="/contacts" class="btn-primary">Оставить заявку</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Дикий Кавказ — джип-туры и экспедиции по Северной Осетии' })

const { getFeaturedTours } = useTours()
const featuredTours = getFeaturedTours(3)

const stats = [
  { value: '7 лет', label: 'В горах Осетии' },
  { value: '5', label: 'Авторских маршрутов' },
  { value: '1200+', label: 'Путешественников' },
  { value: '4.9★', label: 'Рейтинг' },
]

const steps = [
  {
    title: 'Оставляете заявку',
    text: 'Выбираете маршрут или пишете, что хотите увидеть. Мы перезваниваем в течение часа.',
  },
  {
    title: 'Согласуем детали',
    text: 'Подбираем дату, обсуждаем уровень сложности, состав группы и всё, что важно именно вам.',
  },
  {
    title: 'Встречаем и едем',
    text: 'Забираем вас из Владикавказа на внедорожнике. Дальше — только горы и впечатления.',
  },
]
</script>
