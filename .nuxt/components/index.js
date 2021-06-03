import { wrapFunctional } from './utils'

export { default as Link } from '../../components/Link.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as MountainBackup } from '../../components/Mountain_backup.vue'
export { default as Mountains } from '../../components/Mountains.vue'
export { default as MyButton } from '../../components/MyButton.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'

export const LazyLink = import('../../components/Link.vue' /* webpackChunkName: "components/link" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyMountainBackup = import('../../components/Mountain_backup.vue' /* webpackChunkName: "components/mountain-backup" */).then(c => wrapFunctional(c.default || c))
export const LazyMountains = import('../../components/Mountains.vue' /* webpackChunkName: "components/mountains" */).then(c => wrapFunctional(c.default || c))
export const LazyMyButton = import('../../components/MyButton.vue' /* webpackChunkName: "components/my-button" */).then(c => wrapFunctional(c.default || c))
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
