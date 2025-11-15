function formatar(tel) {
    return tel.substring(0, 4) + "-" + tel.substring(4);
}

function verificar() {
    let tel = document.getElementById("tel").value;
    document.getElementById("resultado").innerText = formatar(tel);
}
