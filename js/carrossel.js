document.querySelectorAll(".carrossel").forEach(carrossel => {
  const track = carrossel.querySelector(".carrossel-track");
  const prev = carrossel.querySelector(".prev");
  const next = carrossel.querySelector(".next");

  const scrollAmount = 280;

  prev.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});
