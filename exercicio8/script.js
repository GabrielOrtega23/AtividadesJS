function nomeCompleto(p, s) {
    return p + " " + s;
}

function verificar() {
    let p = document.getElementById("p").value;
    let s = document.getElementById("s").value;

    document.getElementById("resultado").innerText = nomeCompleto(p, s);
}
