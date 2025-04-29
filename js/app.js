function buyTicket() {
  let ticketQuantity = parseInt(document.getElementById("qtd").value);
  let ticketType = document.getElementById("tipo-ingresso");

  if (isNaN(ticketQuantity) || ticketQuantity <= 0) {
    alert(
      "Não foi possível realizar a compra, por favor insira um valor válido!"
    );

    return;
  }

  if (ticketType.value == "pista") {
    buyTrack(ticketQuantity);
  } else if (ticketType.value == "inferior") {
    buyLower(ticketQuantity);
  } else if (ticketType.value == "superior") {
    buyUpper(ticketQuantity);
  }
}

function buyLower(ticketQuantity) {
  let lowerQuantity = parseInt(
    document.getElementById("qtd-inferior").textContent
  );

  if (ticketQuantity > lowerQuantity) {
    alert("Quantidade para o tipo cadeira inferior indisponível no momento!");
  } else {
    lowerQuantity -= ticketQuantity;
    document.getElementById("qtd-inferior").textContent = lowerQuantity;
    alert("Compra realizada com sucesso!");
  }
}

function buyUpper(ticketQuantity) {
  let upperQuantity = parseInt(
    document.getElementById("qtd-superior").textContent
  );

  if (ticketQuantity > upperQuantity) {
    alert("Quantidade para o tipo cadeira superior indisponível no momento!");
  } else {
    upperQuantity -= ticketQuantity;
    document.getElementById("qtd-superior").textContent = upperQuantity;
    alert("Compra realizada com sucesso!");
  }
}

function buyTrack(ticketQuantity) {
  let trackQuantity = parseInt(
    document.getElementById("qtd-pista").textContent
  );

  if (ticketQuantity > trackQuantity) {
    alert("Quantidade para o tipo pista indisponível no momento!");
  } else {
    trackQuantity -= ticketQuantity;
    document.getElementById("qtd-pista").textContent = trackQuantity;
    alert("Compra realizada com sucesso!");
  }
}
