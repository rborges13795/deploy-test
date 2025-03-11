import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';

// Initialize Inertia app
createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./pages/**/*.vue', { eager: true });
    return pages[`./pages/${name}.vue`];
  },
  setup({ el, App, props, plugin }) {
    const inertiaApp = createApp({ render: () => h(App, props) });
    inertiaApp.use(plugin);
    inertiaApp.mount(el);
  },
});
