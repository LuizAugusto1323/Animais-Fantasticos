export default function initAnimacaoScroll() {
  // selecionamos as seções que queremos animar
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  // pegamos a altura total da janela e multiplicamos por 60%
  const windowMetade = window.innerHeight * 0.6;
  function animaScroll() {
    // para cada seção vamos pegar a distancia dela e o topo da pagina
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      // se o resultado da distancia entre o topo do elemento e
      // o topo da pagina for menor do que 60% da janela adicione a classe ativo
      if (sectionTop < windowMetade) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }
  // verificamos se sections existe
  if (sections.length) {
    // chamamos a função pelo menos uma vez antes de executar o
    // evento para que a primeira seção ja fique ativa e com a animação
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
