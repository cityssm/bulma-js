export type BooleanConfigProperties = "navbar.burger" | "navbar.dropdown" | "dropdown" | "window.collapse";
export type StringConfigProperties = "bulmaJS.initAttribute" | "bulmaJS.elementIdPrefix";

export type ConfigProperties = BooleanConfigProperties | StringConfigProperties;

export interface BulmaJS {
  setConfig: (propertyName: ConfigProperties, propertyValue: boolean | string) => void;
  init: (scopeElement?: Document | HTMLElement) => void;
  hideAllDropdowns: () => void;
}

declare global {
  interface Window { bulmaJS: BulmaJS; }
}
