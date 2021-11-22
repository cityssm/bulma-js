(() => {

  document.querySelector("#add-dropdown-button").addEventListener("click", (clickEvent) => {

    clickEvent.preventDefault();

    const buttonElement = clickEvent.currentTarget as HTMLElement;

    buttonElement.insertAdjacentHTML("beforebegin",
      ` <div class="dropdown">
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
})();
