function buyTicket() {
  let ticketQuantity = parseInt(document.getElementById("qtd").value);
  let ticketType = document.getElementById("tipo-ingresso");

  if (ticketType.value == "pista") {
    comprarPista(ticketQuantity);
  }
}

function comprarPista(ticketQuantity) {
  let pistaQuantity = parseInt(
    document.getElementById("qtd-pista").textContent
  );

  if (ticketQuantity > pistaQuantity) {
    alert("Quantidade para tipo pista indisponível no momento!");
  } else {
    pistaQuantity -= ticketQuantity;
    document.getElementById("qtd-pista").textContent = pistaQuantity;
    alert("Compra realizada com sucesso!");
  }
}
