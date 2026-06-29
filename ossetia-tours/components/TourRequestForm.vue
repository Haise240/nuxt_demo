<template>
  <div>
    <!-- Success State -->
    <Transition name="fade">
      <div v-if="submitted" class="text-center py-12">
        <div class="w-16 h-16 border border-amber flex items-center justify-center mx-auto mb-6">
          <svg class="w-6 h-6 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="font-display text-2xl font-bold text-night mb-3">Заявка отправлена</h3>
        <p class="font-sans text-sm text-night/60 font-light">
          Свяжемся с вами в течение часа и обсудим детали маршрута.
        </p>
      </div>
    </Transition>

    <!-- Form -->
    <form v-if="!submitted" class="space-y-7" @submit.prevent="handleSubmit" novalidate>
      <div v-if="tourName" class="pb-1">
        <p class="font-sans text-xs tracking-widest uppercase text-ice-dark">Заявка на тур</p>
        <p class="font-display text-xl font-bold text-night mt-1">{{ tourName }}</p>
      </div>

      <!-- Name -->
      <div class="relative">
        <input
          v-model="form.name"
          type="text"
          autocomplete="name"
          required
          class="input-field peer"
          placeholder=" "
          :class="{ 'border-red-400': errors.name }"
        />
        <label class="floating-label">Ваше имя *</label>
        <p v-if="errors.name" class="mt-1 font-sans text-xs text-red-500">{{ errors.name }}</p>
      </div>

      <!-- Phone -->
      <div class="relative">
        <input
          v-model="form.phone"
          type="tel"
          autocomplete="tel"
          required
          class="input-field peer"
          placeholder=" "
          :class="{ 'border-red-400': errors.phone }"
        />
        <label class="floating-label">Телефон *</label>
        <p v-if="errors.phone" class="mt-1 font-sans text-xs text-red-500">{{ errors.phone }}</p>
      </div>

      <!-- Date + People -->
      <div class="grid grid-cols-2 gap-5">
        <div class="relative">
          <input v-model="form.date" type="date" :min="today" class="input-field" />
          <label class="static-label">Желаемая дата</label>
        </div>
        <div class="relative">
          <select v-model="form.people" class="input-field appearance-none cursor-pointer">
            <option v-for="n in 8" :key="n" :value="n">{{ n }} чел.</option>
          </select>
          <label class="static-label">Человек</label>
        </div>
      </div>

      <!-- Comment -->
      <div class="relative">
        <textarea v-model="form.message" rows="2" class="input-field peer resize-none" placeholder=" " />
        <label class="floating-label">Комментарий или вопрос</label>
      </div>

      <p v-if="apiError" class="font-sans text-xs text-red-500">{{ apiError }}</p>

      <button
        type="submit"
        :disabled="isLoading"
        :class="['btn-primary w-full text-center', isLoading ? 'opacity-70 cursor-wait' : '']"
      >
        <span v-if="!isLoading">Оставить заявку</span>
        <span v-else class="flex items-center justify-center gap-2">
          <svg class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Отправляем...
        </span>
      </button>

      <p class="font-sans text-xs text-night/40 text-center leading-relaxed">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ tourName?: string }>()

const { submitLead, isLoading, error: apiError } = useApi()

const today = new Date().toISOString().split('T')[0]

const form = reactive({
  name: '',
  phone: '',
  date: '',
  people: 2 as number | string,
  message: '',
})

const errors = reactive({ name: '', phone: '' })
const submitted = ref(false)

function validate(): boolean {
  errors.name = ''
  errors.phone = ''
  if (!form.name.trim()) errors.name = 'Укажите ваше имя'
  if (!form.phone.trim()) {
    errors.phone = 'Укажите номер телефона'
  } else if (!/^[\d\s\+\-\(\)]{7,}$/.test(form.phone)) {
    errors.phone = 'Введите корректный номер'
  }
  return !errors.name && !errors.phone
}

async function handleSubmit() {
  if (!validate()) return
  const result = await submitLead({
    name: form.name,
    phone: form.phone,
    date: form.date,
    people: form.people,
    message: form.message,
    tourName: props.tourName,
    subject: props.tourName ? `Заявка на тур: ${props.tourName}` : 'Заявка с сайта',
  })
  if (result.success) submitted.value = true
}
</script>

<style scoped>
.floating-label {
  @apply absolute left-0 -top-3.5 font-sans text-xs tracking-widest uppercase text-ice-dark transition-all duration-300
         peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-night/30 peer-placeholder-shown:tracking-normal
         peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-ice-dark peer-focus:tracking-widest;
}
.static-label {
  @apply absolute left-0 -top-3.5 font-sans text-xs tracking-widest uppercase text-ice-dark;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
