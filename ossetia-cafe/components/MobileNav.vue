<template>
  <nav aria-label="Мобильная навигация" class="mobile-nav">
    <NuxtLink
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="nav-item"
      :aria-label="link.label"
    >
      <span class="indicator" aria-hidden="true" />
      <span class="icon" aria-hidden="true" v-html="link.icon" />
      <span class="label">{{ link.label }}</span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const links = [
  {
    to: '/',
    label: 'Главная',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9.75L12 3l9 6.75V21a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z"/>
      <path d="M9 22V12h6v10"/>
    </svg>`,
  },
  {
    to: '/menu',
    label: 'Меню',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 3h16v18l-2-1.5L16 21l-2-1.5L12 21l-2-1.5L8 21l-2-1.5L4 21z"/>
      <path d="M8 8h8M8 12h8"/>
    </svg>`,
  },
  {
    to: '/about',
    label: 'О нас',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
    </svg>`,
  },
  {
    to: '/contacts',
    label: 'Контакты',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>`,
  },
]
</script>

<style scoped>
.mobile-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background: rgba(74, 29, 26, 0.96); /* wine */
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid rgba(205, 154, 78, 0.2);
  padding: 10px 8px;
  padding-bottom: calc(10px + env(safe-area-inset-bottom));
}

@media (min-width: 768px) {
  .mobile-nav { display: none; }
}

.nav-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex: 1;
  padding: 4px 0 2px;
  color: rgba(246, 239, 227, 0.5);
  text-decoration: none;
  transition: color 0.25s ease;
}

.nav-item:active {
  transform: scale(0.93);
  transition: transform 0.1s ease, color 0.25s ease;
}

.nav-item.router-link-exact-active {
  color: #CD9A4E;
}

.indicator {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 2px;
  background: #CD9A4E;
  border-radius: 0 0 2px 2px;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.nav-item.router-link-exact-active .indicator {
  opacity: 1;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
}

.icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.label {
  font-family: 'Manrope', sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.06em;
  line-height: 1;
}
</style>
