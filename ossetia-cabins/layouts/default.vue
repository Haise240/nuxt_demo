<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />

    <!--
      pb-20 on mobile = clears the 65px nav bar + safe area.
      md:pb-0 removes it on desktop where MobileNav is hidden.
    -->
    <main class="flex-1 pb-20 md:pb-0">
      <slot />
    </main>

    <AppFooter />

    <!-- Rendered in the DOM but hidden via CSS on md+ screens -->
    <MobileNav />
  </div>
</template>
