const header = document.querySelector(".site-header");

let ultimoEstado = false; // controla estado atual

window.addEventListener("scroll", () => {
  const scrollAtual = window.scrollY;

  // só ativa o header compacto depois de um scroll maior
  if (scrollAtual > 80 && !ultimoEstado) {
    header.classList.add("scrolled");
    ultimoEstado = true;
  }

  // só volta ao normal quando realmente chega no topo
  if (scrollAtual < 20 && ultimoEstado) {
    header.classList.remove("scrolled");
    ultimoEstado = false;
  }
});
