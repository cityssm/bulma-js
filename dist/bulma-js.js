"use strict";

if (typeof window !== 'undefined' && typeof globalThis === 'undefined') {
    ;
    window.globalThis = window;
}
;
(() => {
    const config = new Map();
    config.set('bulmaJS.initAttribute', 'data-bulma-js-init');
    config.set('bulmaJS.elementIdPrefix', 'bulma-js-');
    config.set('navbar.burger', true);
    config.set('navbar.dropdown', true);
    config.set('dropdown', true);
    config.set('tabs', true);
    config.set('delete.button', true);
    config.set('window.collapse', true);
    function modal_htmlClipped_set() {
        document.documentElement.classList.add('is-clipped');
    }
    function modal_htmlClipped_toggle() {
        if (document.querySelectorAll('.modal.is-active').length > 0) {
            modal_htmlClipped_set();
        }
        else {
            document.documentElement.classList.remove('is-clipped');
        }
    }
    let elementIdIndex = Date.now();
    function getNewElementId() {
        elementIdIndex += 1;
        return `bulma-js-${elementIdIndex}`;
    }
    function anchorElementSpaceKeyToggle(keyEvent) {
        if (keyEvent.key === ' ') {
            keyEvent.preventDefault();
            keyEvent.currentTarget.click();
        }
    }
    let window_collapse_init = false;
    function window_collapse(clickEvent) {
        const element = clickEvent ? clickEvent.target : undefined;
        const navbarDropdownElements = document.querySelectorAll('.navbar-item.has-dropdown.is-active');
        for (const navbarDropdownElement of navbarDropdownElements) {
            if (!element ||
                (!navbarDropdownElement.contains(element) &&
                    navbarDropdownElement !== element)) {
                navbar_dropdown_hide(navbarDropdownElement);
            }
        }
        const dropdownElements = document.querySelectorAll('.dropdown.is-active');
        for (const dropdownElement of dropdownElements) {
            if (!element ||
                (!dropdownElement.contains(element) && dropdownElement !== element)) {
                dropdown_hide(dropdownElement);
            }
        }
    }
    function navbar_burger_toggle(clickEvent) {
        var _a;
        clickEvent.preventDefault();
        const burgerButtonElement = clickEvent.currentTarget;
        const menuElement = (_a = burgerButtonElement
            .closest('.navbar')) === null || _a === void 0 ? void 0 : _a.querySelector('.navbar-menu');
        if (menuElement === undefined || menuElement === null) {
            return;
        }
        if (burgerButtonElement.classList.contains('is-active')) {
            menuElement.classList.remove('is-active');
            burgerButtonElement.classList.remove('is-active');
            burgerButtonElement.setAttribute('aria-expanded', 'false');
        }
        else {
            menuElement.classList.add('is-active');
            burgerButtonElement.classList.add('is-active');
            burgerButtonElement.setAttribute('aria-expanded', 'true');
        }
    }
    function init_navbar_burger(scopeElement) {
        const burgerButtonElements = scopeElement.querySelectorAll('.navbar-burger:not([' + config.get('bulmaJS.initAttribute') + '])');
        for (const burgerButtonElement of burgerButtonElements) {
            if (burgerButtonElement.tagName === 'A') {
                ;
                burgerButtonElement.href = '#';
                burgerButtonElement.setAttribute('role', 'button');
            }
            burgerButtonElement.addEventListener('click', navbar_burger_toggle);
            if (burgerButtonElement.tagName === 'A') {
                burgerButtonElement.addEventListener('keyup', anchorElementSpaceKeyToggle);
            }
            burgerButtonElement.setAttribute(config.get('bulmaJS.initAttribute'), 'true');
        }
    }
    function navbar_dropdown_show(navbarDropdownElement) {
        navbarDropdownElement.classList.add('is-active');
        const navbarDropdownLinkElement = navbarDropdownElement.querySelector('.navbar-link');
        navbarDropdownLinkElement === null || navbarDropdownLinkElement === void 0 ? void 0 : navbarDropdownLinkElement.setAttribute('aria-expanded', 'true');
    }
    function navbar_dropdown_hide(navbarDropdownElement) {
        navbarDropdownElement.classList.remove('is-active');
        const navbarDropdownLinkElement = navbarDropdownElement.querySelector('.navbar-link');
        navbarDropdownLinkElement === null || navbarDropdownLinkElement === void 0 ? void 0 : navbarDropdownLinkElement.setAttribute('aria-expanded', 'false');
    }
    function navbar_dropdown_toggle(clickEvent) {
        clickEvent.preventDefault();
        const dropdownLinkElement = clickEvent.currentTarget;
        const dropdownElement = dropdownLinkElement.closest('.navbar-item.has-dropdown');
        if (dropdownElement.classList.contains('is-active')) {
            navbar_dropdown_hide(dropdownElement);
        }
        else {
            navbar_dropdown_show(dropdownElement);
        }
    }
    function init_navbar_dropdown(scopeElement) {
        var _a, _b;
        const dropdownLinkElements = scopeElement.querySelectorAll('.navbar-item.has-dropdown:not(.is-hoverable) > .navbar-link:not([' +
            config.get('bulmaJS.initAttribute') +
            '])');
        for (const dropdownLinkElement of dropdownLinkElements) {
            if (dropdownLinkElement.tagName === 'A') {
                ;
                dropdownLinkElement.href = '#';
            }
            dropdownLinkElement.setAttribute('role', 'menuitem');
            dropdownLinkElement.setAttribute('aria-haspopup', 'true');
            if ((_a = dropdownLinkElement
                .closest('.navbar-item.has-dropdown')) === null || _a === void 0 ? void 0 : _a.classList.contains('is-active')) {
                dropdownLinkElement.setAttribute('aria-expanded', 'true');
            }
            else {
                dropdownLinkElement.setAttribute('aria-expanded', 'false');
            }
            if (!dropdownLinkElement.hasAttribute('aria-controls')) {
                const navbarDropdownId = getNewElementId();
                dropdownLinkElement.setAttribute('aria-controls', navbarDropdownId);
                const dropdownElement = (_b = dropdownLinkElement
                    .closest('.navbar-item.has-dropdown')) === null || _b === void 0 ? void 0 : _b.querySelector('.navbar-dropdown');
                if (dropdownElement !== null && dropdownElement !== undefined) {
                    dropdownElement.id = navbarDropdownId;
                }
            }
            dropdownLinkElement.addEventListener('click', navbar_dropdown_toggle);
            if (dropdownLinkElement.tagName === 'A') {
                dropdownLinkElement.addEventListener('keyup', anchorElementSpaceKeyToggle);
            }
            dropdownLinkElement.setAttribute(config.get('bulmaJS.initAttribute'), 'true');
        }
    }
    function dropdown_hide(dropdownElement) {
        dropdownElement.classList.remove('is-active');
        const dropdownTriggerButtonElement = dropdownElement.querySelector('.dropdown-trigger button');
        dropdownTriggerButtonElement === null || dropdownTriggerButtonElement === void 0 ? void 0 : dropdownTriggerButtonElement.setAttribute('aria-expanded', 'false');
    }
    function dropdown_show(dropdownElement) {
        dropdownElement.classList.add('is-active');
        const dropdownTriggerButtonElement = dropdownElement.querySelector('.dropdown-trigger button');
        dropdownTriggerButtonElement === null || dropdownTriggerButtonElement === void 0 ? void 0 : dropdownTriggerButtonElement.setAttribute('aria-expanded', 'true');
    }
    function dropdown_toggle(clickEvent) {
        const dropdownTriggerButtonElement = clickEvent.currentTarget;
        const dropdownElement = dropdownTriggerButtonElement.closest('.dropdown');
        if (dropdownElement.classList.contains('is-active')) {
            dropdown_hide(dropdownElement);
        }
        else {
            dropdown_show(dropdownElement);
        }
    }
    function init_dropdown(scopeElement) {
        var _a;
        const dropdownTriggerButtonElements = scopeElement.querySelectorAll('.dropdown:not(.is-hoverable) > .dropdown-trigger button:not([' +
            config.get('bulmaJS.initAttribute') +
            '])');
        for (const dropdownTriggerButtonElement of dropdownTriggerButtonElements) {
            const dropdownMenuElement = (_a = dropdownTriggerButtonElement
                .closest('.dropdown')) === null || _a === void 0 ? void 0 : _a.querySelector('.dropdown-menu');
            dropdownTriggerButtonElement.setAttribute('aria-haspopup', 'true');
            if (!dropdownTriggerButtonElement.hasAttribute('aria-controls')) {
                const dropdownMenuId = getNewElementId();
                dropdownTriggerButtonElement.setAttribute('aria-controls', dropdownMenuId);
                dropdownMenuElement.id = dropdownMenuId;
            }
            if (dropdownMenuElement.getAttribute('role') === 'menu') {
                const dropdownItemElements = dropdownMenuElement.querySelectorAll('a.dropdown-item');
                for (const dropdownItemElement of dropdownItemElements) {
                    dropdownItemElement.setAttribute('role', 'menuitem');
                }
            }
            dropdownTriggerButtonElement.addEventListener('click', dropdown_toggle);
            dropdownTriggerButtonElement.setAttribute(config.get('bulmaJS.initAttribute'), 'true');
        }
    }
    function tab_show(clickEvent) {
        var _a, _b, _c, _d, _e, _f;
        clickEvent.preventDefault();
        const selectedTabAnchorElement = clickEvent.currentTarget;
        const tabAnchorElements = (_b = (_a = selectedTabAnchorElement
            .closest('.tabs')) === null || _a === void 0 ? void 0 : _a.querySelectorAll("a[role='tab']")) !== null && _b !== void 0 ? _b : [];
        for (const tabAnchorElement of tabAnchorElements) {
            tabAnchorElement.ariaSelected = 'false';
            (_c = tabAnchorElement.closest('li')) === null || _c === void 0 ? void 0 : _c.classList.remove('is-active');
            (_d = document
                .querySelector('#' + tabAnchorElement.getAttribute('aria-controls'))) === null || _d === void 0 ? void 0 : _d.classList.add('is-hidden');
        }
        selectedTabAnchorElement.ariaSelected = 'true';
        (_e = selectedTabAnchorElement.closest('li')) === null || _e === void 0 ? void 0 : _e.classList.add('is-active');
        (_f = document
            .querySelector('#' + selectedTabAnchorElement.getAttribute('aria-controls'))) === null || _f === void 0 ? void 0 : _f.classList.remove('is-hidden');
    }
    function init_tabs(scopeElement) {
        var _a, _b;
        const tabAnchorElements = scopeElement.querySelectorAll(".tabs a[href^='#']:not([" + config.get('bulmaJS.initAttribute') + '])');
        for (const tabAnchorElement of tabAnchorElements) {
            tabAnchorElement.setAttribute('role', 'tab');
            (_a = tabAnchorElement.closest('.tabs')) === null || _a === void 0 ? void 0 : _a.setAttribute('role', 'tablist');
            tabAnchorElement.ariaSelected = ((_b = tabAnchorElement
                .closest('li')) === null || _b === void 0 ? void 0 : _b.classList.contains('is-active'))
                ? 'true'
                : 'false';
            const tabPanelElementId = tabAnchorElement.href.slice(Math.max(0, tabAnchorElement.href.indexOf('#') + 1));
            const tabPanelElement = scopeElement.querySelector(`#${tabPanelElementId}`);
            tabPanelElement === null || tabPanelElement === void 0 ? void 0 : tabPanelElement.setAttribute('role', 'tabpanel');
            tabAnchorElement.setAttribute('aria-controls', tabPanelElement.id);
            let tabAnchorElementId = tabAnchorElement.id;
            if (!tabAnchorElementId || tabAnchorElementId === '') {
                tabAnchorElementId = getNewElementId();
                tabAnchorElement.id = tabAnchorElementId;
            }
            tabPanelElement === null || tabPanelElement === void 0 ? void 0 : tabPanelElement.setAttribute('aria-labelledby', tabAnchorElementId);
            tabAnchorElement.addEventListener('click', tab_show);
            tabAnchorElement.setAttribute(config.get('bulmaJS.initAttribute'), 'true');
        }
    }
    function init_delete_button(scopeElement) {
        const notificationDeleteElements = scopeElement.querySelectorAll('.message button.delete, .notification button.delete, .tag button.delete');
        for (const notificationDeleteElement of notificationDeleteElements) {
            notificationDeleteElement.addEventListener('click', () => {
                notificationDeleteElement
                    .closest('.message, .notification, .tag')
                    .remove();
            });
        }
    }
    function alertConfirm(confirmOptions, showCancelButton) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const activeElement = document.activeElement;
        const modalElement = document.createElement('div');
        modalElement.className = 'modal is-active';
        const messageHeaderId = getNewElementId();
        modalElement.innerHTML = `<div class="modal-background"></div>
        <div class="modal-content" role="alertdialog" aria-live="assertive">
          <aside class="message is-${(_a = confirmOptions.contextualColorName) !== null && _a !== void 0 ? _a : 'info'}">
            ${confirmOptions.title
            ? `<header class="message-header" id="${messageHeaderId}"></header>`
            : ''}
            <div class="message-body">
              <div class="buttons is-justify-content-end mt-4"></div>
            </div>
          </aside>
        </div>`;
        if (confirmOptions.title) {
            ;
            modalElement.querySelector('.message-header').textContent = confirmOptions.title;
            (_b = modalElement
                .querySelector('.modal-content')) === null || _b === void 0 ? void 0 : _b.setAttribute('aria-labelledby', messageHeaderId);
        }
        if (confirmOptions.messageIsHtml) {
            (_c = modalElement
                .querySelector('.message-body')) === null || _c === void 0 ? void 0 : _c.insertAdjacentHTML('afterbegin', confirmOptions.message);
        }
        else {
            const paragraphElement = document.createElement('p');
            paragraphElement.textContent = confirmOptions.message;
            (_d = modalElement.querySelector('.message-body')) === null || _d === void 0 ? void 0 : _d.prepend(paragraphElement);
        }
        const okButtonElement = document.createElement('button');
        okButtonElement.className =
            'button is-' +
                (((_e = confirmOptions.okButton) === null || _e === void 0 ? void 0 : _e.contextualColorName) ||
                    confirmOptions.contextualColorName ||
                    'info');
        okButtonElement.dataset.cy = 'ok';
        if ((_f = confirmOptions.okButton) === null || _f === void 0 ? void 0 : _f.textIsHtml) {
            okButtonElement.innerHTML = (_h = (_g = confirmOptions.okButton) === null || _g === void 0 ? void 0 : _g.text) !== null && _h !== void 0 ? _h : 'OK';
        }
        else {
            okButtonElement.textContent = (_k = (_j = confirmOptions.okButton) === null || _j === void 0 ? void 0 : _j.text) !== null && _k !== void 0 ? _k : 'OK';
        }
        okButtonElement.addEventListener('click', () => {
            var _a;
            modalElement.remove();
            modal_htmlClipped_toggle();
            activeElement.focus();
            if ((_a = confirmOptions.okButton) === null || _a === void 0 ? void 0 : _a.callbackFunction) {
                confirmOptions.okButton.callbackFunction();
            }
        });
        (_l = modalElement.querySelector('.buttons')) === null || _l === void 0 ? void 0 : _l.append(okButtonElement);
        if (showCancelButton) {
            const cancelButtonElement = document.createElement('button');
            cancelButtonElement.className = 'button';
            cancelButtonElement.dataset.cy = 'cancel';
            if ((_m = confirmOptions.cancelButton) === null || _m === void 0 ? void 0 : _m.contextualColorName) {
                cancelButtonElement.classList.add('is-' + confirmOptions.cancelButton.contextualColorName);
            }
            if ((_o = confirmOptions.cancelButton) === null || _o === void 0 ? void 0 : _o.textIsHtml) {
                cancelButtonElement.innerHTML =
                    (_q = (_p = confirmOptions.cancelButton) === null || _p === void 0 ? void 0 : _p.text) !== null && _q !== void 0 ? _q : 'Cancel';
            }
            else {
                cancelButtonElement.textContent =
                    (_s = (_r = confirmOptions.cancelButton) === null || _r === void 0 ? void 0 : _r.text) !== null && _s !== void 0 ? _s : 'Cancel';
            }
            cancelButtonElement.addEventListener('click', () => {
                var _a;
                modalElement.remove();
                modal_htmlClipped_toggle();
                activeElement.focus();
                if ((_a = confirmOptions.cancelButton) === null || _a === void 0 ? void 0 : _a.callbackFunction) {
                    confirmOptions.cancelButton.callbackFunction();
                }
            });
            (_t = modalElement.querySelector('.buttons')) === null || _t === void 0 ? void 0 : _t.prepend(cancelButtonElement);
        }
        document.body.append(modalElement);
        modal_htmlClipped_set();
        okButtonElement.focus();
    }
    function confirm(confirmOptions) {
        alertConfirm(confirmOptions, true);
    }
    function alert(alertOptions) {
        const confirmOptions = typeof alertOptions === 'string'
            ? {
                message: alertOptions,
                messageIsHtml: false
            }
            : Object.assign({}, alertOptions);
        alertConfirm(confirmOptions, false);
    }
    function init(scopeElement = document) {
        if (config.get('navbar.burger')) {
            init_navbar_burger(scopeElement);
        }
        if (config.get('navbar.dropdown')) {
            init_navbar_dropdown(scopeElement);
        }
        if (config.get('dropdown')) {
            init_dropdown(scopeElement);
        }
        if (config.get('tabs')) {
            init_tabs(scopeElement);
        }
        if (config.get('delete.button')) {
            init_delete_button(scopeElement);
        }
        if (config.get('window.collapse') && !window_collapse_init) {
            window.addEventListener('click', window_collapse);
            window_collapse_init = true;
        }
    }
    const bulmaJS = {
        setConfig: (propertyName, propertyValue) => {
            config[propertyName] = propertyValue;
        },
        init,
        hideAllDropdowns: () => {
            window_collapse();
        },
        alert,
        confirm,
        toggleHtmlClipped: () => {
            modal_htmlClipped_toggle();
        }
    };
    globalThis.bulmaJS = bulmaJS;
})();
