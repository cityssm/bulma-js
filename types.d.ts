export declare type BooleanConfigProperties = "navbar.burger" | "navbar.dropdown" | "dropdown" | "window.collapse";
export declare type StringConfigProperties = "bulmaJS.initAttribute" | "bulmaJS.elementIdPrefix";
export declare type ConfigProperties = BooleanConfigProperties | StringConfigProperties;
export interface BulmaJS {
    setConfig: (propertyName: ConfigProperties, propertyValue: boolean | string) => void;
    init: (scopeElement?: Document | HTMLElement) => void;
    hideAllDropdowns: () => void;
}
declare global {
    interface Window {
        bulmaJS: BulmaJS;
    }
}
