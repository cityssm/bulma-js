import type * as types from "../types";

declare global {
  interface Window { bulmaJS: types.BulmaJS; }
}

(() => {

  /*
   * Config
   */

  const config = new Map<types.BooleanConfigProperties | types.StringConfigProperties, boolean | string>();

  config.set("bulmaJS.initAttribute", "data-bulma-js-init");
  config.set("bulmaJS.elementIdPrefix", "bulma-js-");
  config.set("navbar.burger", true);
  config.set("navbar.dropdown", true);
  config.set("dropdown", true);
  config.set("window.collapse", true);

  /*
   * Element ID Helper
   */

  let elementIdIndex = Date.now();

  const getNewElementId = () => {
    elementIdIndex += 1;
    return "bulma-js-" + elementIdIndex;
  };

  /*
   * "Space on Anchor" Helper
   */

  const anchorElementSpaceKeyToggle = (keyEvent: KeyboardEvent) => {
    if (keyEvent.key === " ") {
      (keyEvent.currentTarget as HTMLElement).click();
    }
  };

  /*
   * Window Collapse
   * Closes dropdowns when a click is not inside them
   */

  const window_collapse = (clickEvent?: Event) => {

    const element = clickEvent
      ? clickEvent.target as HTMLElement
      : undefined;

    const navbarDropdownElements =
      document.querySelectorAll(".navbar-item.has-dropdown.is-active") as NodeListOf<HTMLElement>;

    for (const navbarDropdownElement of navbarDropdownElements) {

      if (!element || (!navbarDropdownElement.contains(element) && navbarDropdownElement !== element)) {
        navbar_dropdown_hide(navbarDropdownElement);
      }
    }

    const dropdownElements = document.querySelectorAll(".dropdown.is-active") as NodeListOf<HTMLElement>;

    for (const dropdownElement of dropdownElements) {

      if (!element || (!dropdownElement.contains(element) && dropdownElement !== element)) {
        dropdown_hide(dropdownElement);
      }
    }
  };

  /*
   * Navbar Burger
   */

  const navbar_burger_toggle = (clickEvent: Event) => {

    clickEvent.preventDefault();

    const burgerButtonElement = clickEvent.currentTarget as HTMLElement;

    const menuElement = burgerButtonElement.closest(".navbar").querySelector(".navbar-menu");

    if (burgerButtonElement.classList.contains("is-active")) {
      // hide the menu
      menuElement.classList.remove("is-active");
      burgerButtonElement.classList.remove("is-active");
      burgerButtonElement.setAttribute("aria-expanded", "false");
    } else {
      // show the menu
      menuElement.classList.add("is-active");
      burgerButtonElement.classList.add("is-active");
      burgerButtonElement.setAttribute("aria-expanded", "true");
    }
  };

  const init_navbar_burger = (scopeElement: Document | HTMLElement) => {

    const burgerButtonElements =
      scopeElement.querySelectorAll(".navbar-burger:not([" + config.get("bulmaJS.initAttribute") + "])") as NodeListOf<HTMLElement>;

    for (const burgerButtonElement of burgerButtonElements) {

      // Clean up any issues with the burger button
      if (burgerButtonElement.tagName === "A") {
        (burgerButtonElement as HTMLAnchorElement).href = "#";
        burgerButtonElement.setAttribute("role", "button");
      }

      burgerButtonElement.addEventListener("click", navbar_burger_toggle);

      if (burgerButtonElement.tagName === "A") {
        burgerButtonElement.addEventListener("keyup", anchorElementSpaceKeyToggle);
      }

      burgerButtonElement.setAttribute(config.get("bulmaJS.initAttribute") as string, "true");
    }
  };

  /*
   * Navbar Dropdown
   */

  const navbar_dropdown_show = (navbarDropdownElement: HTMLElement) => {
    navbarDropdownElement.classList.add("is-active");

    const navbarDropdownLinkElement = navbarDropdownElement.querySelector(".navbar-link");
    navbarDropdownLinkElement.setAttribute("aria-expanded", "true");
  };

  const navbar_dropdown_hide = (navbarDropdownElement: HTMLElement) => {
    navbarDropdownElement.classList.remove("is-active");

    const navbarDropdownLinkElement = navbarDropdownElement.querySelector(".navbar-link");
    navbarDropdownLinkElement.setAttribute("aria-expanded", "false");
  };

  const navbar_dropdown_toggle = (clickEvent: Event) => {

    clickEvent.preventDefault();

    const dropdownLinkElement = clickEvent.currentTarget as HTMLElement;

    const dropdownElement = dropdownLinkElement.closest(".navbar-item.has-dropdown") as HTMLElement;

    if (dropdownElement.classList.contains("is-active")) {
      navbar_dropdown_hide(dropdownElement);

    } else {
      navbar_dropdown_show(dropdownElement);
    }
  };

  const init_navbar_dropdown = (scopeElement: Document | HTMLElement) => {

    const dropdownLinkElements =
      scopeElement.querySelectorAll(".navbar-item.has-dropdown:not(.is-hoverable) > .navbar-link:not([" + config.get("bulmaJS.initAttribute") + "])");

    for (const dropdownLinkElement of dropdownLinkElements) {

      // Ensure the dropdown link is focusable
      if (dropdownLinkElement.tagName === "A") {
        (dropdownLinkElement as HTMLAnchorElement).href = "#";
      }

      // Set the link's role
      dropdownLinkElement.setAttribute("role", "menuitem");

      // Make the popup known
      dropdownLinkElement.setAttribute("aria-haspopup", "true");

      // Set the initial expanded state
      if (dropdownLinkElement.closest(".navbar-item.has-dropdown").classList.contains("is-active")) {
        dropdownLinkElement.setAttribute("aria-expanded", "true");
      } else {
        dropdownLinkElement.setAttribute("aria-expanded", "false");
      }

      // Link to the dropdown content
      if (!dropdownLinkElement.hasAttribute("aria-controls")) {
        const navbarDropdownId = getNewElementId();
        dropdownLinkElement.setAttribute("aria-controls", navbarDropdownId);
        dropdownLinkElement.closest(".navbar-item.has-dropdown").querySelector(".navbar-dropdown").id = navbarDropdownId;
      }

      // Set up the event listener
      dropdownLinkElement.addEventListener("click", navbar_dropdown_toggle);

      // Add support for Space key
      if (dropdownLinkElement.tagName === "A") {
        dropdownLinkElement.addEventListener("keyup", anchorElementSpaceKeyToggle);
      }

      // Mark as initialized
      dropdownLinkElement.setAttribute(config.get("bulmaJS.initAttribute") as string, "true");
    }
  };

  /*
   * Dropdown
   * https://bulma.io/documentation/components/dropdown/
   */

  const dropdown_hide = (dropdownElement: HTMLElement) => {

    dropdownElement.classList.remove("is-active");

    const dropdownTriggerButtonElement = dropdownElement.querySelector(".dropdown-trigger button");
    dropdownTriggerButtonElement.setAttribute("aria-expanded", "false");
  };

  const dropdown_show = (dropdownElement: HTMLElement) => {

    dropdownElement.classList.add("is-active");

    const dropdownTriggerButtonElement = dropdownElement.querySelector(".dropdown-trigger button");
    dropdownTriggerButtonElement.setAttribute("aria-expanded", "true");
  };

  const dropdown_toggle = (clickEvent: Event) => {

    const dropdownTriggerButtonElement = clickEvent.currentTarget as HTMLElement;
    const dropdownElement = dropdownTriggerButtonElement.closest(".dropdown") as HTMLElement;

    if (dropdownElement.classList.contains("is-active")) {
      dropdown_hide(dropdownElement);
    } else {
      dropdown_show(dropdownElement);
    }
  };

  const init_dropdown = (scopeElement: Document | HTMLElement) => {

    const dropdownTriggerButtonElements =
      scopeElement.querySelectorAll(".dropdown:not(.is-hoverable) > .dropdown-trigger button:not([" + config.get("bulmaJS.initAttribute") + "])");

    for (const dropdownTriggerButtonElement of dropdownTriggerButtonElements) {

      const dropdownMenuElement = dropdownTriggerButtonElement.closest(".dropdown").querySelector(".dropdown-menu");

      // Make the popup known
      dropdownTriggerButtonElement.setAttribute("aria-haspopup", "true");

      // Link to the dropdown content
      if (!dropdownTriggerButtonElement.hasAttribute("aria-controls")) {
        const dropdownMenuId = getNewElementId();
        dropdownTriggerButtonElement.setAttribute("aria-controls", dropdownMenuId);
        dropdownMenuElement.id = dropdownMenuId;
      }

      // Apply menuitem roles when a menu is used
      if (dropdownMenuElement.getAttribute("role") === "menu") {

        const dropdownItemElements = dropdownMenuElement.querySelectorAll("a.dropdown-item");

        for (const dropdownItemElement of dropdownItemElements) {
          dropdownItemElement.setAttribute("role", "menuitem");
        }
      }

      // Set up the event listener
      dropdownTriggerButtonElement.addEventListener("click", dropdown_toggle);

      // Mark as initialized
      dropdownTriggerButtonElement.setAttribute(config.get("bulmaJS.initAttribute") as string, "true");
    }
  };

  /*
   * Init
   */

  const init = (scopeElement: Document | HTMLElement = document) => {

    if (config.get("navbar.burger")) {
      init_navbar_burger(scopeElement);
    }

    if (config.get("navbar.dropdown")) {
      init_navbar_dropdown(scopeElement);
    }

    if (config.get("dropdown")) {
      init_dropdown(scopeElement);
    }

    if (config.get("window.collapse")) {
      window.addEventListener("click", window_collapse);
    }
  };

  const bulmaJS: types.BulmaJS = {
    setConfig: (propertyName: string, propertyValue: unknown) => {
      config[propertyName] = propertyValue;
    },
    init,
    hideAllDropdowns: () => {
      window_collapse();
    }
  };

  window.bulmaJS = bulmaJS;
})();
