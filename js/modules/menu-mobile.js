import outsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor(menuBtn, menuLista, eventos) {
    this.menuButton = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuLista);
    this.evento = [eventos];
    this.nameClass = 'active';

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuList.classList.add(this.nameClass);
    this.menuButton.classList.add(this.nameClass);
    outsideClick(this.menuList, this.evento, () => {
      this.menuList.classList.remove(this.nameClass);
      this.menuButton.classList.remove(this.nameClass);
    });
  }

  addMenuMobileEvents() {
    this.evento.forEach((evento) => {
      this.menuButton.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
