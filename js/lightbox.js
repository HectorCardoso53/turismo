let imagens = [];
let indexAtual = 0;
let overlay;
let imagemLightbox;

document.addEventListener("DOMContentLoaded", () => {

  imagens = Array.from(
    document.querySelectorAll(".imagem-ponto, .carrossel-track img")
  );

  imagens.forEach((img, index) => {
    img.addEventListener("click", () => {
      abrirLightbox(index);
    });
  });

});

function abrirLightbox(index) {

  indexAtual = index;

  overlay = document.createElement("div");
  overlay.className = "lightbox-full";

  imagemLightbox = document.createElement("img");

  const fechar = document.createElement("button");
  fechar.className = "lightbox-close";
  fechar.innerHTML = "×";

  overlay.appendChild(imagemLightbox);
  overlay.appendChild(fechar);

  const imagemClicada = imagens[index];

  // 🔥 se NÃO for imagem principal
  if (!imagemClicada.classList.contains("imagem-ponto")) {

    const anterior = document.createElement("button");
    anterior.className = "lightbox-prev";
    anterior.innerHTML = "‹";

    const proximo = document.createElement("button");
    proximo.className = "lightbox-next";
    proximo.innerHTML = "›";

    overlay.appendChild(anterior);
    overlay.appendChild(proximo);

    anterior.addEventListener("click", () => mudarImagem(-1));
    proximo.addEventListener("click", () => mudarImagem(1));
  }

  document.body.appendChild(overlay);

  atualizarImagem();

  fechar.addEventListener("click", fecharLightbox);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) fecharLightbox();
  });
}
function mudarImagem(direcao) {
  indexAtual += direcao;

  if (indexAtual < 0) indexAtual = imagens.length - 1;
  if (indexAtual >= imagens.length) indexAtual = 0;

  atualizarImagem();
}

function atualizarImagem() {
  imagemLightbox.src = imagens[indexAtual].src;
}

function fecharLightbox() {
  overlay.remove();
}

// deixa disponível para onclick=""
window.abrirGaleria = function(index) {
  abrirLightbox(index);
};