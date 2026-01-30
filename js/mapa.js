const container = document.querySelector(".mapa-container");

pontosTuristicos.forEach(ponto => {

  // CASO 1 — ponto com IMAGEM
  if (ponto.referencia) {
    const link = document.createElement("a");
    link.classList.add("ponto-imagem");

    link.style.top = ponto.top;
    link.style.left = ponto.left;
    link.href = ponto.pagina;

    const img = document.createElement("img");
    img.src = ponto.referencia;
    img.alt = ponto.nome;

    link.appendChild(img);
    container.appendChild(link);
    return;
  }

  // CASO 2 — ponto NORMAL (emoji)
  const el = document.createElement("a");
  el.classList.add("ponto");
  el.textContent = ponto.icon;
  el.title = ponto.nome;

  el.style.top = ponto.top;
  el.style.left = ponto.left;
  el.href = ponto.pagina;

  container.appendChild(el);
});
