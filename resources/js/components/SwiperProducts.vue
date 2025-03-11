<script>
export default {
  methods: {
    checkMobile() {
      // Implement your mobile detection logic here
      return window.innerWidth <= 768;
    },
    getImage(image, imageMobile = null) {
      if (!image) {
        return '';
      }
      if (imageMobile === null) {
        imageMobile = image;
      }
      return this.checkMobile() ? imageMobile : image;
    },
    ignoreTags(text) {
      return text.replace(/<[^>]*>/g, '');
    },
    getImageSrc(imageDataString) {
      try {
        const imageData = JSON.parse(imageDataString);

        if (imageData && imageData.src) {
          return imageData.src;
        }
      } catch (error) {
      }

      return "";
    },
    imgAlt(imageDataString) {
      try {
        const imageData = JSON.parse(imageDataString);

        if (imageData && imageData.alt) {
          return imageData.alt;
        }
      } catch (error) {
      }

      return "";
    },
    imgTitle(imageDataString) {
      try {
        const imageData = JSON.parse(imageDataString);

        if (imageData && imageData.title) {
          return imageData.title;
        }
      } catch (error) {
      }

      return "";
    },
    assetJson(folder, image, imageMobile) {
      const src = this.getImageSrc(this.getImage(image, imageMobile))
      if (!src) {
        return '';
      }
      return '/userfiles/' + folder + '/' + src;
    }
  },
};
</script>
<script setup>
defineProps({ categories: Object });
</script>
<template>
    <div v-if="categories" class="swiper swiperProduct" data-sequencial>
      <div class="swiper-wrapper">
        <div v-for="categorySwiper in categories" :key="categorySwiper.id" class="swiper-slide" data-sequencial-stagger="up">
          <div class="product-item">
            <a :href="`/product-list/${categorySwiper.slug}`" class="stretched-link"></a>
            <div class="product-item--image">
              <img :src="assetJson('produtos/categorias', categorySwiper.thumb_image, categorySwiper.thumb_image_mobile)" :title="imgTitle(categorySwiper.thumb_image)" :alt="imgAlt(categorySwiper.thumb_image)">
            </div>
            <div class="product-item--wrapper">
              <h4 class="product-item--sub">categoria</h4>
              <h3 class="product-item--title">{{ categorySwiper.title }}</h3>
              <p class="product-item--text" v-html="ignoreTags(categorySwiper.thumb_description)"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  