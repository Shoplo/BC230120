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
    name: 'list',
    component: () => lazyLoad(import(/* webpackChunkName: "list" */ '@/views/ListView.vue')),
    meta: {
      hideFormLink: true,
    },
  },
  {
    path: '/form',
    name: 'addForm',
    component: () => lazyLoad(import(/* webpackChunkName: "about" */ '@/views/FormView.vue')),
  },
  {
    path: '/form/:id',
    name: 'editForm',
    component: () => lazyLoad(import(/* webpackChunkName: "about" */ '@/views/FormView.vue')),
  },
  {
    path: '/404',
    name: '404',
    component: () => lazyLoad(import(/* webpackChunkName: "404" */ '@/views/NotFoundView.vue')),
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
