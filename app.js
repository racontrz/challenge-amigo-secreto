let amigos = [];

function agregarAmigo() {
   let amigo = document.getElementById("amigo").value;
   console.log(amigo);
   if (amigo === "") {
       alert("Por favor, inserte un nombre.");
   } else {
       amigos.push(amigo);
        limpiarInput();
   }
}

function limpiarInput() {
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
    let indice = Math.floor(Math.random()*`${amigos.length}`);
    let listado= document.getElementById("listaAmigos");
    let amigo = "";
    for (let i = 0; i < amigos.length; i++) {
        amigo = amigos[i];
        listado.innerHTML = amigo;
    }


    console.log(indice);
}



