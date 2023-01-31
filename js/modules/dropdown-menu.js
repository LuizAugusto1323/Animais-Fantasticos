import outsideClick from './outsideClick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenu = document.querySelectorAll(dropdownMenus);
    this.activeClass = 'ativo';

    // define click como argumento padrao de events
    if (events === undefined) this.events = ['click'];
    else this.events = events;
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropdwon menu e adiciona a funcao que
  // observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  // adiciona os eventos ao dropdwon menu
  addDropdownMenusEvent() {
    this.dropdownMenu.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenu.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
