function media(n1, n2) {
    let m = (n1 + n2) / 2;
    return m >= 7 ? "Aprovado" : "Reprovado";
}

function verificar() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);

    document.getElementById("resultado").innerText = media(n1, n2);
}
