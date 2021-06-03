import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Link: () => import('../../components/Link.vue' /* webpackChunkName: "components/link" */).then(c => wrapFunctional(c.default || c)),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  MountainBackup: () => import('../../components/Mountain_backup.vue' /* webpackChunkName: "components/mountain-backup" */).then(c => wrapFunctional(c.default || c)),
  Mountains: () => import('../../components/Mountains.vue' /* webpackChunkName: "components/mountains" */).then(c => wrapFunctional(c.default || c)),
  MyButton: () => import('../../components/MyButton.vue' /* webpackChunkName: "components/my-button" */).then(c => wrapFunctional(c.default || c)),
  VuetifyLogo: () => import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
