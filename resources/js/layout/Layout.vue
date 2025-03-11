<script>
import Header from './header.vue';
import Footer from './footer.vue';
import { Link } from '@inertiajs/vue3'

export default {
    components: { Link },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      changeLanguage() {
        console.log('Language changed to:', this.selectedLanguage);
      },
    },
    components: {
      Header,
      Footer
    },
};
</script>
<script setup>
  defineProps({
    data: Object,
});
</script>

<template>
  <main>
    <Header :data="data" />
    <article>
      <slot />
    </article>
    <Footer :data="data" />
  </main>
</template>