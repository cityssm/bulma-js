"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
    const config = new Map();
    config.set("bulmaJS.initAttribute", "data-bulma-js-init");
    config.set("bulmaJS.elementIdPrefix", "bulma-js-");
    config.set("navbar.burger", true);
    config.set("navbar.dropdown", true);
    config.set("dropdown", true);
    config.set("window.collapse", true);
    let elementIdIndex = Date.now();
    const getNewElementId = () => {
        elementIdIndex += 1;
        return "bulma-js-" + elementIdIndex;
    };
    const anchorElementSpaceKeyToggle = (keyEvent) => {
        if (keyEvent.key === " ") {
            keyEvent.currentTarget.click();
        }
    };
    const window_collapse = (clickEvent) => {
        const element = clickEvent
            ? clickEvent.target
            : undefined;
        const navbarDropdownElements = document.querySelectorAll(".navbar-item.has-dropdown.is-active");
        for (const navbarDropdownElement of navbarDropdownElements) {
            if (!element || (!navbarDropdownElement.contains(element) && navbarDropdownElement !== element)) {
                navbar_dropdown_hide(navbarDropdownElement);
            }
        }
        const dropdownElements = document.querySelectorAll(".dropdown.is-active");
        for (const dropdownElement of dropdownElements) {
            if (!element || (!dropdownElement.contains(element) && dropdownElement !== element)) {
                dropdown_hide(dropdownElement);
            }
        }
    };
    const navbar_burger_toggle = (clickEvent) => {
        clickEvent.preventDefault();
        const burgerButtonElement = clickEvent.currentTarget;
        const menuElement = burgerButtonElement.closest(".navbar").querySelector(".navbar-menu");
        if (burgerButtonElement.classList.contains("is-active")) {
            menuElement.classList.remove("is-active");
            burgerButtonElement.classList.remove("is-active");
            burgerButtonElement.setAttribute("aria-expanded", "false");
        }
        else {
            menuElement.classList.add("is-active");
            burgerButtonElement.classList.add("is-active");
            burgerButtonElement.setAttribute("aria-expanded", "true");
        }
    };
    const init_navbar_burger = (scopeElement) => {
        const burgerButtonElements = scopeElement.querySelectorAll(".navbar-burger:not([" + config.get("bulmaJS.initAttribute") + "])");
        for (const burgerButtonElement of burgerButtonElements) {
            if (burgerButtonElement.tagName === "A") {
                burgerButtonElement.href = "#";
                burgerButtonElement.setAttribute("role", "button");
            }
            burgerButtonElement.addEventListener("click", navbar_burger_toggle);
            if (burgerButtonElement.tagName === "A") {
                burgerButtonElement.addEventListener("keyup", anchorElementSpaceKeyToggle);
            }
            burgerButtonElement.setAttribute(config.get("bulmaJS.initAttribute"), "true");
        }
    };
    const navbar_dropdown_show = (navbarDropdownElement) => {
        navbarDropdownElement.classList.add("is-active");
        const navbarDropdownLinkElement = navbarDropdownElement.querySelector(".navbar-link");
        navbarDropdownLinkElement.setAttribute("aria-expanded", "true");
    };
    const navbar_dropdown_hide = (navbarDropdownElement) => {
        navbarDropdownElement.classList.remove("is-active");
        const navbarDropdownLinkElement = navbarDropdownElement.querySelector(".navbar-link");
        navbarDropdownLinkElement.setAttribute("aria-expanded", "false");
    };
    const navbar_dropdown_toggle = (clickEvent) => {
        clickEvent.preventDefault();
        const dropdownLinkElement = clickEvent.currentTarget;
        const dropdownElement = dropdownLinkElement.closest(".navbar-item.has-dropdown");
        if (dropdownElement.classList.contains("is-active")) {
            navbar_dropdown_hide(dropdownElement);
        }
        else {
            navbar_dropdown_show(dropdownElement);
        }
    };
    const init_navbar_dropdown = (scopeElement) => {
        const dropdownLinkElements = scopeElement.querySelectorAll(".navbar-item.has-dropdown:not(.is-hoverable) > .navbar-link:not([" + config.get("bulmaJS.initAttribute") + "])");
        for (const dropdownLinkElement of dropdownLinkElements) {
            if (dropdownLinkElement.tagName === "A") {
                dropdownLinkElement.href = "#";
            }
            dropdownLinkElement.setAttribute("role", "menuitem");
            dropdownLinkElement.setAttribute("aria-haspopup", "true");
            if (dropdownLinkElement.closest(".navbar-item.has-dropdown").classList.contains("is-active")) {
                dropdownLinkElement.setAttribute("aria-expanded", "true");
            }
            else {
                dropdownLinkElement.setAttribute("aria-expanded", "false");
            }
            if (!dropdownLinkElement.hasAttribute("aria-controls")) {
                const navbarDropdownId = getNewElementId();
                dropdownLinkElement.setAttribute("aria-controls", navbarDropdownId);
                dropdownLinkElement.closest(".navbar-item.has-dropdown").querySelector(".navbar-dropdown").id = navbarDropdownId;
            }
            dropdownLinkElement.addEventListener("click", navbar_dropdown_toggle);
            if (dropdownLinkElement.tagName === "A") {
                dropdownLinkElement.addEventListener("keyup", anchorElementSpaceKeyToggle);
            }
            dropdownLinkElement.setAttribute(config.get("bulmaJS.initAttribute"), "true");
        }
    };
    const dropdown_hide = (dropdownElement) => {
        dropdownElement.classList.remove("is-active");
        const dropdownTriggerButtonElement = dropdownElement.querySelector(".dropdown-trigger button");
        dropdownTriggerButtonElement.setAttribute("aria-expanded", "false");
    };
    const dropdown_show = (dropdownElement) => {
        dropdownElement.classList.add("is-active");
        const dropdownTriggerButtonElement = dropdownElement.querySelector(".dropdown-trigger button");
        dropdownTriggerButtonElement.setAttribute("aria-expanded", "true");
    };
    const dropdown_toggle = (clickEvent) => {
        const dropdownTriggerButtonElement = clickEvent.currentTarget;
        const dropdownElement = dropdownTriggerButtonElement.closest(".dropdown");
        if (dropdownElement.classList.contains("is-active")) {
            dropdown_hide(dropdownElement);
        }
        else {
            dropdown_show(dropdownElement);
        }
    };
    const init_dropdown = (scopeElement) => {
        const dropdownTriggerButtonElements = scopeElement.querySelectorAll(".dropdown:not(.is-hoverable) > .dropdown-trigger button:not([" + config.get("bulmaJS.initAttribute") + "])");
        for (const dropdownTriggerButtonElement of dropdownTriggerButtonElements) {
            const dropdownMenuElement = dropdownTriggerButtonElement.closest(".dropdown").querySelector(".dropdown-menu");
            dropdownTriggerButtonElement.setAttribute("aria-haspopup", "true");
            if (!dropdownTriggerButtonElement.hasAttribute("aria-controls")) {
                const dropdownMenuId = getNewElementId();
                dropdownTriggerButtonElement.setAttribute("aria-controls", dropdownMenuId);
                dropdownMenuElement.id = dropdownMenuId;
            }
            if (dropdownMenuElement.getAttribute("role") === "menu") {
                const dropdownItemElements = dropdownMenuElement.querySelectorAll("a.dropdown-item");
                for (const dropdownItemElement of dropdownItemElements) {
                    dropdownItemElement.setAttribute("role", "menuitem");
                }
            }
            dropdownTriggerButtonElement.addEventListener("click", dropdown_toggle);
            dropdownTriggerButtonElement.setAttribute(config.get("bulmaJS.initAttribute"), "true");
        }
    };
    const init = (scopeElement = document) => {
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
    const bulmaJS = {
        setConfig: (propertyName, propertyValue) => {
            config[propertyName] = propertyValue;
        },
        init,
        hideAllDropdowns: () => {
            window_collapse();
        }
    };
    window.bulmaJS = bulmaJS;
})();
