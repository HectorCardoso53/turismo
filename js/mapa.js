const container = document.querySelector(".mapa-container");

pontosTuristicos.forEach(ponto => {
  const el = document.createElement("a");
  el.classList.add("ponto");
  el.textContent = ponto.icon;
  el.title = ponto.nome;

  // posição visual no mapa
  el.style.top = ponto.top;
  el.style.left = ponto.left;

  if (ponto.pagina) {
    el.href = ponto.pagina;
  } else {
    el.href = "#";
    el.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`${ponto.nome}\n\n📍 Conteúdo em construção`);
    });
  }

  container.appendChild(el);
});
