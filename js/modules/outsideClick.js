// o primeiro argumento é o elemento(menu ou this) o segundo é uma função de callback que é passada
// somente quando esta função é chamada, pois foi passada como um argumento;
export default function outsideClick(element, events, callback) {
  // selecionamos o ducmento html
  const html = document.documentElement;
  const outside = 'data-outside';
  function handleOutsideClick(event) {
    /* se o nosso elemento, que é o this que foi passado como argumento,
    e que faz referencia ao menu,    nao conter o target do event e fizer
    referencia ao objeto que chama essa função, ou seja o data-dropdown */
    if (!element.contains(event.target)) {
      // remove o atributo data-outside
      element.removeAttribute(outside);

      // remove o evento do html
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });

      /* aqui somente ativamos a função de callback que sera passada quando a
      função principal for chamada, ela ira servir para retirar a classe quando
      o evento handleOutsideClick for ativado */
      callback();
    }
  }

  // se o nosso elemento, ou seja, this nao tiver o atributo data-outside
  if (!element.hasAttribute(outside)) {
    // adicionamos os eventos de clique e touch no html completo
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));
    });

    // adicionamos este atributo somente para saber se o evento ja
    // ocorreu ou nao, para que nao fique se repetindo, aconteça somente uma vez
    element.setAttribute(outside, '');
  }
}
