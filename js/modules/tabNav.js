// colocamos tudo dentro de uma função para isolar o
// codigo e não haver conflito entre nomes de variaveis e etc
export default function initTabNav() {
  // seleciona a lista de imagens
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');

  // seleciona as sessões (texto ao lado)
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo', direcao);
  }
  // faz uma verificação e executa a função caso retorne true
  if (tabMenu.length && tabContent.length) {
    // adiciona a classe ativo ao primeiro item para nao ficar tudo em branco
    tabContent[0].classList.add('ativo');

    // para cada sessao, remova a classe ativo caso houver e depois adicione
    // obs, funciona dessa maneira pq tanto as sessões e as imagens tem o
    // mesmo numero de index/itens para cada imagem, adicione o evento
    // click e quando ocorrer chame a funçãp a cima
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
