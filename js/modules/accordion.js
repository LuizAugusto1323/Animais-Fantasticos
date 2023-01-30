export default function initAccordion() {
  //  pegamos todas as dt
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';

  function activeAccordion() {
    this.classList.toggle(activeClass);
    //  nextElementSibling seleciona o proximo item direto
    this.nextElementSibling.classList.toggle(activeClass);
  }

  //  caso a seleção esteja incorreta nao executa (verificação)
  if (accordionList.length) {
  //  adiciona a classe diretamente para que uma fique ativa ao entrar na pagina
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    //  this faz referencia ao proprio item selecionado

    /* para cada dt que foi selecionado, dicionamos o evento de click que
    chama a funcao e adiciona a classe */
    accordionList.forEach((accordion) => {
      accordion.addEventListener('click', activeAccordion);
    });
  }
}
