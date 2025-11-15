function classificar(v) {
    if (v == 0.01) return "Um Centavo";
    if (v == 0.05) return "Cinco Centavos";
    if (v == 0.10) return "Dez Centavos";
    if (v == 0.25) return "Vinte e Cinco Centavos";
    if (v == 0.50) return "Cinquenta Centavos";
    if (v == 1.00) return "Um Real";
    return "Valor Desconhecido";
}

function verificar() {
    let v = Number(document.getElementById("valor").value);
    document.getElementById("resultado").innerText = classificar(v);
}
