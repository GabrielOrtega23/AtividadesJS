function senhaForte(s) {
    return s.length > 8 && s !== "12345678";
}

function verificar() {
    let s = document.getElementById("senha").value;
    document.getElementById("resultado").innerText =
        senhaForte(s) ? "Senha Forte" : "Senha Fraca";
}
