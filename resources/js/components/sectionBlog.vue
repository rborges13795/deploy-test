<script>
import commonMethods from '../mixins/commonMethods';
export default {
  mixins: [commonMethods],
};
</script>
<script setup>
  defineProps({
    data: Object,
});
</script>
<template>
<div v-if="data.page.blog_show && data.posts" class="section_blog">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-lg-4 col-12" data-animation="right">
                <h4 class="blog--sub">
                    {{data.page.blog_title_top}}
                </h4>
                <h3 class="blog--title">
                    {{data.page.blog_title}}
                </h3>
            </div>
            <div class="col-lg-4 col-12 d-flex flex-column align-items-end" data-animation="left">
                <p class="blog--text" v-html="ignoreTags(data.page.blog_text)"></p>
                <a v-if="data.page.blog_button_title" :href="data.blogRoute" class="blog--link d-none d-lg-flex">{{data.page.blog_button_title}}</a>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="blog--grid d-none d-lg-grid" data-sequencial>
                    <div class="blog--card position-relative" v-for="post in data.posts" data-sequencial-stagger="up">
                        <div class="blog--imgHold">
                            <img class="talk--bg" :src="assetJson('blog/posts', post.thumb_image, post.thumb_image_mobile)" :title="imgTitleJson(post.thumb_image)" :alt="imgAltJson(post.thumb_image)">
                        </div>
                        <div class="blog--info">
                            <div class="blog--tag">
                                {{post.category.title}} | {{formatDateExtenso(post.date)}}
                            </div>
                            <h3 class="blog--titleCard">
                                {{post.title}}
                            </h3>
                            <p class="blog--textCard" v-html="character_limiter(ignoreTags(post.text), 130)"></p>
                            <a :href="post.route" class="blog--link stretched-link">{{("ler mais")}}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="swiper blogSlider d-lg-none">
        <div class="swiper-wrapper" v-for="post in data.posts">
            <div class="swiper-slide">
                <div class="blog--card position-relative">
                    <div class="blog--imgHold">
                        <img class="talk--bg" :src="assetJson('blog/posts', post.thumb_image, post.thumb_image_mobile)" :title="imgTitleJson(post.thumb_image)" :alt="imgAltJson(post.thumb_image)">
                    </div>
                    <div class="blog--info">
                        <div class="blog--tag">
                            {{post.category.title}} | {{formatDateExtenso(post.date)}}
                        </div>
                        <h3 class="blog--titleCard">
                            {{post.title}}
                        </h3>
                        <p class="blog--textCard" v-html="character_limiter(ignoreTags(post.title), 130)"></p>
                        <a :href="post.route" class="blog--link stretched-link">{{("ler mais")}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <a v-if="data.page.blog_button_title" :href="data.blogRoute" class="blog--link d-flex d-lg-none">{{data.page.blog_button_title}}</a>
            </div>
        </div>
    </div>
</div>
</template>
  