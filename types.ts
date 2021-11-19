export type BooleanConfigProperties = "navbar.burger" | "navbar.dropdown" | "dropdown" | "window.collapse";
export type StringConfigProperties = "bulmaJS.initAttribute" | "bulmaJS.elementIdPrefix";

export interface BulmaJS {
  setConfig: (propertyName: BooleanConfigProperties | StringConfigProperties, propertyValue: boolean | string) => void;
  init: (scopeElement?: Document | HTMLElement) => void;
  hideAllDropdowns: () => void;
}
