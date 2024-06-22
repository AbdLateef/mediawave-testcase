<template>
  <div>
    <NuxtLayout>
      <header>
        <nav
          class="flex items-center justify-between flex-wrap bg-emerald-800 p-6"
        >
          <div class="flex items-center">
            <img src="./assets/logo-white.png" alt="mediawave-logo-white" width="100px" />
            <NuxtLink to="/" class="text-white">World Covid Stats App</NuxtLink>
          </div>
          <div class="hidden md:flex items-center">
            <nuxt-link
              to="/case"
              class="text-white hover:text-gray-900 mx-4"
              >Cases</nuxt-link
            >
            <nuxt-link
              to="/death"
              class="text-white hover:text-gray-900 mx-4"
              >Deaths</nuxt-link
            >
          </div>
          <div class="md:hidden flex items-center">
            <button
              @click="toggleMenu"
              class="text-white"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="#fff"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div
            v-if="menuOpen"
            class="md:hidden absolute top-0 left-0 w-full bg-emerald-800 p-6 shadow-md z-9999"
          >
            <div class="flex items-center">
              <img src="./assets/logo-white.png" alt="mediawave-logo-white" width="100px" />
              <NuxtLink @click="toggleMenu" to="/" class="text-white">World Covid Stats App</NuxtLink>
            </div>
            <nuxt-link
              @click="toggleMenu"
              to="/case"
              class="block py-4 px-6 text-white hover:text-gray-900"
              >Cases</nuxt-link
            >
            <nuxt-link
              @click="toggleMenu"
              to="/death"
              class="block py-4 px-6 text-white hover:text-gray-900"
              >Deaths</nuxt-link
            >
          </div>
        </nav>
      </header>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen =!this.menuOpen
    }
  }
}
</script>
