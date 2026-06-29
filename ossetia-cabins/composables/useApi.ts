export interface LeadPayload {
  name: string
  phone: string
  message?: string
  cabinName?: string
}

export interface ApiResponse {
  success: boolean
  message: string
}

export function useApi() {
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const submitLead = async (payload: LeadPayload): Promise<ApiResponse> => {
    isLoading.value = true
    error.value = null
    try {
      await $fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      })
      return {
        success: true,
        message: 'Заявка успешно отправлена. Мы свяжемся с вами в течение часа.',
      }
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : 'Произошла ошибка. Попробуйте позже.'
      error.value = message
      return { success: false, message }
    } finally {
      isLoading.value = false
    }
  }

  return { isLoading, error, submitLead }
}
