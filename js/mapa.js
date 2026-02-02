const container = document.querySelector(".mapa-container");

pontosTuristicos.forEach(ponto => {

  // CASO — ponto com IMAGEM
  if (ponto.referencia) {
    const link = document.createElement("a");
    link.classList.add("ponto-imagem");

    link.style.top = ponto.top;
    link.style.left = ponto.left;

    // 🔴 SE ESTIVER EM ANDAMENTO
    if (ponto.status === "andamento") {
      link.href = "#";
      link.addEventListener("click", (e) => {
        e.preventDefault();
        alert(`📍 ${ponto.nome}\n\n🚧 Conteúdo em andamento`);
      });
    } else {
      link.href = ponto.pagina;
    }

    const img = document.createElement("img");
    img.src = ponto.referencia;
    img.alt = ponto.nome;

    link.appendChild(img);
    container.appendChild(link);
    return;
  }

  // CASO — ponto normal (emoji)
  const el = document.createElement("a");
  el.classList.add("ponto");
  el.textContent = ponto.icon;
  el.title = ponto.nome;

  el.style.top = ponto.top;
  el.style.left = ponto.left;

  if (ponto.status === "andamento") {
    el.href = "#";
    el.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`📍 ${ponto.nome}\n\n🚧 Conteúdo em andamento`);
    });
  } else {
    el.href = ponto.pagina;
  }

  container.appendChild(el);
});
