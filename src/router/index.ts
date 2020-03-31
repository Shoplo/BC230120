import Vue, { Component } from 'vue';
import VueRouter from 'vue-router';

import { EsModuleComponent } from 'vue/types/options';

Vue.use(VueRouter);

const lazyLoad = async (importView: Promise<EsModuleComponent>): Promise<Component> => {
  const view = await importView;
  return view.default;
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => lazyLoad(import(/* webpackChunkName: "home" */ '@/views/Home.vue')),
  },
  {
    path: '/about',
    name: 'about',
    component: () => lazyLoad(import(/* webpackChunkName: "about" */ '@/views/About.vue')),
  },
  {
    path: '/404',
    name: '404',
    component: () => lazyLoad(import(/* webpackChunkName: "404" */ '@/views/NotFound.vue')),
  },
  {
    path: '*',
    redirect: '404',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
