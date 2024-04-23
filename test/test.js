(() => {
    var _a, _b, _c, _d;
    (_a = document
        .querySelector('#add-dropdown-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (clickEvent) => {
        clickEvent.preventDefault();
        const buttonElement = clickEvent.currentTarget;
        buttonElement.insertAdjacentHTML('beforebegin', ` <div class="dropdown">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true">
        <span>Dropdown button</span>
        <span class="icon is-small">
          🔻
        </span>
      </button>
    </div>
    <div class="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="#" class="dropdown-item">
          Dropdown item
        </a>
        <a href="#" class="dropdown-item">
          Other dropdown item
        </a>
        <a href="#" class="dropdown-item">
          Active dropdown item
        </a>
        <a href="#" class="dropdown-item">
          Other dropdown item
        </a>
        <hr class="dropdown-divider">
        <a href="#" class="dropdown-item">
          With a divider
        </a>
      </div>
    </div>
  </div> `);
        bulmaJS.init(buttonElement.parentNode);
    });
    (_b = document.querySelector('#alert--native')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        alert('Native Browser Alert');
    });
    (_c = document.querySelector('#alert--basic')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
        bulmaJS.alert('Basic Bulma Alert');
    });
    (_d = document.querySelector('#confirm--complex')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
        bulmaJS.confirm({
            title: 'Complex Alert',
            message: 'Did it get your <strong>attention</strong>?',
            messageIsHtml: true,
            contextualColorName: 'danger',
            okButton: {
                text: '<strong>Yes</strong>, Definitely',
                textIsHtml: true,
                callbackFunction: () => {
                    console.log('OK Button Pressed');
                }
            },
            cancelButton: {
                text: 'Nope',
                callbackFunction: () => {
                    console.log('Cancel Button Pressed');
                }
            }
        });
    });
})();
