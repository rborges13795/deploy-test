<script setup>
import { Link } from '@inertiajs/vue3';
import { ref, onMounted, onUnmounted } from 'vue';
import logoSvg from '../../../assets/img/logo.svg';

const props = defineProps({
  data: Object
});

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const scrollThreshold = 50;

// Methods
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const checkMobile = () => {
  return props.data.checkMobile;
};

// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Simple scroll handler function
function handleScroll() {
  isScrolled.value = window.scrollY > scrollThreshold;
}

let debouncedHandleScroll;

onMounted(() => {
  // Set initial state
  isScrolled.value = window.scrollY > scrollThreshold;

  // Create debounced scroll handler
  debouncedHandleScroll = debounce(handleScroll, 200); // 200ms debounce

  // Assign the debounced scroll handler
  window.addEventListener('scroll', debouncedHandleScroll);
});

onUnmounted(() => {
  // Remove the debounced scroll handler
  if (debouncedHandleScroll) {
    window.removeEventListener('scroll', debouncedHandleScroll);
  }
});

</script>

<template>
  <header class="header remove-cursor-banner" :class="{ 'scrolled': isScrolled }" id="header">
    <!-- Top bar -->
    <div class="bg-primary py-2" v-if="!isScrolled">
      <div class="container">
        <div class="d-flex justify-content-center align-items-center">
          <div class="text-white txt-number">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.7852 12.092C13.4943 12.9586 12.0757 13.7857 11.4574 13.8645C10.8391 13.9432 10.8391 14.4159 7.31091 12.9586C3.81913 11.4618 1.6004 7.64122 1.41854 7.3655C1.23667 7.12918 0 5.35673 0 3.54489C0 1.73306 0.872944 0.827141 1.2003 0.472651C1.52765 0.118162 1.89138 0 2.10962 0C2.32785 0 2.58246 0.0393871 2.76432 0.0393871C2.98256 0.0393871 3.23717 -0.0787766 3.52815 0.66959C3.81913 1.41796 4.51021 3.22979 4.58296 3.42673C4.6557 3.62367 4.72845 3.82061 4.61933 4.05693C4.51021 4.29326 4.43747 4.45081 4.29198 4.68714C4.11011 4.88408 3.92825 5.15979 3.78276 5.31734C3.6009 5.51428 3.41903 5.71122 3.63727 6.06571C3.8555 6.4202 4.54659 7.64122 5.56502 8.62591C6.87444 9.88632 8.00199 10.2802 8.32934 10.4771C8.6567 10.6741 8.87493 10.6347 9.0568 10.3984C9.27503 10.162 9.92974 9.33489 10.148 8.94101C10.3662 8.58652 10.6208 8.62591 10.9118 8.74407C11.2392 8.86224 12.9123 9.76815 13.276 9.96509C13.6034 10.162 13.858 10.2408 13.9307 10.3984C14.0399 10.4771 14.0399 11.2255 13.7852 12.092Z" fill="white"/>
                </svg>

            Televendas: <a href="tel:08006544888" class="text-white text-decoration-none">0800 654 4888</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
      <div class="container">
        <!-- Logo and CTA buttons row -->
        <div class="navbar-brand-container">
          <Link class="navbar-brand" href="/">
            <img :src="logoSvg" alt="Racon Consórcios" class="logo">
          </Link>

          <!-- CTA Buttons (desktop) -->
          <div class="cta-buttons d-none d-lg-flex">
            <Link href="/seja-franqueado" class="btn btn-primary">Seja um Franqueado</Link>
            <Link href="/simulador" class="btn btn-primary">Simule seu Consórcio</Link>
            <Link href="/cliente" class="btn btn-outline-primary">Área do cliente</Link>
          </div>

          <!-- Mobile toggle button -->
          <button class="navbar-toggler d-lg-none" type="button" @click="toggleMenu" :aria-expanded="isMenuOpen">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <!-- Navigation items -->
        <div class="navbar-collapse" :class="{ 'show': isMenuOpen }">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" href="/sobre">A Racon Consórcios</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/unidades">Unidades</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/como-funciona">Como funciona</Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" href="#" id="tiposConsorcio" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tipos de Consórcio
              </Link>
              <ul class="dropdown-menu" aria-labelledby="tiposConsorcio">
                <li><Link class="dropdown-item" href="/consorcio-de-carros">Consórcio de Carros</Link></li>
                <li><Link class="dropdown-item" href="/consorcio-de-imoveis">Consórcio de Imóveis</Link></li>
                <li><Link class="dropdown-item" href="/consorcio-de-servicos">Consórcio de Serviços</Link></li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/simulador">Simulador</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/seja-franqueado">Seja um Franqueado</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/contato">Fale Conosco</Link>
            </li>
          </ul>

          <!-- CTA Buttons (mobile) -->
          <div class="cta-buttons d-lg-none">
            <Link href="/seja-franqueado" class="btn btn-primary">Seja um Franqueado</Link>
            <Link href="/simulador" class="btn btn-primary">Simule seu Consórcio</Link>
            <Link href="/cliente" class="btn btn-outline-primary">Área do cliente</Link>
          </div>

          <!-- Social media icons -->
          <div class="social-icons">
            <a href="https://facebook.com/raconconsorcio" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
              </svg>
            </a>
            <a href="https://instagram.com/raconconsorcio" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/racon-consorcio" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="https://youtube.com/@raconconsorcio" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>


