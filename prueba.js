document.getElementById("escondeMuestra").addEventListener("click", function () {
    let parrafo = document.querySelector("#text");
    if (parrafo.innerHTML == "") {
        parrafo.innerHTML = "Este texto es visible";
    } else {parrafo.innerHTML = ""}
  });


  
/*document.getElementById("escondeMuestra").addEventListener("click", fucntion(){
  let parrafo2 = document.querySelector("#text2");
  parrafo.classList.toggle("hide");
  });*


const imagen = document.querySelector("img");
const titulo = document.getElementById("titulo");
imagen.addEventListener("mouseover",function(){
    titulo.style.display = "block";
  });
imagen.addEventListener("mouseout",function(){
    titulo.style.display = "none";
  });

  //tambien se puede usar toggle//
const lista = document.querySelector("ul");
for (let i = 0; i < 2; i++) {
    lista.appendChild(document.createElement('li'));
}

var valoresLista = ["Paseo", "Running"];
const lista1 = document.querySelectorAll("li");
for (let i = 0; i < lista1.length; i++) {
    let node = document.createTextNode(valoresLista[i]);
    lista1[i].appendChild(node);
};