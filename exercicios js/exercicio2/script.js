function maior(a, b, c) {
    if (a > b && a > c) return a;
    if (b > a && b > c) return b;
    return c;
}

function verificar() {
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);

    document.getElementById("resultado").innerText = "Maior número: " + maior(n1, n2, n3);
}
