const taxistas = [
  {
    nome: "Chrisley Machado",
    telefone: "93992272775",
    credencial: "TX-001"
  },
  {
    nome: "Hector Araújo ",
    telefone: "93991671354",
    credencial: "TX-002"
  },
  
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("lista-taxistas");

  taxistas.forEach(taxi => {
    const card = document.createElement("div");
    card.className = "card-taxista";

    card.innerHTML = `
      <h3>${taxi.nome}</h3>
      <p><strong>Credencial:</strong> ${taxi.credencial}</p>
      <div class="acoes-taxista">
        <a href="tel:${taxi.telefone}" class="btn-ligar">📞 Ligar</a>
        <a href="https://wa.me/55${taxi.telefone}" target="_blank" class="btn-whatsapp">💬 WhatsApp</a>
      </div>
    `;

    container.appendChild(card);
  });
});