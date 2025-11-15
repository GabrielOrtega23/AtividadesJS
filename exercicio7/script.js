function tipo(l1, l2, l3) {
    if (l1 == l2 && l2 == l3) return "Equilátero";
    if (l1 == l2 || l1 == l3 || l2 == l3) return "Isósceles";
    return "Escaleno";
}

function verificar() {
    let l1 = Number(document.getElementById("l1").value);
    let l2 = Number(document.getElementById("l2").value);
    let l3 = Number(document.getElementById("l3").value);

    document.getElementById("resultado").innerText = tipo(l1, l2, l3);
}
