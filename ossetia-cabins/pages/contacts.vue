<template>
  <div>
    <!-- Page Header -->
    <div class="bg-forest pt-40 pb-20 relative overflow-hidden">
      <div class="absolute inset-0 bg-grain opacity-15 pointer-events-none" />
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <p class="section-label !text-gold mb-6">Свяжитесь с нами</p>
        <h1 class="font-cormorant text-6xl lg:text-8xl font-light text-stone-50 leading-none">
          Контакты
        </h1>
        <p class="font-jost text-base font-light text-stone-400 mt-6 max-w-md leading-relaxed">
          Отвечаем быстро. Обычно в течение часа в рабочее время.
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <SectionContainer size="xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <!-- Left: Contact Info -->
        <div class="lg:col-span-5">
          <h2 class="font-cormorant text-3xl lg:text-4xl text-forest mb-10">
            Как нас найти
          </h2>

          <div class="space-y-10">
            <!-- Phone -->
            <div class="flex gap-5 items-start group">
              <div class="w-10 h-10 border border-stone-200 group-hover:border-gold flex items-center justify-center transition-colors duration-300 shrink-0">
                <svg class="w-4 h-4 text-mist group-hover:text-gold transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p class="font-jost text-xs tracking-widest uppercase text-mist mb-1">Телефон</p>
                <a
                  href="tel:+79280000000"
                  class="font-cormorant text-2xl text-forest hover:text-gold transition-colors duration-300"
                >
                  +7 (928) 000-00-00
                </a>
                <p class="font-jost text-xs text-stone-400 mt-1">
                  Ежедневно с 9:00 до 21:00
                </p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex gap-5 items-start group">
              <div class="w-10 h-10 border border-stone-200 group-hover:border-gold flex items-center justify-center transition-colors duration-300 shrink-0">
                <svg class="w-4 h-4 text-mist group-hover:text-gold transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="font-jost text-xs tracking-widest uppercase text-mist mb-1">Email</p>
                <a
                  href="mailto:hello@alanskie.example"
                  class="font-cormorant text-2xl text-forest hover:text-gold transition-colors duration-300"
                >
                  hello@alanskie.example
                </a>
                <p class="font-jost text-xs text-stone-400 mt-1">
                  Ответим в течение часа
                </p>
              </div>
            </div>

            <!-- Location -->
            <div class="flex gap-5 items-start group">
              <div class="w-10 h-10 border border-stone-200 group-hover:border-gold flex items-center justify-center transition-colors duration-300 shrink-0">
                <svg class="w-4 h-4 text-mist group-hover:text-gold transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="font-jost text-xs tracking-widest uppercase text-mist mb-1">Расположение</p>
                <p class="font-cormorant text-2xl text-forest leading-tight">
                  Республика Северная Осетия-Алания
                </p>
                <p class="font-jost text-sm font-light text-forest/60 mt-2 leading-relaxed max-w-xs">
                  Домики расположены в горных ущельях в 60–120 км от Владикавказа. Точные адреса высылаем после подтверждения брони.
                </p>
              </div>
            </div>

            <!-- Messengers -->
            <div class="pt-6 border-t border-stone-100">
              <p class="font-jost text-xs tracking-widest uppercase text-mist mb-5">
                Мессенджеры
              </p>
              <div class="flex gap-3">
                <a
                  v-for="m in messengers"
                  :key="m.label"
                  :href="m.href"
                  class="flex items-center gap-2 px-4 py-2 border border-stone-200 hover:border-gold hover:text-gold text-forest transition-all duration-300 group"
                >
                  <span class="font-jost text-xs font-medium">{{ m.label }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="lg:col-span-6 lg:col-start-7">
          <div class="bg-stone-50 p-10 lg:p-14">
            <h2 class="font-cormorant text-3xl text-forest mb-2">
              Напишите нам
            </h2>
            <p class="font-jost text-sm font-light text-forest/60 mb-10">
              Расскажите о вашем запросе — мы поможем выбрать подходящий домик.
            </p>

            <!-- Extended form (same component + extra fields handled inline) -->
            <Transition name="fade" mode="out-in">
              <div v-if="!formSubmitted" key="form">
                <form class="space-y-8" @submit.prevent="handleSubmit" novalidate>
                  <div class="relative">
                    <input v-model="form.name" type="text" class="input-field peer" placeholder=" " required />
                    <label class="absolute left-0 -top-3.5 font-jost text-xs tracking-widest uppercase text-mist transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-stone-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold">
                      Ваше имя *
                    </label>
                    <p v-if="errors.name" class="mt-1 font-jost text-xs text-red-400">{{ errors.name }}</p>
                  </div>
                  <div class="relative">
                    <input v-model="form.phone" type="tel" class="input-field peer" placeholder=" " required />
                    <label class="absolute left-0 -top-3.5 font-jost text-xs tracking-widest uppercase text-mist transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-stone-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold">
                      Телефон *
                    </label>
                    <p v-if="errors.phone" class="mt-1 font-jost text-xs text-red-400">{{ errors.phone }}</p>
                  </div>
                  <div class="relative">
                    <textarea v-model="form.message" rows="4" class="input-field peer resize-none" placeholder=" " />
                    <label class="absolute left-0 -top-3.5 font-jost text-xs tracking-widest uppercase text-mist transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-stone-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold">
                      Сообщение
                    </label>
                  </div>
                  <p v-if="apiError" class="font-jost text-xs text-red-400">{{ apiError }}</p>
                  <button
                    type="submit"
                    :disabled="isLoading"
                    :class="['btn-primary w-full text-center', isLoading ? 'opacity-70 cursor-wait' : '']"
                  >
                    <span v-if="!isLoading">Отправить сообщение</span>
                    <span v-else>Отправляем...</span>
                  </button>
                  <p class="font-jost text-xs text-stone-400 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </div>

              <div v-else key="success" class="py-16 text-center">
                <div class="w-16 h-16 border border-gold flex items-center justify-center mx-auto mb-6">
                  <svg class="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 class="font-cormorant text-3xl text-forest mb-3">Сообщение отправлено</h3>
                <p class="font-jost text-sm text-mist font-light">Ответим в течение часа</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </SectionContainer>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Контакты — Аланские горные домики' })

const { submitLead, isLoading, error: apiError } = useApi()

const form = reactive({ name: '', phone: '', message: '' })
const errors = reactive({ name: '', phone: '' })
const formSubmitted = ref(false)

function validate(): boolean {
  errors.name = ''
  errors.phone = ''
  if (!form.name.trim()) errors.name = 'Укажите ваше имя'
  if (!form.phone.trim()) errors.phone = 'Укажите номер телефона'
  return !errors.name && !errors.phone
}

async function handleSubmit() {
  if (!validate()) return
  const result = await submitLead({
    name: form.name,
    phone: form.phone,
    message: form.message,
  })
  if (result.success) formSubmitted.value = true
}

const messengers = [
  { label: 'Telegram', href: '#' },
  { label: 'WhatsApp', href: '#' },
  { label: 'ВКонтакте', href: '#' },
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
