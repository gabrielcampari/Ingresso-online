function buyTicket() {
  let ticketQuantity = parseInt(document.getElementById("qtd").value);
  let ticketType = document.getElementById("tipo-ingresso");

  if (ticketType.value == "pista") {
    comprarPista(ticketQuantity);
  }
  if (ticketType.value == "inferior") {
    comprarInferior(ticketQuantity);
  }
  if (ticketType.value == "superior") {
    comprarSuperior(ticketQuantity);
  }
}

function comprarInferior(ticketQuantity) {
  let inferiorQuantity = parseInt(
    document.getElementById("qtd-inferior").textContent
  );

  if (ticketQuantity > inferiorQuantity) {
    alert("Quantidade para o tipo cadeira inferior indisponível no momento!");
  } else {
    inferiorQuantity -= ticketQuantity;
    document.getElementById("qtd-inferior").textContent = inferiorQuantity;
    alert("Compra realizada com sucesso!");
  }
}

function comprarSuperior(ticketQuantity) {
  let superiorQuantity = parseInt(
    document.getElementById("qtd-superior").textContent
  );

  if (ticketQuantity > superiorQuantity) {
    alert("Quantidade para o tipo cadeira superior indisponível no momento!");
  } else {
    superiorQuantity -= ticketQuantity;
    document.getElementById("qtd-superior").textContent = superiorQuantity;
    alert("Compra realizada com sucesso!");
  }
}

function comprarPista(ticketQuantity) {
  let pistaQuantity = parseInt(
    document.getElementById("qtd-pista").textContent
  );

  if (ticketQuantity > pistaQuantity) {
    alert("Quantidade para o tipo pista indisponível no momento!");
  } else {
    pistaQuantity -= ticketQuantity;
    document.getElementById("qtd-pista").textContent = pistaQuantity;
    alert("Compra realizada com sucesso!");
  }
}
