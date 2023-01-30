import outsideClick from './outsideClick.js';

export default function initDropdownMenu() {
// selecionamos todos os elementos que teram um sub menu
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  function handleClick(event) {
    // previnimos o padrao do evento
    event.preventDefault();
    // adicionamos a classe ao menu
    this.classList.add('ativo');
    // esta função esta executando uma função dentro dela, a função de callback ativada dentro
    // do handleOutsideClick, ela simplesmente remove a classe do elemento this, ou seja o menu
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  }
  // para cada dropdownMenus adicionaremos os eventos colocadas em um array e
  // chamaremos a função mostrardropdownMenus
  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
