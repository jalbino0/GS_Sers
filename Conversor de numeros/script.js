// ===== Função principal: converte número decimal =====
function converterNumero() {
  const campo = document.getElementById("valorEntrada");
  const resultado = document.getElementById("resultado");
  const tipo = document.querySelector("input[name='tipo']:checked").value;

  const valor = campo.value.trim();

  // Validação: campo vazio ou não numérico
  if (valor === "" || isNaN(valor)) {
    resultado.classList.add("error");
    resultado.innerHTML = "⚠️ Por favor, insira um número válido.";
    return;
  }

  const numero = parseInt(valor);

  // Validação: número negativo
  if (numero < 0) {
    resultado.classList.add("error");
    resultado.innerHTML = "⚠️ Digite apenas números não negativos.";
    return;
  }

  // Remove estado de erro
  resultado.classList.remove("error");

  // Escolha de conversão
  let convertido = "";
  let tipoTexto = "";

  if (tipo === "binario") {
    convertido = numero.toString(2);
    tipoTexto = "Binário";
  } else if (tipo === "hexadecimal") {
    convertido = numero.toString(16).toUpperCase();
    tipoTexto = "Hexadecimal";
  }

  // Exibe o resultado formatado
  resultado.innerHTML = `
    <p><strong>${numero}</strong> em <span style="color:#4fa3ff">${tipoTexto}</span> é:</p>
    <p style="font-size:1.2em; margin-top:6px;">${convertido}</p>
  `;
}

// ===== Eventos =====

// Clique no botão "Converter"
document.getElementById("btnConverter").addEventListener("click", converterNumero);

// Limpar resultado ao apagar o campo
document.getElementById("valorEntrada").addEventListener("input", () => {
  const resultado = document.getElementById("resultado");
  if (document.getElementById("valorEntrada").value.trim() === "") {
    resultado.innerHTML = "Aguardando entrada...";
    resultado.classList.remove("error");
  }
});

// Permitir converter ao pressionar "Enter"
document.getElementById("valorEntrada").addEventListener("keypress", (e) => {
  if (e.key === "Enter") converterNumero();
});
