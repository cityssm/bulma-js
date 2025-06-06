"use strict";
if (typeof window !== 'undefined' && typeof globalThis === 'undefined') {
    ;
    window.globalThis = window;
}
;
(function () {
    var config = new Map();
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
    var elementIdIndex = Date.now();
    function getNewElementId() {
        elementIdIndex += 1;
        return "bulma-js-".concat(elementIdIndex);
    }
    function anchorElementSpaceKeyToggle(keyEvent) {
        if (keyEvent.key === ' ') {
            keyEvent.preventDefault();
            keyEvent.currentTarget.click();
        }
    }
    var window_collapse_init = false;
    function window_collapse(clickEvent) {
        var element = clickEvent ? clickEvent.target : undefined;
        var navbarDropdownElements = document.querySelectorAll('.navbar-item.has-dropdown.is-active');
        for (var _i = 0, navbarDropdownElements_1 = navbarDropdownElements; _i < navbarDropdownElements_1.length; _i++) {
            var navbarDropdownElement = navbarDropdownElements_1[_i];
            if (!element ||
                (!navbarDropdownElement.contains(element) &&
                    navbarDropdownElement !== element)) {
                navbar_dropdown_hide(navbarDropdownElement);
            }
        }
        var dropdownElements = document.querySelectorAll('.dropdown.is-active');
        for (var _a = 0, dropdownElements_1 = dropdownElements; _a < dropdownElements_1.length; _a++) {
            var dropdownElement = dropdownElements_1[_a];
            if (!element ||
                (!dropdownElement.contains(element) && dropdownElement !== element)) {
                dropdown_hide(dropdownElement);
            }
        }
    }
    function navbar_burger_toggle(clickEvent) {
        var _a;
        clickEvent.preventDefault();
        var burgerButtonElement = clickEvent.currentTarget;
        var menuElement = (_a = burgerButtonElement
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
        var burgerButtonElements = scopeElement.querySelectorAll('.navbar-burger:not([' + config.get('bulmaJS.initAttribute') + '])');
        for (var _i = 0, burgerButtonElements_1 = burgerButtonElements; _i < burgerButtonElements_1.length; _i++) {
            var burgerButtonElement = burgerButtonElements_1[_i];
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
        var navbarDropdownLinkElement = navbarDropdownElement.querySelector('.navbar-link');
        navbarDropdownLinkElement === null || navbarDropdownLinkElement === void 0 ? void 0 : navbarDropdownLinkElement.setAttribute('aria-expanded', 'true');
    }
    function navbar_dropdown_hide(navbarDropdownElement) {
        navbarDropdownElement.classList.remove('is-active');
        var navbarDropdownLinkElement = navbarDropdownElement.querySelector('.navbar-link');
        navbarDropdownLinkElement === null || navbarDropdownLinkElement === void 0 ? void 0 : navbarDropdownLinkElement.setAttribute('aria-expanded', 'false');
    }
    function navbar_dropdown_toggle(clickEvent) {
        clickEvent.preventDefault();
        var dropdownLinkElement = clickEvent.currentTarget;
        var dropdownElement = dropdownLinkElement.closest('.navbar-item.has-dropdown');
        if (dropdownElement.classList.contains('is-active')) {
            navbar_dropdown_hide(dropdownElement);
        }
        else {
            navbar_dropdown_show(dropdownElement);
        }
    }
    function init_navbar_dropdown(scopeElement) {
        var _a, _b;
        var dropdownLinkElements = scopeElement.querySelectorAll('.navbar-item.has-dropdown:not(.is-hoverable) > .navbar-link:not([' +
            config.get('bulmaJS.initAttribute') +
            '])');
        for (var _i = 0, dropdownLinkElements_1 = dropdownLinkElements; _i < dropdownLinkElements_1.length; _i++) {
            var dropdownLinkElement = dropdownLinkElements_1[_i];
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
                var navbarDropdownId = getNewElementId();
                dropdownLinkElement.setAttribute('aria-controls', navbarDropdownId);
                var dropdownElement = (_b = dropdownLinkElement
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
        var dropdownTriggerButtonElement = dropdownElement.querySelector('.dropdown-trigger button');
        dropdownTriggerButtonElement === null || dropdownTriggerButtonElement === void 0 ? void 0 : dropdownTriggerButtonElement.setAttribute('aria-expanded', 'false');
    }
    function dropdown_show(dropdownElement) {
        dropdownElement.classList.add('is-active');
        var dropdownTriggerButtonElement = dropdownElement.querySelector('.dropdown-trigger button');
        dropdownTriggerButtonElement === null || dropdownTriggerButtonElement === void 0 ? void 0 : dropdownTriggerButtonElement.setAttribute('aria-expanded', 'true');
    }
    function dropdown_toggle(clickEvent) {
        var dropdownTriggerButtonElement = clickEvent.currentTarget;
        var dropdownElement = dropdownTriggerButtonElement.closest('.dropdown');
        if (dropdownElement.classList.contains('is-active')) {
            dropdown_hide(dropdownElement);
        }
        else {
            dropdown_show(dropdownElement);
        }
    }
    function init_dropdown(scopeElement) {
        var _a;
        var dropdownTriggerButtonElements = scopeElement.querySelectorAll('.dropdown:not(.is-hoverable) > .dropdown-trigger button:not([' +
            config.get('bulmaJS.initAttribute') +
            '])');
        for (var _i = 0, dropdownTriggerButtonElements_1 = dropdownTriggerButtonElements; _i < dropdownTriggerButtonElements_1.length; _i++) {
            var dropdownTriggerButtonElement = dropdownTriggerButtonElements_1[_i];
            var dropdownMenuElement = (_a = dropdownTriggerButtonElement
                .closest('.dropdown')) === null || _a === void 0 ? void 0 : _a.querySelector('.dropdown-menu');
            dropdownTriggerButtonElement.setAttribute('aria-haspopup', 'true');
            if (!dropdownTriggerButtonElement.hasAttribute('aria-controls')) {
                var dropdownMenuId = getNewElementId();
                dropdownTriggerButtonElement.setAttribute('aria-controls', dropdownMenuId);
                dropdownMenuElement.id = dropdownMenuId;
            }
            if (dropdownMenuElement.getAttribute('role') === 'menu') {
                var dropdownItemElements = dropdownMenuElement.querySelectorAll('a.dropdown-item');
                for (var _b = 0, dropdownItemElements_1 = dropdownItemElements; _b < dropdownItemElements_1.length; _b++) {
                    var dropdownItemElement = dropdownItemElements_1[_b];
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
        var selectedTabAnchorElement = clickEvent.currentTarget;
        var tabAnchorElements = (_b = (_a = selectedTabAnchorElement
            .closest('.tabs')) === null || _a === void 0 ? void 0 : _a.querySelectorAll("a[role='tab']")) !== null && _b !== void 0 ? _b : [];
        for (var _i = 0, tabAnchorElements_1 = tabAnchorElements; _i < tabAnchorElements_1.length; _i++) {
            var tabAnchorElement = tabAnchorElements_1[_i];
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
        var tabAnchorElements = scopeElement.querySelectorAll(".tabs a[href^='#']:not([" + config.get('bulmaJS.initAttribute') + '])');
        for (var _i = 0, tabAnchorElements_2 = tabAnchorElements; _i < tabAnchorElements_2.length; _i++) {
            var tabAnchorElement = tabAnchorElements_2[_i];
            tabAnchorElement.setAttribute('role', 'tab');
            (_a = tabAnchorElement.closest('.tabs')) === null || _a === void 0 ? void 0 : _a.setAttribute('role', 'tablist');
            tabAnchorElement.ariaSelected = ((_b = tabAnchorElement
                .closest('li')) === null || _b === void 0 ? void 0 : _b.classList.contains('is-active'))
                ? 'true'
                : 'false';
            var tabPanelElementId = tabAnchorElement.href.slice(Math.max(0, tabAnchorElement.href.indexOf('#') + 1));
            var tabPanelElement = scopeElement.querySelector("#".concat(tabPanelElementId));
            tabPanelElement === null || tabPanelElement === void 0 ? void 0 : tabPanelElement.setAttribute('role', 'tabpanel');
            tabAnchorElement.setAttribute('aria-controls', tabPanelElement.id);
            var tabAnchorElementId = tabAnchorElement.id;
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
        var notificationDeleteElements = scopeElement.querySelectorAll('.message button.delete, .notification button.delete, .tag button.delete');
        var _loop_1 = function (notificationDeleteElement) {
            notificationDeleteElement.addEventListener('click', function () {
                notificationDeleteElement
                    .closest('.message, .notification, .tag')
                    .remove();
            });
        };
        for (var _i = 0, notificationDeleteElements_1 = notificationDeleteElements; _i < notificationDeleteElements_1.length; _i++) {
            var notificationDeleteElement = notificationDeleteElements_1[_i];
            _loop_1(notificationDeleteElement);
        }
    }
    function alertConfirm(confirmOptions, showCancelButton) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
        var activeElement = document.activeElement;
        var modalElement = document.createElement('div');
        modalElement.className = 'modal is-active';
        modalElement.setAttribute('aria-modal', 'true');
        modalElement.innerHTML =
            '<div class="modal-background"></div>' +
                '<div class="modal-content" role="alertdialog">' +
                ('<aside' +
                    ' class="message is-' +
                    ((_a = confirmOptions.contextualColorName) !== null && _a !== void 0 ? _a : 'info') +
                    '"' +
                    ' role="alert"' +
                    ' aria-live="assertive"' +
                    '>' +
                    (confirmOptions.title
                        ? '<header class="message-header"></header>'
                        : '') +
                    ('<div class="message-body">' +
                        '<div class="buttons is-justify-content-end mt-4"></div>' +
                        '</div>') +
                    '</aside>') +
                '</div>';
        if (confirmOptions.title) {
            modalElement.querySelector('.message-header').textContent =
                confirmOptions.title;
        }
        if (confirmOptions.messageIsHtml) {
            (_b = modalElement
                .querySelector('.message-body')) === null || _b === void 0 ? void 0 : _b.insertAdjacentHTML('afterbegin', confirmOptions.message);
        }
        else {
            var paragraphElement = document.createElement('p');
            paragraphElement.textContent = confirmOptions.message;
            (_c = modalElement.querySelector('.message-body')) === null || _c === void 0 ? void 0 : _c.prepend(paragraphElement);
        }
        var okButtonElement = document.createElement('button');
        okButtonElement.className =
            'button is-' +
                (((_d = confirmOptions.okButton) === null || _d === void 0 ? void 0 : _d.contextualColorName) ||
                    confirmOptions.contextualColorName ||
                    'info');
        okButtonElement.dataset.cy = 'ok';
        if ((_e = confirmOptions.okButton) === null || _e === void 0 ? void 0 : _e.textIsHtml) {
            okButtonElement.innerHTML = (_g = (_f = confirmOptions.okButton) === null || _f === void 0 ? void 0 : _f.text) !== null && _g !== void 0 ? _g : 'OK';
        }
        else {
            okButtonElement.textContent = (_j = (_h = confirmOptions.okButton) === null || _h === void 0 ? void 0 : _h.text) !== null && _j !== void 0 ? _j : 'OK';
        }
        okButtonElement.addEventListener('click', function () {
            var _a;
            modalElement.remove();
            modal_htmlClipped_toggle();
            activeElement.focus();
            if ((_a = confirmOptions.okButton) === null || _a === void 0 ? void 0 : _a.callbackFunction) {
                confirmOptions.okButton.callbackFunction();
            }
        });
        (_k = modalElement.querySelector('.buttons')) === null || _k === void 0 ? void 0 : _k.append(okButtonElement);
        if (showCancelButton) {
            var cancelButtonElement = document.createElement('button');
            cancelButtonElement.className = 'button';
            cancelButtonElement.dataset.cy = 'cancel';
            if ((_l = confirmOptions.cancelButton) === null || _l === void 0 ? void 0 : _l.contextualColorName) {
                cancelButtonElement.classList.add('is-' + confirmOptions.cancelButton.contextualColorName);
            }
            if ((_m = confirmOptions.cancelButton) === null || _m === void 0 ? void 0 : _m.textIsHtml) {
                cancelButtonElement.innerHTML =
                    (_p = (_o = confirmOptions.cancelButton) === null || _o === void 0 ? void 0 : _o.text) !== null && _p !== void 0 ? _p : 'Cancel';
            }
            else {
                cancelButtonElement.textContent =
                    (_r = (_q = confirmOptions.cancelButton) === null || _q === void 0 ? void 0 : _q.text) !== null && _r !== void 0 ? _r : 'Cancel';
            }
            cancelButtonElement.addEventListener('click', function () {
                var _a;
                modalElement.remove();
                modal_htmlClipped_toggle();
                activeElement.focus();
                if ((_a = confirmOptions.cancelButton) === null || _a === void 0 ? void 0 : _a.callbackFunction) {
                    confirmOptions.cancelButton.callbackFunction();
                }
            });
            (_s = modalElement.querySelector('.buttons')) === null || _s === void 0 ? void 0 : _s.prepend(cancelButtonElement);
        }
        document.body.append(modalElement);
        modal_htmlClipped_set();
        okButtonElement.focus();
    }
    function confirm(confirmOptions) {
        alertConfirm(confirmOptions, true);
    }
    function alert(alertOptions) {
        var confirmOptions = typeof alertOptions === 'string'
            ? {
                message: alertOptions,
                messageIsHtml: false
            }
            : Object.assign({}, alertOptions);
        alertConfirm(confirmOptions, false);
    }
    function init(scopeElement) {
        if (scopeElement === void 0) { scopeElement = document; }
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
    var bulmaJS = {
        setConfig: function (propertyName, propertyValue) {
            config[propertyName] = propertyValue;
        },
        init: init,
        hideAllDropdowns: function () {
            window_collapse();
        },
        alert: alert,
        confirm: confirm,
        toggleHtmlClipped: function () {
            modal_htmlClipped_toggle();
        }
    };
    globalThis.bulmaJS = bulmaJS;
})();
