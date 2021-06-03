import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a56a482 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _d7075e54 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _9a80e01a = () => interopDefault(import('../pages/mountains.vue' /* webpackChunkName: "pages/mountains" */))
const _2d141046 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _43c30380 = () => interopDefault(import('../pages/result.vue' /* webpackChunkName: "pages/result" */))
const _0d3f8542 = () => interopDefault(import('../pages/result-backup.vue' /* webpackChunkName: "pages/result-backup" */))
const _4718d796 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _6cf3b1b6 = () => interopDefault(import('../pages/test-table.vue' /* webpackChunkName: "pages/test-table" */))
const _6dc3e712 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))
const _022f1435 = () => interopDefault(import('../pages/_continent/_mountain.vue' /* webpackChunkName: "pages/_continent/_mountain" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/fr",
    component: _6a56a482,
    name: "index___fr"
  }, {
    path: "/login",
    component: _d7075e54,
    name: "login___en"
  }, {
    path: "/mountains",
    component: _9a80e01a,
    name: "mountains___en"
  }, {
    path: "/register",
    component: _2d141046,
    name: "register___en"
  }, {
    path: "/result",
    component: _43c30380,
    name: "result___en"
  }, {
    path: "/result-backup",
    component: _0d3f8542,
    name: "result-backup___en"
  }, {
    path: "/test",
    component: _4718d796,
    name: "test___en"
  }, {
    path: "/test-table",
    component: _6cf3b1b6,
    name: "test-table___en"
  }, {
    path: "/zh",
    component: _6a56a482,
    name: "index___zh"
  }, {
    path: "/fr/login",
    component: _d7075e54,
    name: "login___fr"
  }, {
    path: "/fr/mountains",
    component: _9a80e01a,
    name: "mountains___fr"
  }, {
    path: "/fr/register",
    component: _2d141046,
    name: "register___fr"
  }, {
    path: "/fr/result",
    component: _43c30380,
    name: "result___fr"
  }, {
    path: "/fr/result-backup",
    component: _0d3f8542,
    name: "result-backup___fr"
  }, {
    path: "/fr/test",
    component: _4718d796,
    name: "test___fr"
  }, {
    path: "/fr/test-table",
    component: _6cf3b1b6,
    name: "test-table___fr"
  }, {
    path: "/zh/login",
    component: _d7075e54,
    name: "login___zh"
  }, {
    path: "/zh/mountains",
    component: _9a80e01a,
    name: "mountains___zh"
  }, {
    path: "/zh/register",
    component: _2d141046,
    name: "register___zh"
  }, {
    path: "/zh/result",
    component: _43c30380,
    name: "result___zh"
  }, {
    path: "/zh/result-backup",
    component: _0d3f8542,
    name: "result-backup___zh"
  }, {
    path: "/zh/test",
    component: _4718d796,
    name: "test___zh"
  }, {
    path: "/zh/test-table",
    component: _6cf3b1b6,
    name: "test-table___zh"
  }, {
    path: "/fr/:slug",
    component: _6dc3e712,
    name: "slug___fr"
  }, {
    path: "/zh/:slug",
    component: _6dc3e712,
    name: "slug___zh"
  }, {
    path: "/fr/:continent/:mountain?",
    component: _022f1435,
    name: "continent-mountain___fr"
  }, {
    path: "/zh/:continent/:mountain?",
    component: _022f1435,
    name: "continent-mountain___zh"
  }, {
    path: "/",
    component: _6a56a482,
    name: "index___en"
  }, {
    path: "/:slug",
    component: _6dc3e712,
    name: "slug___en"
  }, {
    path: "/:continent/:mountain?",
    component: _022f1435,
    name: "continent-mountain___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
