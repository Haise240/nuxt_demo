import type { RouterConfig } from '@nuxt/schema'

// Force scroll to top on every new page navigation.
// Without this, Vue Router keeps the previous page's scroll offset,
// which is what caused the gallery/title overlap and the header
// staying in its "unscrolled" (transparent) state after navigating
// from a page that was scrolled further down.
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, left: 0 }
  },
}
