<script>
import Layout from '../layout/Layout.vue';
import './../../sass/pages/home.scss';
import commonMethods from '../mixins/commonMethods.js';

export default {
  layout: Layout,
  mixins: [commonMethods],
}
</script>

<script setup>
import { ref, onMounted } from 'vue';
import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Newsletter from '../components/Newsletter.vue';

const props = defineProps({ data: Object });

// Refs
const swiperInstance = ref(null);
const creditTab = ref(null);
const parcelTab = ref(null);
const rangeInput = ref(null);
const rangeValue = ref(35000);

// Format currency helper
const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

// Navigation handlers
const handlePrevClick = () => {
  console.log('Previous button clicked');
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev();
    console.log('Current slide:', swiperInstance.value.activeIndex);
  }
};

const handleNextClick = () => {
  console.log('Next button clicked');
  if (swiperInstance.value) {
    swiperInstance.value.slideNext();
    console.log('Current slide:', swiperInstance.value.activeIndex);
  }
};

// Form handlers
const handleTabClick = (tab) => {
  if (tab === 'credit') {
    creditTab.value.classList.add('active');
    parcelTab.value?.classList.remove('active');
  } else {
    parcelTab.value.classList.add('active');
    creditTab.value?.classList.remove('active');
  }
};

const handleRangeChange = (event) => {
  rangeValue.value = parseInt(event.target.value);
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  console.log('Form submitted with value:', rangeValue.value);
};

// Initialize Swiper
onMounted(() => {
  console.log('Initializing banner slider');

  swiperInstance.value = new Swiper('.banner__slider', {
    modules: [Autoplay, EffectFade, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 100000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      prevEl: '.banner__nav--prev',
      nextEl: '.banner__nav--next',
    },
    on: {
      init: (sw) => {
        console.log('Swiper initialized successfully');
      },
      slideChange: () => {
        console.log('Slide changed to:', swiperInstance.value?.activeIndex);
      }
    }
  });
});
</script>

<template>
  <section id="home">
    <!-- Banner section -->
    <div class="banner">
      <div class="banner__container">
        <div class="banner__slider swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
                <div class="banner__image">
                    <img :src="asset('site/img/photo-156.webp')" alt="Banner 1">
                </div>
                <div class="banner__content container">
                <div class="banner__text">
                  <h1 class="banner__title">
                    <span>Realize seus objetivos</span><br/>
                    com um <span class="banner__highlight">Consórcio</span><br/>
                    <span class="banner__highlight">Racon:</span> acessível e<br/>
                    sem juros
                  </h1>
                  <p class="banner__description">
                    Entre para um grupo de pessoas com o mesmo objetivo e<br/>
                    tenha a chance de ser contemplado por sorteio ou lance,<br/>
                    acelerando sua conquista com planejamento e tranquilidade.
                  </p>
                  <a href="/simulador" class="banner__cta">
                    Simule seu Consórcio
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5511 0.491272L15.0207 7.49998L8.5511 14.5087L7.4489 13.4913L12.287 8.24998H0V6.74998H12.287L7.4489 1.50869L8.5511 0.491272Z" fill="white"/>
                        </svg>
                  </a>
                </div>
                <div class="banner__form">
                  <div class="banner__form-container">
                    <h2 class="banner__form-title">O que você deseja realizar?</h2>
                    <div class="banner__form-options">
                      <label class="banner__form-option">
                        <input type="radio" name="objective" value="vehicle">
                        <svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.44037 6.04695C0.693862 6.52388 0.424291 7.27039 0.610917 8.14131C0.756071 8.82561 1.02564 9.48917 1.25374 10.1735C1.29521 10.3186 1.35742 10.4638 1.44037 10.5882C1.56479 10.7956 1.81362 10.92 2.04172 10.9822L3.2859 11.2518C3.24442 11.0237 3.22369 10.7956 3.22369 10.5675C3.22369 10.0905 3.30663 9.63432 3.49326 9.19886C3.67989 8.78414 3.92872 8.41088 4.23977 8.0791C4.57155 7.74732 4.9448 7.49849 5.35952 7.3326C5.79499 7.14597 6.25119 7.06303 6.72812 7.06303C7.20505 7.06303 7.66125 7.14597 8.09671 7.3326C8.51144 7.51922 8.88469 7.76806 9.21647 8.0791C9.54825 8.41088 9.79709 8.78414 9.96298 9.19886C10.1496 9.63432 10.2326 10.0905 10.2326 10.5675C10.2326 10.9822 10.1703 11.3969 10.0252 11.7909H23.7733C23.6282 11.3969 23.566 11.0029 23.566 10.5675C23.566 10.0905 23.6489 9.63432 23.8355 9.19886C24.0222 8.78414 24.271 8.41088 24.5821 8.0791C24.9138 7.74732 25.2871 7.49849 25.7018 7.3326C26.1373 7.14597 26.5935 7.06303 27.0704 7.06303C27.5473 7.06303 28.0035 7.14597 28.439 7.3326C28.8537 7.51922 29.227 7.76806 29.5588 8.0791C29.8905 8.41088 30.1394 8.78414 30.3053 9.19886C30.4919 9.63432 30.5748 10.0905 30.5748 10.5675C30.5748 10.7333 30.5541 10.92 30.5334 11.0859L32.0264 10.8163C32.2545 10.7748 32.4618 10.6711 32.6277 10.526C33.0425 10.1735 33.2706 9.75874 33.2706 9.2196L33.2913 7.99616V7.97542C33.2913 7.74732 33.2291 7.51922 33.1047 7.3326C33.001 7.16671 32.9388 6.98008 32.9388 6.79346V5.40413C32.9388 4.94793 32.607 4.55394 32.1508 4.47099L30.5334 4.18068C29.9527 4.077 29.3721 3.89038 28.833 3.64154L25.5359 2.10706C24.5821 1.65086 23.566 1.31908 22.5292 1.09098C21.4923 0.862881 20.4348 0.738464 19.3772 0.738464C16.8889 0.738464 14.4213 1.40202 12.2647 2.6462L8.96764 4.55394C8.86395 4.61615 8.57365 4.55394 8.46997 4.55394C8.28334 4.55394 8.07598 4.57468 7.88935 4.57468C6.23045 4.67836 4.55081 4.80277 2.95412 5.30045C2.56013 5.42486 2.18687 5.59075 1.81362 5.77738C1.70994 5.86032 1.56479 5.94327 1.44037 6.04695ZM19.0662 4.63688L19.398 1.52644C26.3239 1.83748 26.158 4.63688 26.158 4.63688H19.0662ZM10.8754 4.63688C10.8754 4.63688 14.3798 1.50571 18.5063 1.50571L17.8842 4.63688H10.8754Z" fill="#09A7DA"/>
                            <path d="M27.091 7.85104C28.584 7.85104 29.8075 9.07449 29.8075 10.5675C29.8075 10.7956 29.7867 11.0237 29.7245 11.2311C29.4342 12.413 28.3559 13.284 27.091 13.284C26.0335 13.284 25.1003 12.6619 24.6649 11.7909C24.4783 11.4177 24.3746 11.0237 24.3746 10.5675C24.3746 9.05375 25.5773 7.85104 27.091 7.85104Z" fill="#09A7DA"/>
                            <path d="M6.74892 7.85104C8.24193 7.85104 9.46537 9.07449 9.46537 10.5675C9.46537 11.003 9.36169 11.4177 9.17507 11.7909C8.7396 12.6826 7.80647 13.284 6.74892 13.284C5.56695 13.284 4.55088 12.5167 4.17762 11.4592C4.07394 11.1896 4.03247 10.8785 4.03247 10.5675C4.03247 9.05375 5.23517 7.85104 6.74892 7.85104Z" fill="#09A7DA"/>
                            </svg>

                        <span class="banner__form-icon"></span>
                        <span class="banner__form-label">Comprar um veículo?</span>
                      </label>
                      <label class="banner__form-option">

                        <input type="radio" name="objective" value="house">

                        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.5433 10.0316L10.0579 3.59679C9.95579 3.50924 9.79528 3.50924 9.69314 3.59679L2.20773 10.0316C2.14936 10.09 2.10559 10.1629 2.10559 10.2505V17.1376C2.10559 17.6921 2.55792 18.1444 3.1124 18.1444H7.65034C7.81084 18.1444 7.92757 18.0131 7.92757 17.8672V13.2417C7.92757 12.8332 8.26318 12.4976 8.67174 12.4976H11.0501C11.4587 12.4976 11.7943 12.8332 11.7943 13.2417V17.8672C11.7943 18.0277 11.9256 18.1444 12.0715 18.1444H16.6095C17.164 18.1444 17.6163 17.6921 17.6163 17.1376V10.2505C17.6455 10.1629 17.6017 10.09 17.5433 10.0316Z" fill="#09A7DA"/>
                            <path d="M19.484 7.98881L16.0258 5.01216V2.26897C16.0258 1.96255 15.7777 1.6999 15.4567 1.6999H14.2019C13.8954 1.6999 13.6328 1.94796 13.6328 2.26897V2.96936L10.4081 0.196984C10.1017 -0.0656615 9.64933 -0.0656615 9.34291 0.196984L0.281632 7.98881C-0.0539707 8.28064 -0.0977459 8.79134 0.194083 9.14154C0.354589 9.33123 0.588051 9.41877 0.806923 9.41877C0.996612 9.41877 1.1863 9.36041 1.33222 9.21449L9.75148 1.97714C9.80984 1.91877 9.91198 1.91877 9.97035 1.97714L18.3896 9.21449C18.5501 9.34582 18.7398 9.41877 18.9149 9.41877C19.1484 9.41877 19.3672 9.31663 19.5277 9.14154C19.8633 8.80593 19.8196 8.28064 19.484 7.98881Z" fill="#09A7DA"/>
                            </svg>

                        <span class="banner__form-icon"></span>
                        <span class="banner__form-label">Comprar uma casa?</span>
                      </label>
                      <label class="banner__form-option">
                        <input type="radio" name="objective" value="investment">
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.0321045 10.8119C0.0321045 10.1753 -0.0963135 9.45914 0.160522 8.85439C0.449464 8.17007 1.26813 7.89953 1.95838 8.15416C2.74494 8.45653 2.85731 9.23633 2.84126 9.9684C2.84126 10.4458 2.61652 11.5121 2.98573 11.9099C3.46729 12.4033 3.56361 11.0983 3.56361 10.9551C3.57966 10.3822 3.54755 9.80925 3.54755 9.23633C3.54755 8.55202 3.54755 7.8677 3.54755 7.18338C3.54755 5.49646 3.46729 3.77771 3.51545 2.09079C3.5315 1.5497 3.57966 0.913126 3.91676 0.467524C4.31807 -0.0576495 5.18489 -0.13722 5.71461 0.212896C6.34065 0.610755 6.35671 1.50196 6.35671 2.15445C6.35671 3.02974 6.34066 3.92094 6.34066 4.79623C6.6617 4.2074 7.35195 3.9846 7.97799 4.2074C8.58798 4.4302 8.79666 5.0986 8.86087 5.68743C9.18191 5.21 9.7919 5.00312 10.3377 5.13043C11.044 5.30549 11.365 5.95798 11.4132 6.62638C11.8145 6.08529 12.6492 5.91023 13.2431 6.22852C13.7408 6.49907 13.9173 7.02424 13.9494 7.56533C14.0618 9.07719 13.9494 10.6368 13.9655 12.1646C13.9976 15.1883 12.4887 18.1802 9.59927 19.4534C7.22353 20.5196 4.47859 19.9785 2.58442 18.2439C1.66944 17.4004 0.979189 16.3341 0.545777 15.1724C0.0160513 13.756 0.0321045 12.3237 0.0321045 10.8119Z" fill="#09A7DA"/>
                            </svg>

                        <span class="banner__form-icon"></span>
                        <span class="banner__form-label">Aumentar patrimônio</span>
                      </label>
                    </div>
                    <div class="banner__form-simulator">

                      <div class="banner__form-tabs">
                        <p class="banner__form-simulator-title">Simular o plano</p>
                       <div class="banner__form-tabs-container">
                        <button class="banner__form-tab active">Crédito</button>
                        <button class="banner__form-tab">Parcela</button>
                       </div>
                      </div>
                      <div class="banner__form-range">
                        <input type="range" min="35000" max="1000000" value="35000" class="banner__form-slider">
                        <div class="banner__form-values">
                          <span>R$ 35 mil</span>
                          <span>R$ 900 mil</span>
                          <span>R$ 1 milhão</span>
                        </div>
                      </div>
                      <div class="banner__form-privacy">
                        <label class="banner__form-checkbox">
                          <input type="checkbox">
                          <span style="max-width: 90%;">Li e concordo com a <a href="/politica-de-privacidade">Política de Privacidade</a> concedendo  o uso dos meus dados</span>
                        </label>
                      </div>
                      <button class="banner__form-submit">Enviar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
                <div class="banner__image">
                    <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop" alt="Banner 1">
                </div>
                <div class="banner__content container">
                    <div class="banner__form">
                        <div class="banner__form-container">
                          <h2 class="banner__form-title">O que você deseja realizar?</h2>
                          <div class="banner__form-options">
                            <label class="banner__form-option">
                              <input type="radio" name="objective" value="vehicle">
                              <svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1.44037 6.04695C0.693862 6.52388 0.424291 7.27039 0.610917 8.14131C0.756071 8.82561 1.02564 9.48917 1.25374 10.1735C1.29521 10.3186 1.35742 10.4638 1.44037 10.5882C1.56479 10.7956 1.81362 10.92 2.04172 10.9822L3.2859 11.2518C3.24442 11.0237 3.22369 10.7956 3.22369 10.5675C3.22369 10.0905 3.30663 9.63432 3.49326 9.19886C3.67989 8.78414 3.92872 8.41088 4.23977 8.0791C4.57155 7.74732 4.9448 7.49849 5.35952 7.3326C5.79499 7.14597 6.25119 7.06303 6.72812 7.06303C7.20505 7.06303 7.66125 7.14597 8.09671 7.3326C8.51144 7.51922 8.88469 7.76806 9.21647 8.0791C9.54825 8.41088 9.79709 8.78414 9.96298 9.19886C10.1496 9.63432 10.2326 10.0905 10.2326 10.5675C10.2326 10.9822 10.1703 11.3969 10.0252 11.7909H23.7733C23.6282 11.3969 23.566 11.0029 23.566 10.5675C23.566 10.0905 23.6489 9.63432 23.8355 9.19886C24.0222 8.78414 24.271 8.41088 24.5821 8.0791C24.9138 7.74732 25.2871 7.49849 25.7018 7.3326C26.1373 7.14597 26.5935 7.06303 27.0704 7.06303C27.5473 7.06303 28.0035 7.14597 28.439 7.3326C28.8537 7.51922 29.227 7.76806 29.5588 8.0791C29.8905 8.41088 30.1394 8.78414 30.3053 9.19886C30.4919 9.63432 30.5748 10.0905 30.5748 10.5675C30.5748 10.7333 30.5541 10.92 30.5334 11.0859L32.0264 10.8163C32.2545 10.7748 32.4618 10.6711 32.6277 10.526C33.0425 10.1735 33.2706 9.75874 33.2706 9.2196L33.2913 7.99616V7.97542C33.2913 7.74732 33.2291 7.51922 33.1047 7.3326C33.001 7.16671 32.9388 6.98008 32.9388 6.79346V5.40413C32.9388 4.94793 32.607 4.55394 32.1508 4.47099L30.5334 4.18068C29.9527 4.077 29.3721 3.89038 28.833 3.64154L25.5359 2.10706C24.5821 1.65086 23.566 1.31908 22.5292 1.09098C21.4923 0.862881 20.4348 0.738464 19.3772 0.738464C16.8889 0.738464 14.4213 1.40202 12.2647 2.6462L8.96764 4.55394C8.86395 4.61615 8.57365 4.55394 8.46997 4.55394C8.28334 4.55394 8.07598 4.57468 7.88935 4.57468C6.23045 4.67836 4.55081 4.80277 2.95412 5.30045C2.56013 5.42486 2.18687 5.59075 1.81362 5.77738C1.70994 5.86032 1.56479 5.94327 1.44037 6.04695ZM19.0662 4.63688L19.398 1.52644C26.3239 1.83748 26.158 4.63688 26.158 4.63688H19.0662ZM10.8754 4.63688C10.8754 4.63688 14.3798 1.50571 18.5063 1.50571L17.8842 4.63688H10.8754Z" fill="#09A7DA"/>
                                  <path d="M27.091 7.85104C28.584 7.85104 29.8075 9.07449 29.8075 10.5675C29.8075 10.7956 29.7867 11.0237 29.7245 11.2311C29.4342 12.413 28.3559 13.284 27.091 13.284C26.0335 13.284 25.1003 12.6619 24.6649 11.7909C24.4783 11.4177 24.3746 11.0237 24.3746 10.5675C24.3746 9.05375 25.5773 7.85104 27.091 7.85104Z" fill="#09A7DA"/>
                                  <path d="M6.74892 7.85104C8.24193 7.85104 9.46537 9.07449 9.46537 10.5675C9.46537 11.003 9.36169 11.4177 9.17507 11.7909C8.7396 12.6826 7.80647 13.284 6.74892 13.284C5.56695 13.284 4.55088 12.5167 4.17762 11.4592C4.07394 11.1896 4.03247 10.8785 4.03247 10.5675C4.03247 9.05375 5.23517 7.85104 6.74892 7.85104Z" fill="#09A7DA"/>
                                  </svg>

                              <span class="banner__form-icon"></span>
                              <span class="banner__form-label">Comprar um veículo?</span>
                            </label>
                            <label class="banner__form-option">

                              <input type="radio" name="objective" value="house">

                              <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M17.5433 10.0316L10.0579 3.59679C9.95579 3.50924 9.79528 3.50924 9.69314 3.59679L2.20773 10.0316C2.14936 10.09 2.10559 10.1629 2.10559 10.2505V17.1376C2.10559 17.6921 2.55792 18.1444 3.1124 18.1444H7.65034C7.81084 18.1444 7.92757 18.0131 7.92757 17.8672V13.2417C7.92757 12.8332 8.26318 12.4976 8.67174 12.4976H11.0501C11.4587 12.4976 11.7943 12.8332 11.7943 13.2417V17.8672C11.7943 18.0277 11.9256 18.1444 12.0715 18.1444H16.6095C17.164 18.1444 17.6163 17.6921 17.6163 17.1376V10.2505C17.6455 10.1629 17.6017 10.09 17.5433 10.0316Z" fill="#09A7DA"/>
                                  <path d="M19.484 7.98881L16.0258 5.01216V2.26897C16.0258 1.96255 15.7777 1.6999 15.4567 1.6999H14.2019C13.8954 1.6999 13.6328 1.94796 13.6328 2.26897V2.96936L10.4081 0.196984C10.1017 -0.0656615 9.64933 -0.0656615 9.34291 0.196984L0.281632 7.98881C-0.0539707 8.28064 -0.0977459 8.79134 0.194083 9.14154C0.354589 9.33123 0.588051 9.41877 0.806923 9.41877C0.996612 9.41877 1.1863 9.36041 1.33222 9.21449L9.75148 1.97714C9.80984 1.91877 9.91198 1.91877 9.97035 1.97714L18.3896 9.21449C18.5501 9.34582 18.7398 9.41877 18.9149 9.41877C19.1484 9.41877 19.3672 9.31663 19.5277 9.14154C19.8633 8.80593 19.8196 8.28064 19.484 7.98881Z" fill="#09A7DA"/>
                                  </svg>

                              <span class="banner__form-icon"></span>
                              <span class="banner__form-label">Comprar uma casa?</span>
                            </label>
                            <label class="banner__form-option">
                              <input type="radio" name="objective" value="investment">
                              <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0.0321045 10.8119C0.0321045 10.1753 -0.0963135 9.45914 0.160522 8.85439C0.449464 8.17007 1.26813 7.89953 1.95838 8.15416C2.74494 8.45653 2.85731 9.23633 2.84126 9.9684C2.84126 10.4458 2.61652 11.5121 2.98573 11.9099C3.46729 12.4033 3.56361 11.0983 3.56361 10.9551C3.57966 10.3822 3.54755 9.80925 3.54755 9.23633C3.54755 8.55202 3.54755 7.8677 3.54755 7.18338C3.54755 5.49646 3.46729 3.77771 3.51545 2.09079C3.5315 1.5497 3.57966 0.913126 3.91676 0.467524C4.31807 -0.0576495 5.18489 -0.13722 5.71461 0.212896C6.34065 0.610755 6.35671 1.50196 6.35671 2.15445C6.35671 3.02974 6.34066 3.92094 6.34066 4.79623C6.6617 4.2074 7.35195 3.9846 7.97799 4.2074C8.58798 4.4302 8.79666 5.0986 8.86087 5.68743C9.18191 5.21 9.7919 5.00312 10.3377 5.13043C11.044 5.30549 11.365 5.95798 11.4132 6.62638C11.8145 6.08529 12.6492 5.91023 13.2431 6.22852C13.7408 6.49907 13.9173 7.02424 13.9494 7.56533C14.0618 9.07719 13.9494 10.6368 13.9655 12.1646C13.9976 15.1883 12.4887 18.1802 9.59927 19.4534C7.22353 20.5196 4.47859 19.9785 2.58442 18.2439C1.66944 17.4004 0.979189 16.3341 0.545777 15.1724C0.0160513 13.756 0.0321045 12.3237 0.0321045 10.8119Z" fill="#09A7DA"/>
                                  </svg>

                              <span class="banner__form-icon"></span>
                              <span class="banner__form-label">Aumentar patrimônio</span>
                            </label>
                          </div>
                          <div class="banner__form-simulator">

                            <div class="banner__form-tabs">
                              <p class="banner__form-simulator-title">Simular o plano</p>
                             <div class="banner__form-tabs-container">
                              <button class="banner__form-tab active">Crédito</button>
                              <button class="banner__form-tab">Parcela</button>
                             </div>
                            </div>
                            <div class="banner__form-range">
                              <input type="range" min="35000" max="1000000" value="35000" class="banner__form-slider">
                              <div class="banner__form-values">
                                <span>R$ 35 mil</span>
                                <span>R$ 900 mil</span>
                                <span>R$ 1 milhão</span>
                              </div>
                            </div>
                            <div class="banner__form-privacy">
                              <label class="banner__form-checkbox">
                                <input type="checkbox">
                                <span style="max-width: 90%;">Li e concordo com a <a href="/politica-de-privacidade">Política de Privacidade</a> concedendo  o uso dos meus dados</span>
                              </label>
                            </div>
                            <button class="banner__form-submit">Enviar</button>
                          </div>
                        </div>
                      </div>
                <div class="banner__text">
                  <h1 class="banner__title">
                    <span>Realize seus objetivos</span><br/>
                    com um <span class="banner__highlight">Consórcio</span><br/>
                    <span class="banner__highlight">Racon:</span> acessível e<br/>
                    sem juros
                  </h1>
                  <p class="banner__description">
                    Entre para um grupo de pessoas com o mesmo objetivo e<br/>
                    tenha a chance de ser contemplado por sorteio ou lance,<br/>
                    acelerando sua conquista com planejamento e tranquilidade.
                  </p>
                  <a href="/simulador" class="banner__cta">
                    Simule seu Consórcio
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5511 0.491272L15.0207 7.49998L8.5511 14.5087L7.4489 13.4913L12.287 8.24998H0V6.74998H12.287L7.4489 1.50869L8.5511 0.491272Z" fill="white"/>
                        </svg>
                  </a>
                </div>

              </div>
            </div>
          </div>
          <div class="banner__navigation">
            <button type="button" class="banner__nav banner__nav--prev" aria-label="Previous slide" @click="handlePrevClick">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19l-7-7 7-7" stroke="#09A7DA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button type="button" class="banner__nav banner__nav--next" aria-label="Next slide" @click="handleNextClick">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5l7 7-7 7" stroke="#09A7DA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>



    <!-- Consorcio Section -->
    <section class="consorcio">
      <div class="container">
        <h2 class="consorcio__title">
          A Racon tem o <span class="consorcio__title-highlight">Consórcio ideal para você.</span>
        </h2>

        <div class="consorcio__grid">
          <!-- Card 1 - Vehicle -->
          <div class="consorcio__card">
            <div class="consorcio__card-content">
              <div class="consorcio__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6l3 4h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a3 3 0 0 1-6 0H10a3 3 0 0 1-6 0H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h2l3-4h8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="7" cy="17" r="2" stroke="currentColor" stroke-width="2"/>
                  <circle cx="17" cy="17" r="2" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <h3 class="consorcio__card-title">
                Dirija em direção à sua independência.
              </h3>
              <p class="consorcio__card-text">
                Consórcio seguro e com até 120 meses para pagar.
              </p>
              <a href="/simulador" class="consorcio__card-button">
                Invista agora
              </a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop"
              alt="Mulher sorrindo com chaves do carro"
              class="consorcio__card-image"
            >
          </div>

          <!-- Card 2 - House -->
          <div class="consorcio__card">
            <div class="consorcio__card-content">
              <div class="consorcio__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 22V12h6v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="consorcio__card-title">
                Conquiste a tão planejada casa própria?
              </h3>
              <p class="consorcio__card-text">
                Adquira um dos nossos consórcios e alcance mais um dos seus objetivos.
              </p>
              <a href="/simulador" class="consorcio__card-button">
                Invista agora
              </a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?q=80&w=2073&auto=format&fit=crop"
              alt="Família em casa"
              class="consorcio__card-image"
            >
          </div>

          <!-- Card 3 - Investment -->
          <div class="consorcio__card">
            <div class="consorcio__card-content">
              <div class="consorcio__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3v18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M18 9l-3-3-4 4-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3 class="consorcio__card-title">
                Amplie seu patrimônio através de um investimento milionário.
              </h3>
              <p class="consorcio__card-text">
                Faça seu patrimônio crescer de forma segura e planejada.
              </p>
              <a href="/simulador" class="consorcio__card-button">
                Invista agora
              </a>
            </div>
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop"
              alt="Homem de negócios"
              class="consorcio__card-image"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="container">
        <div class="about__content">
          <div class="about__text">
            <h2 class="about__title">
              Mas a final, o que é <span class="about__title-highlight">Consórcio?</span>
            </h2>
            <p class="about__description">
              O consórcio é uma modalidade de <span class="about__highlight">compra planejada, onde um grupo de pessoas se reúne para adquirir um bem ou serviço de forma parcelada e sem juros</span>. Cada participante contribui mensalmente para um fundo comum, e a contemplação acontece por meio de sorteios ou lances. Essa é uma alternativa segura e acessível para quem deseja conquistar um imóvel, veículo ou outro bem de alto valor, sem comprometer o orçamento com juros elevados.
            </p>
            <a href="/como-funciona" class="about__cta">
              Saiba mais
              <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="7" y1="17" x2="17" y2="7" stroke="currentColor" stroke-width="2"/>
                <polyline points="7 7 17 7 17 17" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
          </div>
          <div class="about__grid">
            <!-- Main Card -->
            <div class="about__card about__card--main">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop"
                alt="Consórcio: a melhor forma de planejar e realizar seus sonhos"
                class="about__card-image"
              >
              <div class="about__card-content">
                <h3 class="about__card-title">Consórcio: a melhor forma de planejar e realizar seus sonhos!</h3>
                <a href="/saiba-mais" class="about__card-link">Saiba mais →</a>
              </div>
            </div>

            <!-- Small Card A -->
            <div class="about__card">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop"
                alt="Como funciona?"
                class="about__card-image"
              >
              <div class="about__card-content">
                <h3 class="about__card-title">Como funciona?</h3>
                <a href="/como-funciona" class="about__card-link">Saiba mais →</a>
              </div>
            </div>

            <!-- Small Card B -->
            <div class="about__card">
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop"
                alt="O que é possível comprar com consórcio?"
                class="about__card-image"
              >
              <div class="about__card-content">
                <h3 class="about__card-title">O que é possível comprar com consórcio?</h3>
                <a href="/possibilidades" class="about__card-link">Saiba mais →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Advantages Section -->
    <section class="advantages">
      <div class="container">
        <div class="advantages__header">
          <h2 class="advantages__title">
            Vantagens de ter<br>
            um <span class="advantages__title-highlight">Consórcio Racon</span>
          </h2>
        </div>

        <div class="advantages__grid">
          <!-- Card 1 -->
          <div class="advantages__card">
            <div class="advantages__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3 class="advantages__card-title">Sem juros</h3>
            <p class="advantages__card-text">
              Diferente de financiamentos, no consórcio você paga apenas a taxa administrativa, tornando a compra mais econômica.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="advantages__card">
            <div class="advantages__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3 class="advantages__card-title">Planejamento financeiro</h3>
            <p class="advantages__card-text">
              Permite a aquisição de bens de forma organizada, sem comprometer seu orçamento com altos juros.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="advantages__card">
            <div class="advantages__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 21v-7m4 7v-7m4 7V9m4 12V9m4 12V3" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3 class="advantages__card-title">Flexibilidade de pagamento</h3>
            <p class="advantages__card-text">
              Possibilidade de escolher planos e prazos que se encaixam na sua realidade financeira.
            </p>
          </div>

          <!-- Card 4 -->
          <div class="advantages__card">
            <div class="advantages__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m12-4a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <h3 class="advantages__card-title">Lances e sorteios</h3>
            <p class="advantages__card-text">
              Você pode antecipar sua contemplação dando lances ou aguardar os sorteios mensais.
            </p>
          </div>
        </div>

        <div class="advantages__cta">
          <a href="/simulador" class="advantages__button">
            Simule seu Consórcio
            <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" stroke-width="2"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Units Section -->
    <section class="units">
      <div class="container">
        <div class="units__content">
          <div class="units__image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop"
              alt="Encontre uma unidade Racon perto de você"
              class="units__image"
            >
            <div class="units__image-overlay">
              <div class="units__location-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor"/>
                </svg>
              </div>
              <span class="units__image-text">
                Encontre uma unidade<br>
                Racon perto de você!
              </span>
            </div>
          </div>

          <div class="units__text">
            <div class="units__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor"/>
              </svg>
            </div>
            <h2 class="units__title">
              Nossas unidades:<br>
              <span class="units__title-highlight">encontre a Racon<br>Consórcios perto de você</span>
            </h2>
            <p class="units__description">
              A Racon Consórcios está presente em diversas regiões, oferecendo atendimento especializado para ajudá-lo a planejar e conquistar seus objetivos com segurança e praticidade. Nossas unidades contam com equipes qualificadas para tirar suas dúvidas, apresentar as melhores opções de consórcio e acompanhar você em cada etapa do processo. Encontre a unidade mais próxima e <span class="units__description-highlight">venha conhecer as vantagens de investir no seu futuro com a Racon Consórcio!</span>
            </p>
            <a href="/unidades" class="units__button">
              Nossas unidades
              <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
     <!-- Trust Section -->
     <section class="trust">
        <div class="container">
          <div class="trust__content">
            <div class="trust__text">
              <h2 class="trust__title">
                <span class="trust__title-highlight">Racon Consórcio:</span><br>
                confiança e soluções<br>
                para realizar seus<br>
                objetivos
              </h2>
              <p class="trust__description">
                A empresa é uma das <span class="trust__description-highlight">líderes no mercado</span> de consórcios de
                pesados e está entre as maiores administradoras de consórcios de
                imóveis. Sua atuação no mercado baseia-se em três premissas:
                relacionamento, flexibilidade e credibilidade.
              </p>
            </div>

            <div class="trust__stats">
              <div class="trust__stat">
                <div class="trust__stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 1 0-1.41-1.41z" fill="currentColor"/>
                  </svg>
                </div>
                <div class="trust__stat-content">
                  <div class="trust__stat-value">+200</div>
                  <div class="trust__stat-label">Pontos de Vendas</div>
                </div>
              </div>

              <div class="trust__stat">
                <div class="trust__stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor"/>
                  </svg>
                </div>
                <div class="trust__stat-content">
                  <div class="trust__stat-value">R$1.91 Bi</div>
                  <div class="trust__stat-label">Créditos Comercializados</div>
                </div>
              </div>

              <div class="trust__stat">
                <div class="trust__stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" fill="currentColor"/>
                    <circle cx="12" cy="9" r="2.5" fill="currentColor"/>
                  </svg>
                </div>
                <div class="trust__stat-content">
                  <div class="trust__stat-value">11</div>
                  <div class="trust__stat-label">Estados Localizados</div>
                </div>
              </div>

              <div class="trust__stat">
                <div class="trust__stat-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L4.5 9.5l1.41 1.41L12 4.83l6.09 6.08L19.5 9.5L12 2zm0 5L4.5 14.5l1.41 1.41L12 9.83l6.09 6.08 1.41-1.41L12 7z" fill="currentColor"/>
                  </svg>
                </div>
                <div class="trust__stat-content">
                  <div class="trust__stat-value">+158 mil</div>
                  <div class="trust__stat-label">Contemplações</div>
                </div>
              </div>
            </div>

            <a href="/sobre" class="trust__button">
              Saiba mais
              <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
          </div>
        </div>
      </section>



    <!-- Franchisee Section -->
    <section class="franchisee">
      <div class="container">
        <div class="franchisee__content">
          <div class="franchisee__header">
            <h2 class="franchisee__title">
              Seja um <span>Franqueado</span>
            </h2>
          </div>

          <div class="franchisee__grid">
            <!-- Card 1 -->
            <div class="franchisee__card">
              <div class="franchisee__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" stroke-width="2"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="franchisee__card-content">
                <h3 class="franchisee__card-title">Suporte ao parceiro</h3>
                <p class="franchisee__card-text">
                  Todo acompanhamento necessário, desde a abertura até o andamento do negócio, passando pelo plano administrativo e comercial.
                </p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="franchisee__card">
              <div class="franchisee__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="franchisee__card-content">
                <h3 class="franchisee__card-title">Incentivo a vendas</h3>
                <p class="franchisee__card-text">
                  Programas e promoções de incentivo às vendas, para estimular o parceiro a alcançar suas metas e aumentar seus resultados.
                </p>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="franchisee__card">
              <div class="franchisee__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2"/>
                  <path d="M22 4L12 14.01l-3-3" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="franchisee__card-content">
                <h3 class="franchisee__card-title">Qualificação</h3>
                <p class="franchisee__card-text">
                  Apoio completo para a equipe de vendas testar capacidades para diferentes abordagens e métodos para oferecer nossos produtos e soluções.
                </p>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="franchisee__card">
              <div class="franchisee__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="franchisee__card-content">
                <h3 class="franchisee__card-title">Produtos especiais</h3>
                <p class="franchisee__card-text">
                  Planos de consórcio exclusivos e adequados para qualquer setor da empresa e família investir.
                </p>
              </div>
            </div>

            <!-- Card 5 -->
            <div class="franchisee__card">
              <div class="franchisee__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="2"/>
                  <path d="M19 10v5a7 7 0 1 1-14 0v-5" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="franchisee__card-content">
                <h3 class="franchisee__card-title">Publicidade da marca</h3>
                <p class="franchisee__card-text">
                  Investimento por parte da franqueadora em materiais e ações promocionais que fortalecem a visibilidade da marca e a atuação comercial do parceiro.
                </p>
              </div>
            </div>

            <!-- Card 6 -->
            <div class="franchisee__card">
              <div class="franchisee__card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" stroke-width="2"/>
                  <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" stroke-width="2"/>
                </svg>
              </div>
              <div class="franchisee__card-content">
                <h3 class="franchisee__card-title">Desenvolvimento contínuo</h3>
                <p class="franchisee__card-text">
                  Aprimoramento constante de serviços, técnicas e recursos tecnológicos que oferecem maior competitividade ao negócio.
                </p>
              </div>
            </div>
          </div>

          <div class="franchisee__cta">
            <a href="/seja-franqueado" class="franchisee__button">
              Saiba mais
              <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="blog">
      <div class="container">
        <div class="blog__content">
          <div class="blog__header">
            <div class="blog__title-wrapper">
              <h2 class="blog__title">Blog Racon Consórcios:</h2>
              <h3 class="blog__subtitle">soluções para seu futuro financeiro</h3>
            </div>
            <a href="/blog" class="blog__button">
              Leia o blog
              <svg class="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" stroke-width="2"/>
              </svg>
            </a>
          </div>

          <div class="blog__grid">
            <!-- Blog Card 1 -->
            <div class="blog__card">
              <div class="blog__card-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop"
                  alt="Artigo sobre consórcio"
                  class="blog__card-image"
                >
                <div class="blog__card-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17l10-10M7 7h10v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div class="blog__card-content">
                <div class="blog__card-tag">Consórcio</div>
                <h3 class="blog__card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <div class="blog__card-footer">
                  <div class="blog__card-author">
                    <div class="blog__card-avatar">
                      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Erica Rosa">
                    </div>
                    <div class="blog__card-meta">
                      <div class="blog__card-name">Erica Rosa</div>
                      <div class="blog__card-date">02 de agosto, 2024</div>
                    </div>
                  </div>
                  <div class="blog__card-reading-time">Leitura 6 min.</div>
                </div>
              </div>
            </div>

            <!-- Blog Card 2 -->
            <div class="blog__card">
              <div class="blog__card-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop"
                  alt="Artigo sobre novidades"
                  class="blog__card-image"
                >
                <div class="blog__card-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17l10-10M7 7h10v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div class="blog__card-content">
                <div class="blog__card-tag">Novidade</div>
                <h3 class="blog__card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <div class="blog__card-footer">
                  <div class="blog__card-author">
                    <div class="blog__card-avatar">
                      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Erica Rosa">
                    </div>
                    <div class="blog__card-meta">
                      <div class="blog__card-name">Erica Rosa</div>
                      <div class="blog__card-date">02 de agosto, 2024</div>
                    </div>
                  </div>
                  <div class="blog__card-reading-time">Leitura 6 min.</div>
                </div>
              </div>
            </div>

            <!-- Blog Card 3 -->
            <div class="blog__card">
              <div class="blog__card-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop"
                  alt="Artigo sobre consórcio"
                  class="blog__card-image"
                >
                <div class="blog__card-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17l10-10M7 7h10v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
              <div class="blog__card-content">
                <div class="blog__card-tag">Consórcio</div>
                <h3 class="blog__card-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                <div class="blog__card-footer">
                  <div class="blog__card-author">
                    <div class="blog__card-avatar">
                      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Erica Rosa">
                    </div>
                    <div class="blog__card-meta">
                      <div class="blog__card-name">Erica Rosa</div>
                      <div class="blog__card-date">02 de agosto, 2024</div>
                    </div>
                  </div>
                  <div class="blog__card-reading-time">Leitura 6 min.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
        <div class="container">
          <div class="testimonials__content">
            <div class="testimonials__header">
                <div class="testimonials__header--text">
                    <h2 class="testimonials__title">
                      objetivos que a Racon ajudou a realizar
                    </h2>
                    <p class="testimonials__description">
                      Os depoimentos de nossos clientes refletem a confiança e a satisfação de quem já realizou seus objetivos com a Racon Consórcios. Histórias reais mostram como o consórcio foi a escolha certa para conquistar imóveis, veículos e muito mais. Confira as experiências e inspire-se para dar o próximo passo!
                    </p>
                </div>
            <div class="testimonials__card testimonials__card--featured">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop"
                  alt="Depoimento sobre consórcio para casa própria"
                  class="testimonials__card-image"
                >
                <div class="testimonials__play-button">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                  </svg>
                </div>
                <div class="testimonials__card-overlay">
                  <h3 class="testimonials__card-title">O poder de conquistar</h3>
                  <p class="testimonials__card-subtitle">Consórcio para casa própria</p>
                </div>
              </div>

            </div>

            <div class="testimonials__grid">
              <!-- Featured Testimonial Row -->

              <!-- Cards Row (4 cards) -->
              <div class="testimonials__cards-row">
                <!-- Card 1 -->
                <div class="testimonials__card">
                  <img
                    src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop"
                    alt="Depoimento sobre consórcio para construir"
                    class="testimonials__card-image"
                  >
                  <div class="testimonials__play-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="testimonials__card-overlay">
                    <h3 class="testimonials__card-title">O poder de conquistar</h3>
                    <p class="testimonials__card-subtitle">Consórcio para construir</p>
                  </div>
                </div>

                <!-- Card 2 -->
                <div class="testimonials__card">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop"
                    alt="Depoimento sobre consórcio para construir"
                    class="testimonials__card-image"
                  >
                  <div class="testimonials__play-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="testimonials__card-overlay">
                    <h3 class="testimonials__card-title">O poder de conquistar</h3>
                    <p class="testimonials__card-subtitle">Consórcio para construir</p>
                  </div>
                </div>

                <!-- Card 3 -->
                <div class="testimonials__card">
                  <img
                    src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop"
                    alt="Depoimento sobre consórcio para construir"
                    class="testimonials__card-image"
                  >
                  <div class="testimonials__play-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="testimonials__card-overlay">
                    <h3 class="testimonials__card-title">O poder de conquistar</h3>
                    <p class="testimonials__card-subtitle">Consórcio para construir</p>
                  </div>
                </div>

                <!-- Card 4 -->
                <div class="testimonials__card">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop"
                    alt="Depoimento sobre consórcio para construir"
                    class="testimonials__card-image"
                  >
                  <div class="testimonials__play-button">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3l14 9-14 9V3z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div class="testimonials__card-overlay">
                    <h3 class="testimonials__card-title">O poder de conquistar</h3>
                    <p class="testimonials__card-subtitle">Consórcio para construir</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="testimonials__cta">
              <a href="/depoimentos" class="testimonials__button">
                Ver mais depoimentos
                <svg class="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" stroke-width="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    <!-- Newsletter Section -->
    <Newsletter />

  </section>
</template>

<style scoped>
/* Styles moved to home.scss */
</style>

