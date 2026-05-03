import type { App } from 'vue'
import Input from './src/input.vue'

Input.install = (app: App) => {
  app.component('UlInput', Input)
}

export { Input }
export * from './src/types'

export default Input
