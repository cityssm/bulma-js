export type BooleanConfigProperties =
  | 'navbar.burger'
  | 'navbar.dropdown'
  | 'dropdown'
  | 'tabs'
  | 'delete.button'
  | 'window.collapse'

export type StringConfigProperties =
  | 'bulmaJS.initAttribute'
  | 'bulmaJS.elementIdPrefix'

export type BulmaContextualColors =
  | 'dark'
  | 'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'

export type ConfigProperties = BooleanConfigProperties | StringConfigProperties

export interface ConfirmButtonOptions {
  text?: string
  textIsHtml?: boolean
  contextualColorName?: BulmaContextualColors
  callbackFunction?: () => void
}

export interface AlertOptions {
  title?: string
  message: string
  messageIsHtml?: boolean
  contextualColorName?: BulmaContextualColors
  okButton?: ConfirmButtonOptions
}

export interface ConfirmOptions extends AlertOptions {
  cancelButton?: ConfirmButtonOptions
}

export interface BulmaJS {
  setConfig: (
    propertyName: ConfigProperties,
    propertyValue: boolean | string
  ) => void
  init: (scopeElement?: Document | HTMLElement) => void
  hideAllDropdowns: () => void
  alert: (alertOptions: string | AlertOptions) => void
  confirm: (confirmOptions: ConfirmOptions) => void
  toggleHtmlClipped: () => void
}

declare global {
  interface Window {
    bulmaJS: BulmaJS
  }
}
