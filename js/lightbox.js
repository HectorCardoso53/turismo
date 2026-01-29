document.addEventListener("click", (e) => {
  const img = e.target.closest(".carrossel-track img");
  if (!img) return;

  const overlay = document.createElement("div");
  overlay.className = "lightbox";

  const imagem = document.createElement("img");
  imagem.src = img.src;

  const fechar = document.createElement("button");
  fechar.className = "lightbox-close";
  fechar.innerHTML = "×";

  overlay.appendChild(imagem);
  overlay.appendChild(fechar);
  document.body.appendChild(overlay);

  const fecharTudo = () => overlay.remove();

  overlay.addEventListener("click", (ev) => {
    if (ev.target === overlay) fecharTudo();
  });
  fechar.addEventListener("click", fecharTudo);
});
