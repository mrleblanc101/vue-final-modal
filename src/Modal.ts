import type { CSSProperties } from 'vue'
import type VueFinalModal from './components/VueFinalModal.vue'

export type StyleValue = string | CSSProperties | (string | CSSProperties)[]

export interface UseModalOptions {
  component?: InstanceType<typeof VueFinalModal>
  bind?: InstanceType<typeof VueFinalModal>['$props']
  slots?: {
    default?: string | {
      component: any
      bind?: any
      on?: any
    }
  }
  on?: {
    beforeOpen?: (e: { stop: () => void }) => void
    beforeClose?: (e: { stop: () => void }) => void
    closed?: () => void
    opened?: () => void
  }

  id?: Symbol
  modelValue?: boolean
  rejectOpen?: (reason?: string) => void
  resolveOpened?: () => void
  rejectClose?: (reason?: string) => void
  resolveClosed?: () => void
}

export interface Modal {
  name?: string
  toggle: (show?: boolean) => Promise<string>
}