//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value;
    if (nomeAmigo !== "") {
        amigos.push(nomeAmigo);
        let listaAmigos = document.getElementById("listaAmigos");
        document.getElementById("amigo").value = "";
        listaAmigos.innerHTML = "";
        amigos.forEach(amigo => {
            listaAmigos.innerHTML += `<li>${amigo}</li>`
        });
    } else {
        alert("Nome inválido");
    }
}
function sortearAmigo() {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];   
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = "";
    resultado.innerHTML = `O amigo sorteado foi ${amigoSorteado}`
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}
function limparCampo() {
    document.querySelector("amigo").value = "";
}