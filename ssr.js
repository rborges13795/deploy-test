import { ref, mergeProps, useSSRContext, onMounted, onUnmounted, unref, withCtx, createVNode, createTextVNode, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrRenderStyle } from "vue/server-renderer";
import Swiper from "swiper";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Link, createInertiaApp } from "@inertiajs/vue3";
import { renderToString } from "@vue/server-renderer";
import require$$0 from "process";
import require$$1 from "http";
const _sfc_main$4 = {
  __name: "Newsletter",
  __ssrInlineRender: true,
  setup(__props) {
    const fullName = ref("");
    const email = ref("");
    const acceptedPrivacyPolicy = ref(false);
    const isSubmitting = ref(false);
    const showSuccess = ref(false);
    const showError = ref(false);
    const errorMessage = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "newsletter" }, _attrs))}><div class="newsletter__container"><div class="newsletter__content"><h2 class="newsletter__title">Assine a nossa Newsletter</h2><p class="newsletter__description">e fique por dentro das novidades</p><form class="newsletter__form"><div class="newsletter__form-row"><div class="newsletter__form-group"><input type="text" class="newsletter__input" placeholder="Nome Completo"${ssrRenderAttr("value", fullName.value)} required></div><div class="newsletter__form-group"><input type="email" class="newsletter__input" placeholder="E-mail"${ssrRenderAttr("value", email.value)} required><button type="submit" class="newsletter__submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></button></div></div><div class="newsletter__form-checkbox"><label class="newsletter__checkbox-label"><input type="checkbox" class="newsletter__checkbox"${ssrIncludeBooleanAttr(Array.isArray(acceptedPrivacyPolicy.value) ? ssrLooseContain(acceptedPrivacyPolicy.value, null) : acceptedPrivacyPolicy.value) ? " checked" : ""} required><span class="newsletter__checkbox-custom"></span><span class="newsletter__checkbox-text"> Confirmo que li e concordo com a <a href="/politica-de-privacidade" class="newsletter__link">Política de Privacidade</a> e autorizo o tratamento dos meus dados pessoais para os fins nela descritos. </span></label></div></form>`);
      if (showSuccess.value) {
        _push(`<div class="newsletter__success"> Obrigado por se inscrever em nossa newsletter! </div>`);
      } else {
        _push(`<!---->`);
      }
      if (showError.value) {
        _push(`<div class="newsletter__error">${ssrInterpolate(errorMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/site/assets/js/components/Newsletter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_0 = "/build/assets/logo-spavx55O.svg";
const scrollThreshold = 50;
const _sfc_main$3 = {
  __name: "header",
  __ssrInlineRender: true,
  props: {
    data: Object
  },
  setup(__props) {
    const isMenuOpen = ref(false);
    const isScrolled = ref(false);
    function debounce(func, delay) {
      let timeoutId;
      return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    }
    function handleScroll() {
      isScrolled.value = window.scrollY > scrollThreshold;
    }
    let debouncedHandleScroll;
    onMounted(() => {
      isScrolled.value = window.scrollY > scrollThreshold;
      debouncedHandleScroll = debounce(handleScroll, 200);
      window.addEventListener("scroll", debouncedHandleScroll);
    });
    onUnmounted(() => {
      if (debouncedHandleScroll) {
        window.removeEventListener("scroll", debouncedHandleScroll);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["header remove-cursor-banner", { "scrolled": isScrolled.value }],
        id: "header"
      }, _attrs))}>`);
      if (!isScrolled.value) {
        _push(`<div class="bg-primary py-2"><div class="container"><div class="d-flex justify-content-center align-items-center"><div class="text-white txt-number"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.7852 12.092C13.4943 12.9586 12.0757 13.7857 11.4574 13.8645C10.8391 13.9432 10.8391 14.4159 7.31091 12.9586C3.81913 11.4618 1.6004 7.64122 1.41854 7.3655C1.23667 7.12918 0 5.35673 0 3.54489C0 1.73306 0.872944 0.827141 1.2003 0.472651C1.52765 0.118162 1.89138 0 2.10962 0C2.32785 0 2.58246 0.0393871 2.76432 0.0393871C2.98256 0.0393871 3.23717 -0.0787766 3.52815 0.66959C3.81913 1.41796 4.51021 3.22979 4.58296 3.42673C4.6557 3.62367 4.72845 3.82061 4.61933 4.05693C4.51021 4.29326 4.43747 4.45081 4.29198 4.68714C4.11011 4.88408 3.92825 5.15979 3.78276 5.31734C3.6009 5.51428 3.41903 5.71122 3.63727 6.06571C3.8555 6.4202 4.54659 7.64122 5.56502 8.62591C6.87444 9.88632 8.00199 10.2802 8.32934 10.4771C8.6567 10.6741 8.87493 10.6347 9.0568 10.3984C9.27503 10.162 9.92974 9.33489 10.148 8.94101C10.3662 8.58652 10.6208 8.62591 10.9118 8.74407C11.2392 8.86224 12.9123 9.76815 13.276 9.96509C13.6034 10.162 13.858 10.2408 13.9307 10.3984C14.0399 10.4771 14.0399 11.2255 13.7852 12.092Z" fill="white"></path></svg> Televendas: <a href="tel:08006544888" class="text-white text-decoration-none">0800 654 4888</a></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<nav class="navbar navbar-expand-lg navbar-light bg-white"><div class="container"><div class="navbar-brand-container">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "navbar-brand",
        href: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", unref(_imports_0))} alt="Racon Consórcios" class="logo"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: unref(_imports_0),
                alt: "Racon Consórcios",
                class: "logo"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="cta-buttons d-none d-lg-flex">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/seja-franqueado",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Seja um Franqueado`);
          } else {
            return [
              createTextVNode("Seja um Franqueado")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/simulador",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Simule seu Consórcio`);
          } else {
            return [
              createTextVNode("Simule seu Consórcio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/cliente",
        class: "btn btn-outline-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Área do cliente`);
          } else {
            return [
              createTextVNode("Área do cliente")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="navbar-toggler d-lg-none" type="button"${ssrRenderAttr("aria-expanded", isMenuOpen.value)}><span class="navbar-toggler-icon"></span></button></div><div class="${ssrRenderClass([{ "show": isMenuOpen.value }, "navbar-collapse"])}"><ul class="navbar-nav"><li class="nav-item">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "nav-link",
        href: "/sobre"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`A Racon Consórcios`);
          } else {
            return [
              createTextVNode("A Racon Consórcios")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "nav-link",
        href: "/unidades"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Unidades`);
          } else {
            return [
              createTextVNode("Unidades")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "nav-link",
        href: "/como-funciona"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Como funciona`);
          } else {
            return [
              createTextVNode("Como funciona")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item dropdown">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "nav-link dropdown-toggle",
        href: "#",
        id: "tiposConsorcio",
        role: "button",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tipos de Consórcio `);
          } else {
            return [
              createTextVNode(" Tipos de Consórcio ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="dropdown-menu" aria-labelledby="tiposConsorcio"><li>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "dropdown-item",
        href: "/consorcio-de-carros"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Consórcio de Carros`);
          } else {
            return [
              createTextVNode("Consórcio de Carros")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "dropdown-item",
        href: "/consorcio-de-imoveis"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Consórcio de Imóveis`);
          } else {
            return [
              createTextVNode("Consórcio de Imóveis")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "dropdown-item",
        href: "/consorcio-de-servicos"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Consórcio de Serviços`);
          } else {
            return [
              createTextVNode("Consórcio de Serviços")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="nav-item">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "nav-link",
        href: "/simulador"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Simulador`);
          } else {
            return [
              createTextVNode("Simulador")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "nav-link",
        href: "/seja-franqueado"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Seja um Franqueado`);
          } else {
            return [
              createTextVNode("Seja um Franqueado")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "nav-link",
        href: "/contato"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Fale Conosco`);
          } else {
            return [
              createTextVNode("Fale Conosco")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div class="cta-buttons d-lg-none">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/seja-franqueado",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Seja um Franqueado`);
          } else {
            return [
              createTextVNode("Seja um Franqueado")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/simulador",
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Simule seu Consórcio`);
          } else {
            return [
              createTextVNode("Simule seu Consórcio")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/cliente",
        class: "btn btn-outline-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Área do cliente`);
          } else {
            return [
              createTextVNode("Área do cliente")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="social-icons"><a href="https://facebook.com/raconconsorcio" target="_blank" rel="noopener noreferrer" class="social-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path></svg></a><a href="https://instagram.com/raconconsorcio" target="_blank" rel="noopener noreferrer" class="social-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg></a><a href="https://linkedin.com/company/racon-consorcio" target="_blank" rel="noopener noreferrer" class="social-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg></a><a href="https://youtube.com/@raconconsorcio" target="_blank" rel="noopener noreferrer" class="social-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a></div></div></div></nav></header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/site/assets/js/layout/header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const __default__$2 = {
  methods: {
    lang(text) {
      var _a, _b;
      return ((_b = (_a = this.data) == null ? void 0 : _a.lang) == null ? void 0 : _b[text]) || text;
    }
  }
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$2, {
  __name: "footer",
  __ssrInlineRender: true,
  props: { data: Object },
  setup(__props) {
    onMounted(() => {
      const footerElement = document.querySelector(".footer");
      if (footerElement) {
        const computedStyle = window.getComputedStyle(footerElement);
        console.log("Footer computed styles:", {
          backgroundColor: computedStyle.backgroundColor,
          color: computedStyle.color,
          display: computedStyle.display,
          padding: computedStyle.padding,
          margin: computedStyle.margin
        });
      } else {
        console.error("Footer element not found");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        id: "footer",
        class: "footer"
      }, _attrs))} data-v-c3cfc901><div class="footer__main" data-v-c3cfc901><div class="container" data-v-c3cfc901><div class="footer__grid" data-v-c3cfc901><div class="footer__column footer__column--brand" data-v-c3cfc901><div class="footer__logo" data-v-c3cfc901><img${ssrRenderAttr("src", _imports_0)} alt="Racon Consórcios" class="footer__logo-img" data-v-c3cfc901></div><div class="footer__contact" data-v-c3cfc901><div class="footer__contact-item" data-v-c3cfc901><h4 class="footer__contact-title" data-v-c3cfc901>Televendas:</h4><a href="tel:08006544888" class="footer__contact-link" data-v-c3cfc901>0800 645 4888</a></div><div class="footer__contact-item" data-v-c3cfc901><h4 class="footer__contact-title" data-v-c3cfc901>Central de Relacionamento:</h4><a href="tel:08006442724" class="footer__contact-link" data-v-c3cfc901>0800 644 2724</a></div><div class="footer__contact-item" data-v-c3cfc901><h4 class="footer__contact-title" data-v-c3cfc901>Ouvidoria:</h4><a href="tel:08007030404" class="footer__contact-link" data-v-c3cfc901>0800 703 0404</a></div></div></div><div class="footer__column" data-v-c3cfc901><h3 class="footer__title" data-v-c3cfc901>Acesso Rápido</h3><ul class="footer__list" data-v-c3cfc901><li class="footer__list-item" data-v-c3cfc901><a href="/a-racon" class="footer__link" data-v-c3cfc901>A Racon</a></li><li class="footer__list-item" data-v-c3cfc901><a href="/como-funciona" class="footer__link" data-v-c3cfc901>Como funciona?</a></li><li class="footer__list-item" data-v-c3cfc901><a href="/tipos-de-consorcio" class="footer__link" data-v-c3cfc901>Tipos de Consórcio</a></li><li class="footer__list-item" data-v-c3cfc901><a href="/fale-conosco" class="footer__link" data-v-c3cfc901>Fale Conosco</a></li><li class="footer__list-item" data-v-c3cfc901><a href="/seja-um-franqueado" class="footer__link" data-v-c3cfc901>Seja um Franqueado</a></li><li class="footer__list-item" data-v-c3cfc901><a href="/unidades" class="footer__link" data-v-c3cfc901>Unidades</a></li><li class="footer__list-item" data-v-c3cfc901><a href="/blog" class="footer__link" data-v-c3cfc901>Blog</a></li></ul></div><div class="footer__column" data-v-c3cfc901><h3 class="footer__title" data-v-c3cfc901>Suporte</h3><ul class="footer__list" data-v-c3cfc901><li class="footer__list-item" data-v-c3cfc901><a href="/politica-de-cookies" class="footer__link" data-v-c3cfc901>Política de Cookies</a></li><li class="footer__list-item" data-v-c3cfc901><a href="/politica-de-privacidade" class="footer__link" data-v-c3cfc901>Política de Privacidade</a></li><li class="footer__list-item" data-v-c3cfc901><a href="/regulamento-geral-de-bens-moveis" class="footer__link" data-v-c3cfc901>Regulamento geral de bens móveis</a></li><li class="footer__list-item" data-v-c3cfc901><a href="/regulamento-geral-de-bens-imoveis" class="footer__link" data-v-c3cfc901>Regulamento geral de bens imóveis</a></li><li class="footer__list-item" data-v-c3cfc901><a href="/regulamento-geral-de-bens-de-servicos" class="footer__link" data-v-c3cfc901>Regulamento geral de bens de serviços</a></li><li class="footer__list-item" data-v-c3cfc901><a href="/area-do-cliente" class="footer__link" data-v-c3cfc901>Área do Cliente</a></li></ul></div><div class="footer__column" data-v-c3cfc901><h3 class="footer__title" data-v-c3cfc901>Redes Sociais</h3><ul class="footer__social-list" data-v-c3cfc901><li class="footer__social-item" data-v-c3cfc901><a href="https://facebook.com/raconconsorcio" target="_blank" rel="noopener noreferrer" class="footer__social-link" data-v-c3cfc901><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" data-v-c3cfc901><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" data-v-c3cfc901></path></svg><span data-v-c3cfc901>Facebook</span></a></li><li class="footer__social-item" data-v-c3cfc901><a href="https://instagram.com/raconconsorcio" target="_blank" rel="noopener noreferrer" class="footer__social-link" data-v-c3cfc901><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" data-v-c3cfc901><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" data-v-c3cfc901></path></svg><span data-v-c3cfc901>Instagram</span></a></li><li class="footer__social-item" data-v-c3cfc901><a href="https://linkedin.com/company/racon-consorcio" target="_blank" rel="noopener noreferrer" class="footer__social-link" data-v-c3cfc901><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" data-v-c3cfc901><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" data-v-c3cfc901></path></svg><span data-v-c3cfc901>LinkedIn</span></a></li><li class="footer__social-item" data-v-c3cfc901><a href="https://youtube.com/@raconconsorcio" target="_blank" rel="noopener noreferrer" class="footer__social-link" data-v-c3cfc901><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" data-v-c3cfc901><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" data-v-c3cfc901></path></svg><span data-v-c3cfc901>YouTube</span></a></li></ul></div><div class="footer__column footer__column--cta" data-v-c3cfc901><div class="footer__member" data-v-c3cfc901><span class="footer__member-text" data-v-c3cfc901>Member</span><span class="footer__member-logo" data-v-c3cfc901>RANDS</span></div><a href="/simulador" class="footer__cta-button" data-v-c3cfc901> Simule seu Consórcio </a></div></div></div></div><div class="footer__bottom" data-v-c3cfc901><div class="container" data-v-c3cfc901><div class="footer__legal" data-v-c3cfc901><div class="footer__legal-text" data-v-c3cfc901><p data-v-c3cfc901>A Racon Consórcios é administrada pela Randon Administradora de Consórcios Ltda., empresa prestadora de serviços financeiros, autorizada pelo Banco Central do Brasil. Tem sede na Avenida Rubem Bento Alves, 1469 Sala 04, Interlagos, Caxias do Sul/RS, CEP 95052-105 e é inscrita no CNPJ sob o número 91.108.027/0001-58. <a href="https://site.racon" class="footer__legal-link" data-v-c3cfc901>Visite o site Racon</a></p></div><div class="footer__legal-logo" data-v-c3cfc901><span class="footer__legal-img" data-v-c3cfc901>ABAC</span></div></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/site/assets/js/layout/footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-c3cfc901"]]);
const __default__$1 = {
  components: { Link },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    changeLanguage() {
      console.log("Language changed to:", this.selectedLanguage);
    }
  },
  components: {
    Header: _sfc_main$3,
    Footer
  }
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "Layout",
  __ssrInlineRender: true,
  props: {
    data: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$3, { data: __props.data }, null, _parent));
      _push(`<article>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</article>`);
      _push(ssrRenderComponent(Footer, { data: __props.data }, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/site/assets/js/layout/Layout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const commonMethods = {
  methods: {
    checkMobile() {
      var _a;
      return ((_a = this.data) == null ? void 0 : _a.checkMobile) ?? false;
    },
    getImage(image, imageMobile = null) {
      if (!image) {
        return "";
      }
      if (imageMobile === null) {
        imageMobile = image;
      }
      return this.checkMobile() ? imageMobile : image;
    },
    ignoreTags(str, replace = ["</p><p>"], tags = ["<br>"], letTags = "<br>, <strong>, <span>, <b>") {
      str = str.replace(new RegExp(replace.join("|"), "g"), tags.join(""));
      const allowedTags = new RegExp(`<(?!(${letTags.replace(/ /g, "").split(",").join("|")}))\\w+>`, "g");
      str = str.replace(allowedTags, "");
      str = str.replace(/&nbsp;/g, " ");
      while (str.includes("<br><br>") || str.includes("<br> <br>")) {
        str = str.replace(/<br><br>/g, "<br>").replace(/<br> <br>/g, "<br>");
      }
      return str.trim();
    },
    imgSrcJson(imageDataString) {
      try {
        const imageData = JSON.parse(imageDataString);
        return (imageData == null ? void 0 : imageData.src) || "";
      } catch (error) {
        return "";
      }
    },
    imgAltJson(imageDataString) {
      try {
        const imageData = JSON.parse(imageDataString);
        return (imageData == null ? void 0 : imageData.alt) || "";
      } catch (error) {
        return "";
      }
    },
    imgTitleJson(imageDataString) {
      try {
        const imageData = JSON.parse(imageDataString);
        return (imageData == null ? void 0 : imageData.title) || "";
      } catch (error) {
        return "";
      }
    },
    assetJson(folder, image, imageMobile) {
      const src = this.imgSrcJson(this.getImage(image, imageMobile));
      return src ? `/userfiles/${folder}/${src}` : "";
    },
    asset(path) {
      const baseRoute = document.getElementById("baseRoute").value;
      return baseRoute + path;
    },
    character_limiter(text, limit) {
      if (!text) return "";
      if (text.length <= limit) return text;
      return text.substring(0, limit) + "...";
    },
    formatDateExtenso(dateString) {
      if (!dateString) return "";
      const date = new Date(dateString);
      if (isNaN(date)) return "Data inválida";
      const meses = {
        "01": "Janeiro",
        "02": "Fevereiro",
        "03": "Março",
        "04": "Abril",
        "05": "Maio",
        "06": "Junho",
        "07": "Julho",
        "08": "Agosto",
        "09": "Setembro",
        "10": "Outubro",
        "11": "Novembro",
        "12": "Dezembro"
      };
      const dia = date.getDate().toString().padStart(2, "0");
      const mes = meses[date.toLocaleDateString("pt-BR", { month: "2-digit" })];
      const ano = date.getFullYear();
      return `${dia} de ${mes}, ${ano}`;
    }
  }
};
function asset(path) {
  if (typeof window === "undefined") {
    return `/site/${path}`;
  }
  return window.asset ? window.asset(`site/${path}`) : `/site/${path}`;
}
const __default__ = {
  layout: _sfc_main$1,
  mixins: [commonMethods]
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "home",
  __ssrInlineRender: true,
  props: { data: Object },
  setup(__props) {
    const swiperInstance = ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(35e3);
    onMounted(() => {
      console.log("Initializing banner slider");
      swiperInstance.value = new Swiper(".banner__slider", {
        modules: [Autoplay, EffectFade, Navigation],
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 1e3,
        autoplay: {
          delay: 1e5,
          disableOnInteraction: false
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          prevEl: ".banner__nav--prev",
          nextEl: ".banner__nav--next"
        },
        on: {
          init: (sw) => {
            console.log("Swiper initialized successfully");
          },
          slideChange: () => {
            var _a;
            console.log("Slide changed to:", (_a = swiperInstance.value) == null ? void 0 : _a.activeIndex);
          }
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ id: "home" }, _attrs))} data-v-9ecd21eb><div class="banner" data-v-9ecd21eb><div class="banner__container" data-v-9ecd21eb><div class="banner__slider swiper" data-v-9ecd21eb><div class="swiper-wrapper" data-v-9ecd21eb><div class="swiper-slide" data-v-9ecd21eb><div class="banner__image" data-v-9ecd21eb><img${ssrRenderAttr("src", unref(asset)("img/photo-156.webp"))} alt="Banner 1" data-v-9ecd21eb></div><div class="banner__content container" data-v-9ecd21eb><div class="banner__text" data-v-9ecd21eb><h1 class="banner__title" data-v-9ecd21eb><span data-v-9ecd21eb>Realize seus objetivos</span><br data-v-9ecd21eb> com um <span class="banner__highlight" data-v-9ecd21eb>Consórcio</span><br data-v-9ecd21eb><span class="banner__highlight" data-v-9ecd21eb>Racon:</span> acessível e<br data-v-9ecd21eb> sem juros </h1><p class="banner__description" data-v-9ecd21eb> Entre para um grupo de pessoas com o mesmo objetivo e<br data-v-9ecd21eb> tenha a chance de ser contemplado por sorteio ou lance,<br data-v-9ecd21eb> acelerando sua conquista com planejamento e tranquilidade. </p><a href="/simulador" class="banner__cta" data-v-9ecd21eb> Simule seu Consórcio <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5511 0.491272L15.0207 7.49998L8.5511 14.5087L7.4489 13.4913L12.287 8.24998H0V6.74998H12.287L7.4489 1.50869L8.5511 0.491272Z" fill="white" data-v-9ecd21eb></path></svg></a></div><div class="banner__form" data-v-9ecd21eb><div class="banner__form-container" data-v-9ecd21eb><h2 class="banner__form-title" data-v-9ecd21eb>O que você deseja realizar?</h2><div class="banner__form-options" data-v-9ecd21eb><label class="banner__form-option" data-v-9ecd21eb><input type="radio" name="objective" value="vehicle" data-v-9ecd21eb><svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M1.44037 6.04695C0.693862 6.52388 0.424291 7.27039 0.610917 8.14131C0.756071 8.82561 1.02564 9.48917 1.25374 10.1735C1.29521 10.3186 1.35742 10.4638 1.44037 10.5882C1.56479 10.7956 1.81362 10.92 2.04172 10.9822L3.2859 11.2518C3.24442 11.0237 3.22369 10.7956 3.22369 10.5675C3.22369 10.0905 3.30663 9.63432 3.49326 9.19886C3.67989 8.78414 3.92872 8.41088 4.23977 8.0791C4.57155 7.74732 4.9448 7.49849 5.35952 7.3326C5.79499 7.14597 6.25119 7.06303 6.72812 7.06303C7.20505 7.06303 7.66125 7.14597 8.09671 7.3326C8.51144 7.51922 8.88469 7.76806 9.21647 8.0791C9.54825 8.41088 9.79709 8.78414 9.96298 9.19886C10.1496 9.63432 10.2326 10.0905 10.2326 10.5675C10.2326 10.9822 10.1703 11.3969 10.0252 11.7909H23.7733C23.6282 11.3969 23.566 11.0029 23.566 10.5675C23.566 10.0905 23.6489 9.63432 23.8355 9.19886C24.0222 8.78414 24.271 8.41088 24.5821 8.0791C24.9138 7.74732 25.2871 7.49849 25.7018 7.3326C26.1373 7.14597 26.5935 7.06303 27.0704 7.06303C27.5473 7.06303 28.0035 7.14597 28.439 7.3326C28.8537 7.51922 29.227 7.76806 29.5588 8.0791C29.8905 8.41088 30.1394 8.78414 30.3053 9.19886C30.4919 9.63432 30.5748 10.0905 30.5748 10.5675C30.5748 10.7333 30.5541 10.92 30.5334 11.0859L32.0264 10.8163C32.2545 10.7748 32.4618 10.6711 32.6277 10.526C33.0425 10.1735 33.2706 9.75874 33.2706 9.2196L33.2913 7.99616V7.97542C33.2913 7.74732 33.2291 7.51922 33.1047 7.3326C33.001 7.16671 32.9388 6.98008 32.9388 6.79346V5.40413C32.9388 4.94793 32.607 4.55394 32.1508 4.47099L30.5334 4.18068C29.9527 4.077 29.3721 3.89038 28.833 3.64154L25.5359 2.10706C24.5821 1.65086 23.566 1.31908 22.5292 1.09098C21.4923 0.862881 20.4348 0.738464 19.3772 0.738464C16.8889 0.738464 14.4213 1.40202 12.2647 2.6462L8.96764 4.55394C8.86395 4.61615 8.57365 4.55394 8.46997 4.55394C8.28334 4.55394 8.07598 4.57468 7.88935 4.57468C6.23045 4.67836 4.55081 4.80277 2.95412 5.30045C2.56013 5.42486 2.18687 5.59075 1.81362 5.77738C1.70994 5.86032 1.56479 5.94327 1.44037 6.04695ZM19.0662 4.63688L19.398 1.52644C26.3239 1.83748 26.158 4.63688 26.158 4.63688H19.0662ZM10.8754 4.63688C10.8754 4.63688 14.3798 1.50571 18.5063 1.50571L17.8842 4.63688H10.8754Z" fill="#09A7DA" data-v-9ecd21eb></path><path d="M27.091 7.85104C28.584 7.85104 29.8075 9.07449 29.8075 10.5675C29.8075 10.7956 29.7867 11.0237 29.7245 11.2311C29.4342 12.413 28.3559 13.284 27.091 13.284C26.0335 13.284 25.1003 12.6619 24.6649 11.7909C24.4783 11.4177 24.3746 11.0237 24.3746 10.5675C24.3746 9.05375 25.5773 7.85104 27.091 7.85104Z" fill="#09A7DA" data-v-9ecd21eb></path><path d="M6.74892 7.85104C8.24193 7.85104 9.46537 9.07449 9.46537 10.5675C9.46537 11.003 9.36169 11.4177 9.17507 11.7909C8.7396 12.6826 7.80647 13.284 6.74892 13.284C5.56695 13.284 4.55088 12.5167 4.17762 11.4592C4.07394 11.1896 4.03247 10.8785 4.03247 10.5675C4.03247 9.05375 5.23517 7.85104 6.74892 7.85104Z" fill="#09A7DA" data-v-9ecd21eb></path></svg><span class="banner__form-icon" data-v-9ecd21eb></span><span class="banner__form-label" data-v-9ecd21eb>Comprar um veículo?</span></label><label class="banner__form-option" data-v-9ecd21eb><input type="radio" name="objective" value="house" data-v-9ecd21eb><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M17.5433 10.0316L10.0579 3.59679C9.95579 3.50924 9.79528 3.50924 9.69314 3.59679L2.20773 10.0316C2.14936 10.09 2.10559 10.1629 2.10559 10.2505V17.1376C2.10559 17.6921 2.55792 18.1444 3.1124 18.1444H7.65034C7.81084 18.1444 7.92757 18.0131 7.92757 17.8672V13.2417C7.92757 12.8332 8.26318 12.4976 8.67174 12.4976H11.0501C11.4587 12.4976 11.7943 12.8332 11.7943 13.2417V17.8672C11.7943 18.0277 11.9256 18.1444 12.0715 18.1444H16.6095C17.164 18.1444 17.6163 17.6921 17.6163 17.1376V10.2505C17.6455 10.1629 17.6017 10.09 17.5433 10.0316Z" fill="#09A7DA" data-v-9ecd21eb></path><path d="M19.484 7.98881L16.0258 5.01216V2.26897C16.0258 1.96255 15.7777 1.6999 15.4567 1.6999H14.2019C13.8954 1.6999 13.6328 1.94796 13.6328 2.26897V2.96936L10.4081 0.196984C10.1017 -0.0656615 9.64933 -0.0656615 9.34291 0.196984L0.281632 7.98881C-0.0539707 8.28064 -0.0977459 8.79134 0.194083 9.14154C0.354589 9.33123 0.588051 9.41877 0.806923 9.41877C0.996612 9.41877 1.1863 9.36041 1.33222 9.21449L9.75148 1.97714C9.80984 1.91877 9.91198 1.91877 9.97035 1.97714L18.3896 9.21449C18.5501 9.34582 18.7398 9.41877 18.9149 9.41877C19.1484 9.41877 19.3672 9.31663 19.5277 9.14154C19.8633 8.80593 19.8196 8.28064 19.484 7.98881Z" fill="#09A7DA" data-v-9ecd21eb></path></svg><span class="banner__form-icon" data-v-9ecd21eb></span><span class="banner__form-label" data-v-9ecd21eb>Comprar uma casa?</span></label><label class="banner__form-option" data-v-9ecd21eb><input type="radio" name="objective" value="investment" data-v-9ecd21eb><svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M0.0321045 10.8119C0.0321045 10.1753 -0.0963135 9.45914 0.160522 8.85439C0.449464 8.17007 1.26813 7.89953 1.95838 8.15416C2.74494 8.45653 2.85731 9.23633 2.84126 9.9684C2.84126 10.4458 2.61652 11.5121 2.98573 11.9099C3.46729 12.4033 3.56361 11.0983 3.56361 10.9551C3.57966 10.3822 3.54755 9.80925 3.54755 9.23633C3.54755 8.55202 3.54755 7.8677 3.54755 7.18338C3.54755 5.49646 3.46729 3.77771 3.51545 2.09079C3.5315 1.5497 3.57966 0.913126 3.91676 0.467524C4.31807 -0.0576495 5.18489 -0.13722 5.71461 0.212896C6.34065 0.610755 6.35671 1.50196 6.35671 2.15445C6.35671 3.02974 6.34066 3.92094 6.34066 4.79623C6.6617 4.2074 7.35195 3.9846 7.97799 4.2074C8.58798 4.4302 8.79666 5.0986 8.86087 5.68743C9.18191 5.21 9.7919 5.00312 10.3377 5.13043C11.044 5.30549 11.365 5.95798 11.4132 6.62638C11.8145 6.08529 12.6492 5.91023 13.2431 6.22852C13.7408 6.49907 13.9173 7.02424 13.9494 7.56533C14.0618 9.07719 13.9494 10.6368 13.9655 12.1646C13.9976 15.1883 12.4887 18.1802 9.59927 19.4534C7.22353 20.5196 4.47859 19.9785 2.58442 18.2439C1.66944 17.4004 0.979189 16.3341 0.545777 15.1724C0.0160513 13.756 0.0321045 12.3237 0.0321045 10.8119Z" fill="#09A7DA" data-v-9ecd21eb></path></svg><span class="banner__form-icon" data-v-9ecd21eb></span><span class="banner__form-label" data-v-9ecd21eb>Aumentar patrimônio</span></label></div><div class="banner__form-simulator" data-v-9ecd21eb><div class="banner__form-tabs" data-v-9ecd21eb><p class="banner__form-simulator-title" data-v-9ecd21eb>Simular o plano</p><div class="banner__form-tabs-container" data-v-9ecd21eb><button class="banner__form-tab active" data-v-9ecd21eb>Crédito</button><button class="banner__form-tab" data-v-9ecd21eb>Parcela</button></div></div><div class="banner__form-range" data-v-9ecd21eb><input type="range" min="35000" max="1000000" value="35000" class="banner__form-slider" data-v-9ecd21eb><div class="banner__form-values" data-v-9ecd21eb><span data-v-9ecd21eb>R$ 35 mil</span><span data-v-9ecd21eb>R$ 900 mil</span><span data-v-9ecd21eb>R$ 1 milhão</span></div></div><div class="banner__form-privacy" data-v-9ecd21eb><label class="banner__form-checkbox" data-v-9ecd21eb><input type="checkbox" data-v-9ecd21eb><span style="${ssrRenderStyle({ "max-width": "90%" })}" data-v-9ecd21eb>Li e concordo com a <a href="/politica-de-privacidade" data-v-9ecd21eb>Política de Privacidade</a> concedendo o uso dos meus dados</span></label></div><button class="banner__form-submit" data-v-9ecd21eb>Enviar</button></div></div></div></div></div><div class="swiper-slide" data-v-9ecd21eb><div class="banner__image" data-v-9ecd21eb><img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&amp;w=2073&amp;auto=format&amp;fit=crop" alt="Banner 1" data-v-9ecd21eb></div><div class="banner__content container" data-v-9ecd21eb><div class="banner__form" data-v-9ecd21eb><div class="banner__form-container" data-v-9ecd21eb><h2 class="banner__form-title" data-v-9ecd21eb>O que você deseja realizar?</h2><div class="banner__form-options" data-v-9ecd21eb><label class="banner__form-option" data-v-9ecd21eb><input type="radio" name="objective" value="vehicle" data-v-9ecd21eb><svg width="34" height="14" viewBox="0 0 34 14" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M1.44037 6.04695C0.693862 6.52388 0.424291 7.27039 0.610917 8.14131C0.756071 8.82561 1.02564 9.48917 1.25374 10.1735C1.29521 10.3186 1.35742 10.4638 1.44037 10.5882C1.56479 10.7956 1.81362 10.92 2.04172 10.9822L3.2859 11.2518C3.24442 11.0237 3.22369 10.7956 3.22369 10.5675C3.22369 10.0905 3.30663 9.63432 3.49326 9.19886C3.67989 8.78414 3.92872 8.41088 4.23977 8.0791C4.57155 7.74732 4.9448 7.49849 5.35952 7.3326C5.79499 7.14597 6.25119 7.06303 6.72812 7.06303C7.20505 7.06303 7.66125 7.14597 8.09671 7.3326C8.51144 7.51922 8.88469 7.76806 9.21647 8.0791C9.54825 8.41088 9.79709 8.78414 9.96298 9.19886C10.1496 9.63432 10.2326 10.0905 10.2326 10.5675C10.2326 10.9822 10.1703 11.3969 10.0252 11.7909H23.7733C23.6282 11.3969 23.566 11.0029 23.566 10.5675C23.566 10.0905 23.6489 9.63432 23.8355 9.19886C24.0222 8.78414 24.271 8.41088 24.5821 8.0791C24.9138 7.74732 25.2871 7.49849 25.7018 7.3326C26.1373 7.14597 26.5935 7.06303 27.0704 7.06303C27.5473 7.06303 28.0035 7.14597 28.439 7.3326C28.8537 7.51922 29.227 7.76806 29.5588 8.0791C29.8905 8.41088 30.1394 8.78414 30.3053 9.19886C30.4919 9.63432 30.5748 10.0905 30.5748 10.5675C30.5748 10.7333 30.5541 10.92 30.5334 11.0859L32.0264 10.8163C32.2545 10.7748 32.4618 10.6711 32.6277 10.526C33.0425 10.1735 33.2706 9.75874 33.2706 9.2196L33.2913 7.99616V7.97542C33.2913 7.74732 33.2291 7.51922 33.1047 7.3326C33.001 7.16671 32.9388 6.98008 32.9388 6.79346V5.40413C32.9388 4.94793 32.607 4.55394 32.1508 4.47099L30.5334 4.18068C29.9527 4.077 29.3721 3.89038 28.833 3.64154L25.5359 2.10706C24.5821 1.65086 23.566 1.31908 22.5292 1.09098C21.4923 0.862881 20.4348 0.738464 19.3772 0.738464C16.8889 0.738464 14.4213 1.40202 12.2647 2.6462L8.96764 4.55394C8.86395 4.61615 8.57365 4.55394 8.46997 4.55394C8.28334 4.55394 8.07598 4.57468 7.88935 4.57468C6.23045 4.67836 4.55081 4.80277 2.95412 5.30045C2.56013 5.42486 2.18687 5.59075 1.81362 5.77738C1.70994 5.86032 1.56479 5.94327 1.44037 6.04695ZM19.0662 4.63688L19.398 1.52644C26.3239 1.83748 26.158 4.63688 26.158 4.63688H19.0662ZM10.8754 4.63688C10.8754 4.63688 14.3798 1.50571 18.5063 1.50571L17.8842 4.63688H10.8754Z" fill="#09A7DA" data-v-9ecd21eb></path><path d="M27.091 7.85104C28.584 7.85104 29.8075 9.07449 29.8075 10.5675C29.8075 10.7956 29.7867 11.0237 29.7245 11.2311C29.4342 12.413 28.3559 13.284 27.091 13.284C26.0335 13.284 25.1003 12.6619 24.6649 11.7909C24.4783 11.4177 24.3746 11.0237 24.3746 10.5675C24.3746 9.05375 25.5773 7.85104 27.091 7.85104Z" fill="#09A7DA" data-v-9ecd21eb></path><path d="M6.74892 7.85104C8.24193 7.85104 9.46537 9.07449 9.46537 10.5675C9.46537 11.003 9.36169 11.4177 9.17507 11.7909C8.7396 12.6826 7.80647 13.284 6.74892 13.284C5.56695 13.284 4.55088 12.5167 4.17762 11.4592C4.07394 11.1896 4.03247 10.8785 4.03247 10.5675C4.03247 9.05375 5.23517 7.85104 6.74892 7.85104Z" fill="#09A7DA" data-v-9ecd21eb></path></svg><span class="banner__form-icon" data-v-9ecd21eb></span><span class="banner__form-label" data-v-9ecd21eb>Comprar um veículo?</span></label><label class="banner__form-option" data-v-9ecd21eb><input type="radio" name="objective" value="house" data-v-9ecd21eb><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M17.5433 10.0316L10.0579 3.59679C9.95579 3.50924 9.79528 3.50924 9.69314 3.59679L2.20773 10.0316C2.14936 10.09 2.10559 10.1629 2.10559 10.2505V17.1376C2.10559 17.6921 2.55792 18.1444 3.1124 18.1444H7.65034C7.81084 18.1444 7.92757 18.0131 7.92757 17.8672V13.2417C7.92757 12.8332 8.26318 12.4976 8.67174 12.4976H11.0501C11.4587 12.4976 11.7943 12.8332 11.7943 13.2417V17.8672C11.7943 18.0277 11.9256 18.1444 12.0715 18.1444H16.6095C17.164 18.1444 17.6163 17.6921 17.6163 17.1376V10.2505C17.6455 10.1629 17.6017 10.09 17.5433 10.0316Z" fill="#09A7DA" data-v-9ecd21eb></path><path d="M19.484 7.98881L16.0258 5.01216V2.26897C16.0258 1.96255 15.7777 1.6999 15.4567 1.6999H14.2019C13.8954 1.6999 13.6328 1.94796 13.6328 2.26897V2.96936L10.4081 0.196984C10.1017 -0.0656615 9.64933 -0.0656615 9.34291 0.196984L0.281632 7.98881C-0.0539707 8.28064 -0.0977459 8.79134 0.194083 9.14154C0.354589 9.33123 0.588051 9.41877 0.806923 9.41877C0.996612 9.41877 1.1863 9.36041 1.33222 9.21449L9.75148 1.97714C9.80984 1.91877 9.91198 1.91877 9.97035 1.97714L18.3896 9.21449C18.5501 9.34582 18.7398 9.41877 18.9149 9.41877C19.1484 9.41877 19.3672 9.31663 19.5277 9.14154C19.8633 8.80593 19.8196 8.28064 19.484 7.98881Z" fill="#09A7DA" data-v-9ecd21eb></path></svg><span class="banner__form-icon" data-v-9ecd21eb></span><span class="banner__form-label" data-v-9ecd21eb>Comprar uma casa?</span></label><label class="banner__form-option" data-v-9ecd21eb><input type="radio" name="objective" value="investment" data-v-9ecd21eb><svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M0.0321045 10.8119C0.0321045 10.1753 -0.0963135 9.45914 0.160522 8.85439C0.449464 8.17007 1.26813 7.89953 1.95838 8.15416C2.74494 8.45653 2.85731 9.23633 2.84126 9.9684C2.84126 10.4458 2.61652 11.5121 2.98573 11.9099C3.46729 12.4033 3.56361 11.0983 3.56361 10.9551C3.57966 10.3822 3.54755 9.80925 3.54755 9.23633C3.54755 8.55202 3.54755 7.8677 3.54755 7.18338C3.54755 5.49646 3.46729 3.77771 3.51545 2.09079C3.5315 1.5497 3.57966 0.913126 3.91676 0.467524C4.31807 -0.0576495 5.18489 -0.13722 5.71461 0.212896C6.34065 0.610755 6.35671 1.50196 6.35671 2.15445C6.35671 3.02974 6.34066 3.92094 6.34066 4.79623C6.6617 4.2074 7.35195 3.9846 7.97799 4.2074C8.58798 4.4302 8.79666 5.0986 8.86087 5.68743C9.18191 5.21 9.7919 5.00312 10.3377 5.13043C11.044 5.30549 11.365 5.95798 11.4132 6.62638C11.8145 6.08529 12.6492 5.91023 13.2431 6.22852C13.7408 6.49907 13.9173 7.02424 13.9494 7.56533C14.0618 9.07719 13.9494 10.6368 13.9655 12.1646C13.9976 15.1883 12.4887 18.1802 9.59927 19.4534C7.22353 20.5196 4.47859 19.9785 2.58442 18.2439C1.66944 17.4004 0.979189 16.3341 0.545777 15.1724C0.0160513 13.756 0.0321045 12.3237 0.0321045 10.8119Z" fill="#09A7DA" data-v-9ecd21eb></path></svg><span class="banner__form-icon" data-v-9ecd21eb></span><span class="banner__form-label" data-v-9ecd21eb>Aumentar patrimônio</span></label></div><div class="banner__form-simulator" data-v-9ecd21eb><div class="banner__form-tabs" data-v-9ecd21eb><p class="banner__form-simulator-title" data-v-9ecd21eb>Simular o plano</p><div class="banner__form-tabs-container" data-v-9ecd21eb><button class="banner__form-tab active" data-v-9ecd21eb>Crédito</button><button class="banner__form-tab" data-v-9ecd21eb>Parcela</button></div></div><div class="banner__form-range" data-v-9ecd21eb><input type="range" min="35000" max="1000000" value="35000" class="banner__form-slider" data-v-9ecd21eb><div class="banner__form-values" data-v-9ecd21eb><span data-v-9ecd21eb>R$ 35 mil</span><span data-v-9ecd21eb>R$ 900 mil</span><span data-v-9ecd21eb>R$ 1 milhão</span></div></div><div class="banner__form-privacy" data-v-9ecd21eb><label class="banner__form-checkbox" data-v-9ecd21eb><input type="checkbox" data-v-9ecd21eb><span style="${ssrRenderStyle({ "max-width": "90%" })}" data-v-9ecd21eb>Li e concordo com a <a href="/politica-de-privacidade" data-v-9ecd21eb>Política de Privacidade</a> concedendo o uso dos meus dados</span></label></div><button class="banner__form-submit" data-v-9ecd21eb>Enviar</button></div></div></div><div class="banner__text" data-v-9ecd21eb><h1 class="banner__title" data-v-9ecd21eb><span data-v-9ecd21eb>Realize seus objetivos</span><br data-v-9ecd21eb> com um <span class="banner__highlight" data-v-9ecd21eb>Consórcio</span><br data-v-9ecd21eb><span class="banner__highlight" data-v-9ecd21eb>Racon:</span> acessível e<br data-v-9ecd21eb> sem juros </h1><p class="banner__description" data-v-9ecd21eb> Entre para um grupo de pessoas com o mesmo objetivo e<br data-v-9ecd21eb> tenha a chance de ser contemplado por sorteio ou lance,<br data-v-9ecd21eb> acelerando sua conquista com planejamento e tranquilidade. </p><a href="/simulador" class="banner__cta" data-v-9ecd21eb> Simule seu Consórcio <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5511 0.491272L15.0207 7.49998L8.5511 14.5087L7.4489 13.4913L12.287 8.24998H0V6.74998H12.287L7.4489 1.50869L8.5511 0.491272Z" fill="white" data-v-9ecd21eb></path></svg></a></div></div></div></div><div class="banner__navigation" data-v-9ecd21eb><button type="button" class="banner__nav banner__nav--prev" aria-label="Previous slide" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M15 19l-7-7 7-7" stroke="#09A7DA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-9ecd21eb></path></svg></button><button type="button" class="banner__nav banner__nav--next" aria-label="Next slide" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M9 5l7 7-7 7" stroke="#09A7DA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-9ecd21eb></path></svg></button></div></div></div></div><section class="consorcio" data-v-9ecd21eb><div class="container" data-v-9ecd21eb><h2 class="consorcio__title" data-v-9ecd21eb> A Racon tem o <span class="consorcio__title-highlight" data-v-9ecd21eb>Consórcio ideal para você.</span></h2><div class="consorcio__grid" data-v-9ecd21eb><div class="consorcio__card" data-v-9ecd21eb><div class="consorcio__card-content" data-v-9ecd21eb><div class="consorcio__card-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M16 6l3 4h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a3 3 0 0 1-6 0H10a3 3 0 0 1-6 0H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h2l3-4h8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-9ecd21eb></path><circle cx="7" cy="17" r="2" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></circle><circle cx="17" cy="17" r="2" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></circle></svg></div><h3 class="consorcio__card-title" data-v-9ecd21eb> Dirija em direção à sua independência. </h3><p class="consorcio__card-text" data-v-9ecd21eb> Consórcio seguro e com até 120 meses para pagar. </p><a href="/simulador" class="consorcio__card-button" data-v-9ecd21eb> Invista agora </a></div><img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&amp;w=2073&amp;auto=format&amp;fit=crop" alt="Mulher sorrindo com chaves do carro" class="consorcio__card-image" data-v-9ecd21eb></div><div class="consorcio__card" data-v-9ecd21eb><div class="consorcio__card-content" data-v-9ecd21eb><div class="consorcio__card-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-9ecd21eb></path><path d="M9 22V12h6v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-9ecd21eb></path></svg></div><h3 class="consorcio__card-title" data-v-9ecd21eb> Conquiste a tão planejada casa própria? </h3><p class="consorcio__card-text" data-v-9ecd21eb> Adquira um dos nossos consórcios e alcance mais um dos seus objetivos. </p><a href="/simulador" class="consorcio__card-button" data-v-9ecd21eb> Invista agora </a></div><img src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?q=80&amp;w=2073&amp;auto=format&amp;fit=crop" alt="Família em casa" class="consorcio__card-image" data-v-9ecd21eb></div><div class="consorcio__card" data-v-9ecd21eb><div class="consorcio__card-content" data-v-9ecd21eb><div class="consorcio__card-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M3 3v18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-9ecd21eb></path><path d="M18 9l-3-3-4 4-3-3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-9ecd21eb></path></svg></div><h3 class="consorcio__card-title" data-v-9ecd21eb> Amplie seu patrimônio através de um investimento milionário. </h3><p class="consorcio__card-text" data-v-9ecd21eb> Faça seu patrimônio crescer de forma segura e planejada. </p><a href="/simulador" class="consorcio__card-button" data-v-9ecd21eb> Invista agora </a></div><img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&amp;w=2073&amp;auto=format&amp;fit=crop" alt="Homem de negócios" class="consorcio__card-image" data-v-9ecd21eb></div></div></div></section><section class="about" data-v-9ecd21eb><div class="container" data-v-9ecd21eb><div class="about__content" data-v-9ecd21eb><div class="about__text" data-v-9ecd21eb><h2 class="about__title" data-v-9ecd21eb> Mas a final, o que é <span class="about__title-highlight" data-v-9ecd21eb>Consórcio?</span></h2><p class="about__description" data-v-9ecd21eb> O consórcio é uma modalidade de <span class="about__highlight" data-v-9ecd21eb>compra planejada, onde um grupo de pessoas se reúne para adquirir um bem ou serviço de forma parcelada e sem juros</span>. Cada participante contribui mensalmente para um fundo comum, e a contemplação acontece por meio de sorteios ou lances. Essa é uma alternativa segura e acessível para quem deseja conquistar um imóvel, veículo ou outro bem de alto valor, sem comprometer o orçamento com juros elevados. </p><a href="/como-funciona" class="about__cta" data-v-9ecd21eb> Saiba mais <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><line x1="7" y1="17" x2="17" y2="7" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></line><polyline points="7 7 17 7 17 17" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></polyline></svg></a></div><div class="about__grid" data-v-9ecd21eb><div class="about__card about__card--main" data-v-9ecd21eb><img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&amp;w=2787&amp;auto=format&amp;fit=crop" alt="Consórcio: a melhor forma de planejar e realizar seus sonhos" class="about__card-image" data-v-9ecd21eb><div class="about__card-content" data-v-9ecd21eb><h3 class="about__card-title" data-v-9ecd21eb>Consórcio: a melhor forma de planejar e realizar seus sonhos!</h3><a href="/saiba-mais" class="about__card-link" data-v-9ecd21eb>Saiba mais →</a></div></div><div class="about__card" data-v-9ecd21eb><img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=2940&amp;auto=format&amp;fit=crop" alt="Como funciona?" class="about__card-image" data-v-9ecd21eb><div class="about__card-content" data-v-9ecd21eb><h3 class="about__card-title" data-v-9ecd21eb>Como funciona?</h3><a href="/como-funciona" class="about__card-link" data-v-9ecd21eb>Saiba mais →</a></div></div><div class="about__card" data-v-9ecd21eb><img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&amp;w=2073&amp;auto=format&amp;fit=crop" alt="O que é possível comprar com consórcio?" class="about__card-image" data-v-9ecd21eb><div class="about__card-content" data-v-9ecd21eb><h3 class="about__card-title" data-v-9ecd21eb>O que é possível comprar com consórcio?</h3><a href="/possibilidades" class="about__card-link" data-v-9ecd21eb>Saiba mais →</a></div></div></div></div></div></section><section class="advantages" data-v-9ecd21eb><div class="container" data-v-9ecd21eb><div class="advantages__header" data-v-9ecd21eb><h2 class="advantages__title" data-v-9ecd21eb> Vantagens de ter<br data-v-9ecd21eb> um <span class="advantages__title-highlight" data-v-9ecd21eb>Consórcio Racon</span></h2></div><div class="advantages__grid" data-v-9ecd21eb><div class="advantages__card" data-v-9ecd21eb><div class="advantages__card-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path></svg></div><h3 class="advantages__card-title" data-v-9ecd21eb>Sem juros</h3><p class="advantages__card-text" data-v-9ecd21eb> Diferente de financiamentos, no consórcio você paga apenas a taxa administrativa, tornando a compra mais econômica. </p></div><div class="advantages__card" data-v-9ecd21eb><div class="advantages__card-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></circle><path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path></svg></div><h3 class="advantages__card-title" data-v-9ecd21eb>Planejamento financeiro</h3><p class="advantages__card-text" data-v-9ecd21eb> Permite a aquisição de bens de forma organizada, sem comprometer seu orçamento com altos juros. </p></div><div class="advantages__card" data-v-9ecd21eb><div class="advantages__card-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M4 21v-7m4 7v-7m4 7V9m4 12V9m4 12V3" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path></svg></div><h3 class="advantages__card-title" data-v-9ecd21eb>Flexibilidade de pagamento</h3><p class="advantages__card-text" data-v-9ecd21eb> Possibilidade de escolher planos e prazos que se encaixam na sua realidade financeira. </p></div><div class="advantages__card" data-v-9ecd21eb><div class="advantages__card-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M12 15l-2-2m0 0l-2-2m2 2l2-2m-2 2l-2 2m12-4a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path></svg></div><h3 class="advantages__card-title" data-v-9ecd21eb>Lances e sorteios</h3><p class="advantages__card-text" data-v-9ecd21eb> Você pode antecipar sua contemplação dando lances ou aguardar os sorteios mensais. </p></div></div><div class="advantages__cta" data-v-9ecd21eb><a href="/simulador" class="advantages__button" data-v-9ecd21eb> Simule seu Consórcio <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path></svg></a></div></div></section><section class="units" data-v-9ecd21eb><div class="container" data-v-9ecd21eb><div class="units__content" data-v-9ecd21eb><div class="units__image-wrapper" data-v-9ecd21eb><img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&amp;w=2073&amp;auto=format&amp;fit=crop" alt="Encontre uma unidade Racon perto de você" class="units__image" data-v-9ecd21eb><div class="units__image-overlay" data-v-9ecd21eb><div class="units__location-icon" data-v-9ecd21eb><svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor" data-v-9ecd21eb></path></svg></div><span class="units__image-text" data-v-9ecd21eb> Encontre uma unidade<br data-v-9ecd21eb> Racon perto de você! </span></div></div><div class="units__text" data-v-9ecd21eb><div class="units__icon" data-v-9ecd21eb><svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor" data-v-9ecd21eb></path></svg></div><h2 class="units__title" data-v-9ecd21eb> Nossas unidades:<br data-v-9ecd21eb><span class="units__title-highlight" data-v-9ecd21eb>encontre a Racon<br data-v-9ecd21eb>Consórcios perto de você</span></h2><p class="units__description" data-v-9ecd21eb> A Racon Consórcios está presente em diversas regiões, oferecendo atendimento especializado para ajudá-lo a planejar e conquistar seus objetivos com segurança e praticidade. Nossas unidades contam com equipes qualificadas para tirar suas dúvidas, apresentar as melhores opções de consórcio e acompanhar você em cada etapa do processo. Encontre a unidade mais próxima e <span class="units__description-highlight" data-v-9ecd21eb>venha conhecer as vantagens de investir no seu futuro com a Racon Consórcio!</span></p><a href="/unidades" class="units__button" data-v-9ecd21eb> Nossas unidades <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path></svg></a></div></div></div></section><section class="trust" data-v-9ecd21eb><div class="container" data-v-9ecd21eb><div class="trust__content" data-v-9ecd21eb><div class="trust__text" data-v-9ecd21eb><h2 class="trust__title" data-v-9ecd21eb><span class="trust__title-highlight" data-v-9ecd21eb>Racon Consórcio:</span><br data-v-9ecd21eb> confiança e soluções<br data-v-9ecd21eb> para realizar seus<br data-v-9ecd21eb> objetivos </h2><p class="trust__description" data-v-9ecd21eb> A empresa é uma das <span class="trust__description-highlight" data-v-9ecd21eb>líderes no mercado</span> de consórcios de pesados e está entre as maiores administradoras de consórcios de imóveis. Sua atuação no mercado baseia-se em três premissas: relacionamento, flexibilidade e credibilidade. </p></div><div class="trust__stats" data-v-9ecd21eb><div class="trust__stat" data-v-9ecd21eb><div class="trust__stat-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 1 0-1.41-1.41z" fill="currentColor" data-v-9ecd21eb></path></svg></div><div class="trust__stat-content" data-v-9ecd21eb><div class="trust__stat-value" data-v-9ecd21eb>+200</div><div class="trust__stat-label" data-v-9ecd21eb>Pontos de Vendas</div></div></div><div class="trust__stat" data-v-9ecd21eb><div class="trust__stat-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" fill="currentColor" data-v-9ecd21eb></path></svg></div><div class="trust__stat-content" data-v-9ecd21eb><div class="trust__stat-value" data-v-9ecd21eb>R$1.91 Bi</div><div class="trust__stat-label" data-v-9ecd21eb>Créditos Comercializados</div></div></div><div class="trust__stat" data-v-9ecd21eb><div class="trust__stat-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" fill="currentColor" data-v-9ecd21eb></path><circle cx="12" cy="9" r="2.5" fill="currentColor" data-v-9ecd21eb></circle></svg></div><div class="trust__stat-content" data-v-9ecd21eb><div class="trust__stat-value" data-v-9ecd21eb>11</div><div class="trust__stat-label" data-v-9ecd21eb>Estados Localizados</div></div></div><div class="trust__stat" data-v-9ecd21eb><div class="trust__stat-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M12 2L4.5 9.5l1.41 1.41L12 4.83l6.09 6.08L19.5 9.5L12 2zm0 5L4.5 14.5l1.41 1.41L12 9.83l6.09 6.08 1.41-1.41L12 7z" fill="currentColor" data-v-9ecd21eb></path></svg></div><div class="trust__stat-content" data-v-9ecd21eb><div class="trust__stat-value" data-v-9ecd21eb>+158 mil</div><div class="trust__stat-label" data-v-9ecd21eb>Contemplações</div></div></div></div><a href="/sobre" class="trust__button" data-v-9ecd21eb> Saiba mais <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path></svg></a></div></div></section><section class="franchisee" data-v-9ecd21eb><div class="container" data-v-9ecd21eb><div class="franchisee__content" data-v-9ecd21eb><div class="franchisee__header" data-v-9ecd21eb><h2 class="franchisee__title" data-v-9ecd21eb> Seja um <span data-v-9ecd21eb>Franqueado</span></h2></div><div class="franchisee__grid" data-v-9ecd21eb><div class="franchisee__card" data-v-9ecd21eb><div class="franchisee__card-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path><path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path></svg></div><div class="franchisee__card-content" data-v-9ecd21eb><h3 class="franchisee__card-title" data-v-9ecd21eb>Suporte ao parceiro</h3><p class="franchisee__card-text" data-v-9ecd21eb> Todo acompanhamento necessário, desde a abertura até o andamento do negócio, passando pelo plano administrativo e comercial. </p></div></div><div class="franchisee__card" data-v-9ecd21eb><div class="franchisee__card-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path></svg></div><div class="franchisee__card-content" data-v-9ecd21eb><h3 class="franchisee__card-title" data-v-9ecd21eb>Incentivo a vendas</h3><p class="franchisee__card-text" data-v-9ecd21eb> Programas e promoções de incentivo às vendas, para estimular o parceiro a alcançar suas metas e aumentar seus resultados. </p></div></div><div class="franchisee__card" data-v-9ecd21eb><div class="franchisee__card-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path><path d="M22 4L12 14.01l-3-3" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path></svg></div><div class="franchisee__card-content" data-v-9ecd21eb><h3 class="franchisee__card-title" data-v-9ecd21eb>Qualificação</h3><p class="franchisee__card-text" data-v-9ecd21eb> Apoio completo para a equipe de vendas testar capacidades para diferentes abordagens e métodos para oferecer nossos produtos e soluções. </p></div></div><div class="franchisee__card" data-v-9ecd21eb><div class="franchisee__card-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path></svg></div><div class="franchisee__card-content" data-v-9ecd21eb><h3 class="franchisee__card-title" data-v-9ecd21eb>Produtos especiais</h3><p class="franchisee__card-text" data-v-9ecd21eb> Planos de consórcio exclusivos e adequados para qualquer setor da empresa e família investir. </p></div></div><div class="franchisee__card" data-v-9ecd21eb><div class="franchisee__card-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path><path d="M19 10v5a7 7 0 1 1-14 0v-5" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path></svg></div><div class="franchisee__card-content" data-v-9ecd21eb><h3 class="franchisee__card-title" data-v-9ecd21eb>Publicidade da marca</h3><p class="franchisee__card-text" data-v-9ecd21eb> Investimento por parte da franqueadora em materiais e ações promocionais que fortalecem a visibilidade da marca e a atuação comercial do parceiro. </p></div></div><div class="franchisee__card" data-v-9ecd21eb><div class="franchisee__card-icon" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path></svg></div><div class="franchisee__card-content" data-v-9ecd21eb><h3 class="franchisee__card-title" data-v-9ecd21eb>Desenvolvimento contínuo</h3><p class="franchisee__card-text" data-v-9ecd21eb> Aprimoramento constante de serviços, técnicas e recursos tecnológicos que oferecem maior competitividade ao negócio. </p></div></div></div><div class="franchisee__cta" data-v-9ecd21eb><a href="/seja-franqueado" class="franchisee__button" data-v-9ecd21eb> Saiba mais <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path></svg></a></div></div></div></section><section class="blog" data-v-9ecd21eb><div class="container" data-v-9ecd21eb><div class="blog__content" data-v-9ecd21eb><div class="blog__header" data-v-9ecd21eb><div class="blog__title-wrapper" data-v-9ecd21eb><h2 class="blog__title" data-v-9ecd21eb>Blog Racon Consórcios:</h2><h3 class="blog__subtitle" data-v-9ecd21eb>soluções para seu futuro financeiro</h3></div><a href="/blog" class="blog__button" data-v-9ecd21eb> Leia o blog <svg class="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path></svg></a></div><div class="blog__grid" data-v-9ecd21eb><div class="blog__card" data-v-9ecd21eb><div class="blog__card-image-wrapper" data-v-9ecd21eb><img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&amp;w=2073&amp;auto=format&amp;fit=crop" alt="Artigo sobre consórcio" class="blog__card-image" data-v-9ecd21eb><div class="blog__card-arrow" data-v-9ecd21eb><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M7 17l10-10M7 7h10v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-9ecd21eb></path></svg></div></div><div class="blog__card-content" data-v-9ecd21eb><div class="blog__card-tag" data-v-9ecd21eb>Consórcio</div><h3 class="blog__card-title" data-v-9ecd21eb>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3><div class="blog__card-footer" data-v-9ecd21eb><div class="blog__card-author" data-v-9ecd21eb><div class="blog__card-avatar" data-v-9ecd21eb><img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Erica Rosa" data-v-9ecd21eb></div><div class="blog__card-meta" data-v-9ecd21eb><div class="blog__card-name" data-v-9ecd21eb>Erica Rosa</div><div class="blog__card-date" data-v-9ecd21eb>02 de agosto, 2024</div></div></div><div class="blog__card-reading-time" data-v-9ecd21eb>Leitura 6 min.</div></div></div></div><div class="blog__card" data-v-9ecd21eb><div class="blog__card-image-wrapper" data-v-9ecd21eb><img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&amp;w=2787&amp;auto=format&amp;fit=crop" alt="Artigo sobre novidades" class="blog__card-image" data-v-9ecd21eb><div class="blog__card-arrow" data-v-9ecd21eb><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M7 17l10-10M7 7h10v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-9ecd21eb></path></svg></div></div><div class="blog__card-content" data-v-9ecd21eb><div class="blog__card-tag" data-v-9ecd21eb>Novidade</div><h3 class="blog__card-title" data-v-9ecd21eb>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3><div class="blog__card-footer" data-v-9ecd21eb><div class="blog__card-author" data-v-9ecd21eb><div class="blog__card-avatar" data-v-9ecd21eb><img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Erica Rosa" data-v-9ecd21eb></div><div class="blog__card-meta" data-v-9ecd21eb><div class="blog__card-name" data-v-9ecd21eb>Erica Rosa</div><div class="blog__card-date" data-v-9ecd21eb>02 de agosto, 2024</div></div></div><div class="blog__card-reading-time" data-v-9ecd21eb>Leitura 6 min.</div></div></div></div><div class="blog__card" data-v-9ecd21eb><div class="blog__card-image-wrapper" data-v-9ecd21eb><img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&amp;w=2073&amp;auto=format&amp;fit=crop" alt="Artigo sobre consórcio" class="blog__card-image" data-v-9ecd21eb><div class="blog__card-arrow" data-v-9ecd21eb><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M7 17l10-10M7 7h10v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-9ecd21eb></path></svg></div></div><div class="blog__card-content" data-v-9ecd21eb><div class="blog__card-tag" data-v-9ecd21eb>Consórcio</div><h3 class="blog__card-title" data-v-9ecd21eb>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3><div class="blog__card-footer" data-v-9ecd21eb><div class="blog__card-author" data-v-9ecd21eb><div class="blog__card-avatar" data-v-9ecd21eb><img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Erica Rosa" data-v-9ecd21eb></div><div class="blog__card-meta" data-v-9ecd21eb><div class="blog__card-name" data-v-9ecd21eb>Erica Rosa</div><div class="blog__card-date" data-v-9ecd21eb>02 de agosto, 2024</div></div></div><div class="blog__card-reading-time" data-v-9ecd21eb>Leitura 6 min.</div></div></div></div></div></div></div></section><section class="testimonials" data-v-9ecd21eb><div class="container" data-v-9ecd21eb><div class="testimonials__content" data-v-9ecd21eb><div class="testimonials__header" data-v-9ecd21eb><div class="testimonials__header--text" data-v-9ecd21eb><h2 class="testimonials__title" data-v-9ecd21eb> objetivos que a Racon ajudou a realizar </h2><p class="testimonials__description" data-v-9ecd21eb> Os depoimentos de nossos clientes refletem a confiança e a satisfação de quem já realizou seus objetivos com a Racon Consórcios. Histórias reais mostram como o consórcio foi a escolha certa para conquistar imóveis, veículos e muito mais. Confira as experiências e inspire-se para dar o próximo passo! </p></div><div class="testimonials__card testimonials__card--featured" data-v-9ecd21eb><img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&amp;w=2787&amp;auto=format&amp;fit=crop" alt="Depoimento sobre consórcio para casa própria" class="testimonials__card-image" data-v-9ecd21eb><div class="testimonials__play-button" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M5 3l14 9-14 9V3z" fill="currentColor" data-v-9ecd21eb></path></svg></div><div class="testimonials__card-overlay" data-v-9ecd21eb><h3 class="testimonials__card-title" data-v-9ecd21eb>O poder de conquistar</h3><p class="testimonials__card-subtitle" data-v-9ecd21eb>Consórcio para casa própria</p></div></div></div><div class="testimonials__grid" data-v-9ecd21eb><div class="testimonials__cards-row" data-v-9ecd21eb><div class="testimonials__card" data-v-9ecd21eb><img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&amp;w=2073&amp;auto=format&amp;fit=crop" alt="Depoimento sobre consórcio para construir" class="testimonials__card-image" data-v-9ecd21eb><div class="testimonials__play-button" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M5 3l14 9-14 9V3z" fill="currentColor" data-v-9ecd21eb></path></svg></div><div class="testimonials__card-overlay" data-v-9ecd21eb><h3 class="testimonials__card-title" data-v-9ecd21eb>O poder de conquistar</h3><p class="testimonials__card-subtitle" data-v-9ecd21eb>Consórcio para construir</p></div></div><div class="testimonials__card" data-v-9ecd21eb><img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&amp;w=2787&amp;auto=format&amp;fit=crop" alt="Depoimento sobre consórcio para construir" class="testimonials__card-image" data-v-9ecd21eb><div class="testimonials__play-button" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M5 3l14 9-14 9V3z" fill="currentColor" data-v-9ecd21eb></path></svg></div><div class="testimonials__card-overlay" data-v-9ecd21eb><h3 class="testimonials__card-title" data-v-9ecd21eb>O poder de conquistar</h3><p class="testimonials__card-subtitle" data-v-9ecd21eb>Consórcio para construir</p></div></div><div class="testimonials__card" data-v-9ecd21eb><img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&amp;w=2073&amp;auto=format&amp;fit=crop" alt="Depoimento sobre consórcio para construir" class="testimonials__card-image" data-v-9ecd21eb><div class="testimonials__play-button" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M5 3l14 9-14 9V3z" fill="currentColor" data-v-9ecd21eb></path></svg></div><div class="testimonials__card-overlay" data-v-9ecd21eb><h3 class="testimonials__card-title" data-v-9ecd21eb>O poder de conquistar</h3><p class="testimonials__card-subtitle" data-v-9ecd21eb>Consórcio para construir</p></div></div><div class="testimonials__card" data-v-9ecd21eb><img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&amp;w=2787&amp;auto=format&amp;fit=crop" alt="Depoimento sobre consórcio para construir" class="testimonials__card-image" data-v-9ecd21eb><div class="testimonials__play-button" data-v-9ecd21eb><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M5 3l14 9-14 9V3z" fill="currentColor" data-v-9ecd21eb></path></svg></div><div class="testimonials__card-overlay" data-v-9ecd21eb><h3 class="testimonials__card-title" data-v-9ecd21eb>O poder de conquistar</h3><p class="testimonials__card-subtitle" data-v-9ecd21eb>Consórcio para construir</p></div></div></div></div><div class="testimonials__cta" data-v-9ecd21eb><a href="/depoimentos" class="testimonials__button" data-v-9ecd21eb> Ver mais depoimentos <svg class="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9ecd21eb><path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" stroke-width="2" data-v-9ecd21eb></path></svg></a></div></div></div></section>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/site/assets/js/pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9ecd21eb"]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var lib = {};
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib;
  hasRequiredLib = 1;
  Object.defineProperty(lib, "__esModule", {
    value: true
  });
  lib.default = void 0;
  var process = _interopRequireWildcard(require$$0);
  var _http = require$$1;
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
    var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop2) {
      return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interopRequireWildcard(obj, nodeInterop) {
    if (obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  const readableToString = (readable) => new Promise((resolve, reject) => {
    let data = "";
    readable.on("data", (chunk) => data += chunk);
    readable.on("end", () => resolve(data));
    readable.on("error", (err) => reject(err));
  });
  var _default = (render, port) => {
    const _port = port || 13714;
    const routes = {
      "/health": async () => ({
        status: "OK",
        timestamp: Date.now()
      }),
      "/shutdown": () => process.exit(),
      "/render": async (request) => render(JSON.parse(await readableToString(request))),
      "/404": async () => ({
        status: "NOT_FOUND",
        timestamp: Date.now()
      })
    };
    (0, _http.createServer)(async (request, response) => {
      const dispatchRoute = routes[request.url] || routes["/404"];
      try {
        response.writeHead(200, {
          "Content-Type": "application/json",
          "Server": "Inertia.js SSR"
        });
        response.write(JSON.stringify(await dispatchRoute(request)));
      } catch (e) {
        console.error(e);
      }
      response.end();
    }).listen(_port, () => console.log("Inertia SSR server started."));
    console.log(`Starting SSR server on port ${_port}...`);
  };
  lib.default = _default;
  return lib;
}
var libExports = requireLib();
const createServer = /* @__PURE__ */ getDefaultExportFromCjs(libExports);
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "../site/assets/js/pages/home.vue": __vite_glob_0_0 });
      return pages[`../site/assets/js/pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) }).use(plugin);
    }
  })
);
//# sourceMappingURL=ssr.mjs.map
