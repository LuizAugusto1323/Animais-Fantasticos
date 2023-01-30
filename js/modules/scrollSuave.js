export default function initScrollSuave() {
  // selecionamos os links internos
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    // previnimos o comportamento padrao
    event.preventDefault();

    // seleciona o atribut href do elemento clicado, que é igual ao id das seções (#faq por exemplo)
    const href = event.currentTarget.getAttribute('href');

    // seleciona a seção que possui o id igual ao href selecionado
    const section = document.querySelector(href);

    // cria um scroll suave ate a seção selecionada
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    /* //outra alternativa para fazer uma rolagem suave ate o item quando clicado
      const top = section.offsetTop;
      window.scrollTo({
          top: top,
          behavior: "smooth",
      }); */
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
