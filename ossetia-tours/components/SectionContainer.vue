<template>
  <section :class="['w-full', sizeClass, bgClass]">
    <div :class="['mx-auto px-6 lg:px-12', fullWidth ? 'max-w-full' : 'max-w-7xl']">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg' | 'xl'
    bg?: 'white' | 'sand' | 'night' | 'none'
    fullWidth?: boolean
  }>(),
  {
    size: 'lg',
    bg: 'none',
    fullWidth: false,
  }
)

const sizeClass = computed(() => {
  const map = {
    sm: 'py-12 lg:py-16',
    md: 'py-16 lg:py-24',
    lg: 'py-20 lg:py-32',
    xl: 'py-24 lg:py-40',
  }
  return map[props.size]
})

const bgClass = computed(() => {
  const map = {
    white: 'bg-white',
    sand: 'bg-sand-100',
    night: 'bg-night text-sand-100',
    none: '',
  }
  return map[props.bg]
})
</script>
