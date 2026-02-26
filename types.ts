export type BooleanConfigProperties =
  | 'delete.button'
  | 'dropdown'
  | 'navbar.burger'
  | 'navbar.dropdown'
  | 'tabs'
  | 'window.collapse'

export type StringConfigProperties =
  | 'bulmaJS.elementIdPrefix'
  | 'bulmaJS.initAttribute'

export type BulmaContextualColors =
  | 'danger'
  | 'dark'
  | 'info'
  | 'link'
  | 'primary'
  | 'success'
  | 'warning'

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
  alert: (alertOptions: AlertOptions | string) => void
  confirm: (confirmOptions: ConfirmOptions) => void
  toggleHtmlClipped: () => void
}

declare global {
  interface Window {
    bulmaJS: BulmaJS
  }
}
