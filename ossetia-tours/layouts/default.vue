<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />

    <main class="flex-1 pb-20 md:pb-0">
      <slot />
    </main>

    <AppFooter />

    <MobileNav />
  </div>
</template>
