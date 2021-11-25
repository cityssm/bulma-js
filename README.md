# bulma-js

[![Codacy grade](https://img.shields.io/codacy/grade/a9a609f6824b4c61be84701ec8402d48)](https://app.codacy.com/gh/cityssm/bulma-js/dashboard)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/cityssm/bulma-js)](https://codeclimate.com/github/cityssm/bulma-js)

[![Made with Bulma](https://bulma.io/images/made-with-bulma.png)](https://bulma.io)

The unofficial missing JavaScript library for [Bulma](https://bulma.io/) websites.

## Getting Started

Download [bulma-js.js](dist/bulma-js.js) here,
use the [jsDelivr CDN](https://www.jsdelivr.com/package/npm/@cityssm/bulma-js?path=dist),
or install from npm.

```sh
npm install @cityssm/bulma-js
```

Add the following to your HTML.

```html
<script src="dist/bulma-js.js"></script>
<script>
  bulmaJS.init();
</script>
```

## Options

### Toggle Functionality

```javascript
bulmaJS.setConfig("bulma.burger", true);
bulmaJS.setConfig("bulma.dropdown", true);
bulmaJS.setConfig("dropdown", true);
bulmaJS.setConfig("tabs", true);
bulmaJS.setConfig("window.collapse", true); // close dropdowns when clicked outside
```

### Set Unique Element Id Prefix

```javascript
bulmaJS.setConfig("bulmaJS.elementIdPrefix", "bulma-js-");
```

### Set the "Initialized" Attribute Name

```javascript
bulmaJS.setConfig("bulmaJS.initAttribute", "data-bulma-js-init");
```

### Initialize Functionality on Entire Page

Can be called multiple times after page contents have changed.

```javascript
bulmaJS.init();
```

### Initialize Functionality on the Children of an Element

Helpful after populating an area with an AJAX call.

```javascript
bulmaJS.init(document.getElementById("container-element"));
```

## Features So Far

-   Toggles appropriate Bulma classes **and ARIA attributes**.
-   Close `dropdown` and `navbar-dropdown` elements when other parts of the webpage are clicked.

### Navbar

<https://bulma.io/documentation/components/navbar/>

-   Support for the `navbar-burger` element.
-   Support for the `navbar-dropdown` elements.

### Dropdown

<https://bulma.io/documentation/components/dropdown/>

-   Support for the `dropdown` elements.

### Tabs

<https://bulma.io/documentation/components/tabs/>

-   Support for the `tabs` elements.
-   Use the `href` attribute on each tab anchor element to link to
    the corresponding tab panel.
-   All tab panels should be siblings.  Hide the inactive tab panels with the `is-hidden` class.

## Alternative Bulma JavaScript Project

The [BulmaJS](https://github.com/VizuaaLOG/BulmaJS) project
also provides JavaScript functionality for Bulma,
and is **far more complete** than this project.
I recommend you take a look if you need more functionality than is offered here.

This project goes in a different direction in a few ways.

-   Prioritizes simple usage in an HTML `script` tag.  No `import` or `require` necessary.
-   TypeScript types available.
-   Goes beyond just toggling the `is-active` Bulma classes, and manages ARIA attributes as well to increase accessibility.
-   Attempts to correct common issues (i.e. missing roles, missing ids) that may affect accessibility.
