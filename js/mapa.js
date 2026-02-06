const container = document.querySelector(".mapa-container");

pontosTuristicos.forEach(ponto => {

  /* ============================
     CASO 1 — PONTO COM IMAGEM
     ============================ */
  if (ponto.referencia) {
    const link = document.createElement("a");
    link.classList.add("ponto-imagem");

    link.style.top = ponto.top;
    link.style.left = ponto.left;

    // 👉 ESSENCIAL para mobile (focus)
    link.tabIndex = 0;

    // comportamento de clique
    if (ponto.status === "andamento") {
      link.href = "#";
      link.addEventListener("click", (e) => {
        e.preventDefault();
        alert(`📍 ${ponto.nome}\n\n🚧 Conteúdo em andamento`);
      });
    } else {
      link.href = ponto.pagina;
    }

    // imagem do ponto
    const img = document.createElement("img");
    img.src = ponto.referencia;
    img.alt = ponto.nome;

    // tooltip (balão)
    const tooltip = document.createElement("span");
    tooltip.classList.add("tooltip");
    tooltip.textContent =
      ponto.status === "andamento"
        ? `${ponto.nome} • Em andamento`
        : ponto.nome;

    link.appendChild(img);
    link.appendChild(tooltip);
    container.appendChild(link);

    return; // encerra aqui corretamente
  }

  /* ============================
     CASO 2 — PONTO NORMAL (EMOJI)
     ============================ */
  const el = document.createElement("a");
  el.classList.add("ponto");

  el.style.top = ponto.top;
  el.style.left = ponto.left;

  // 👉 ESSENCIAL para mobile (focus)
  el.tabIndex = 0;

  // comportamento de clique
  if (ponto.status === "andamento") {
    el.href = "#";
    el.addEventListener("click", (e) => {
      e.preventDefault();
      alert(`📍 ${ponto.nome}\n\n🚧 Conteúdo em andamento`);
    });
  } else {
    el.href = ponto.pagina;
  }

  // ícone (emoji)
  const icon = document.createElement("span");
  icon.classList.add("ponto-icon");
  icon.textContent = ponto.icon;

  // tooltip (balão)
  const tooltip = document.createElement("span");
  tooltip.classList.add("tooltip");
  tooltip.textContent =
    ponto.status === "andamento"
      ? `${ponto.nome} • Em andamento`
      : ponto.nome;

  el.appendChild(icon);
  el.appendChild(tooltip);
  container.appendChild(el);
});


// ===============================
// MOBILE — TOQUE INTELIGENTE
// ===============================

let pontoAtivo = null;

function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

document.querySelectorAll(".ponto, .ponto-imagem").forEach(ponto => {

  ponto.addEventListener("click", (e) => {

    if (!isMobile()) return; // desktop segue normal

    // se não estiver ativo → só mostra tooltip
    if (!ponto.classList.contains("ativo")) {
      e.preventDefault();

      // fecha o anterior
      if (pontoAtivo && pontoAtivo !== ponto) {
        pontoAtivo.classList.remove("ativo");
      }

      ponto.classList.add("ativo");
      pontoAtivo = ponto;

      return;
    }

    // se já está ativo → permite navegar
    ponto.classList.remove("ativo");
    pontoAtivo = null;
    // NÃO usa preventDefault → link abre
  });
});

// fecha tooltip ao tocar fora
document.addEventListener("click", (e) => {
  if (!isMobile()) return;

  if (!e.target.closest(".ponto, .ponto-imagem")) {
    if (pontoAtivo) {
      pontoAtivo.classList.remove("ativo");
      pontoAtivo = null;
    }
  }
});
