<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* ── Page transitions ─────────────────────────────────────────── */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.page-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ── Scrollbar (desktop only — mobile doesn't show it) ───────── */
@media (min-width: 768px) {
  ::-webkit-scrollbar        { width: 6px; }
  ::-webkit-scrollbar-track  { background: #1C2B1E; }
  ::-webkit-scrollbar-thumb  { background: #C9A96E; border-radius: 3px; }
}

/* ── Text selection ───────────────────────────────────────────── */
::selection {
  background: #C9A96E33;
  color: #1C2B1E;
}

/* ── Smooth scroll ────────────────────────────────────────────── */
html {
  scroll-behavior: smooth;
}
</style>
