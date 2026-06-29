<template>
  <div>
    <!-- Success State -->
    <Transition name="fade">
      <div
        v-if="submitted"
        class="text-center py-12"
      >
        <div class="w-16 h-16 border border-gold flex items-center justify-center mx-auto mb-6">
          <svg class="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="1.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 class="font-cormorant text-3xl text-forest mb-3">
          Заявка отправлена
        </h3>
        <p class="font-jost text-sm text-mist font-light">
          Мы свяжемся с вами в течение часа
        </p>
      </div>
    </Transition>

    <!-- Form -->
    <form
      v-if="!submitted"
      class="space-y-8"
      @submit.prevent="handleSubmit"
      novalidate
    >
      <div v-if="cabinName" class="pb-2">
        <p class="font-jost text-xs tracking-widest uppercase text-mist">
          Запрос на бронирование
        </p>
        <p class="font-cormorant text-2xl text-forest mt-1">{{ cabinName }}</p>
      </div>

      <!-- Name -->
      <div class="relative">
        <input
          v-model="form.name"
          type="text"
          name="name"
          autocomplete="name"
          required
          class="input-field peer"
          placeholder=" "
          :class="{ 'border-red-400': errors.name }"
        />
        <label
          class="absolute left-0 -top-3.5 font-jost text-xs tracking-widest uppercase text-mist transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-stone-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold"
        >
          Ваше имя *
        </label>
        <p v-if="errors.name" class="mt-1 font-jost text-xs text-red-400">
          {{ errors.name }}
        </p>
      </div>

      <!-- Phone -->
      <div class="relative">
        <input
          v-model="form.phone"
          type="tel"
          name="phone"
          autocomplete="tel"
          required
          class="input-field peer"
          placeholder=" "
          :class="{ 'border-red-400': errors.phone }"
        />
        <label
          class="absolute left-0 -top-3.5 font-jost text-xs tracking-widest uppercase text-mist transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-stone-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold"
        >
          Телефон *
        </label>
        <p v-if="errors.phone" class="mt-1 font-jost text-xs text-red-400">
          {{ errors.phone }}
        </p>
      </div>

      <!-- Message -->
      <div class="relative">
        <textarea
          v-model="form.message"
          name="message"
          rows="3"
          class="input-field peer resize-none"
          placeholder=" "
        />
        <label
          class="absolute left-0 -top-3.5 font-jost text-xs tracking-widest uppercase text-mist transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-stone-400 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-gold"
        >
          Комментарий
        </label>
      </div>

      <!-- Error -->
      <p v-if="apiError" class="font-jost text-xs text-red-400">
        {{ apiError }}
      </p>

      <!-- Submit -->
      <button
        type="submit"
        :disabled="isLoading"
        :class="[
          'btn-primary w-full text-center relative overflow-hidden',
          isLoading ? 'opacity-70 cursor-wait' : '',
        ]"
      >
        <span v-if="!isLoading">Отправить заявку</span>
        <span v-else class="flex items-center justify-center gap-2">
          <svg class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          Отправляем...
        </span>
      </button>

      <p class="font-jost text-xs text-stone-400 text-center leading-relaxed">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  cabinName?: string
}>()

const { submitLead, isLoading, error: apiError } = useApi()

const form = reactive({
  name: '',
  phone: '',
  message: '',
})

const errors = reactive({
  name: '',
  phone: '',
})

const submitted = ref(false)

function validate(): boolean {
  errors.name = ''
  errors.phone = ''

  if (!form.name.trim()) {
    errors.name = 'Укажите ваше имя'
  }
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
    message: form.message,
    cabinName: props.cabinName,
  })

  if (result.success) {
    submitted.value = true
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
