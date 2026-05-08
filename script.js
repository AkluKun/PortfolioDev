const texto = " Ola! Eu sou...";
const descricao = "Desenvolvedor Web FrontEnd Junior";
let indexTexto = 0;
let indexDescricao = 0;

function digitar() {
    if (indexTexto < texto.length) {
        document.getElementById("texto").innerHTML += texto.charAt(indexTexto);
        indexTexto++;
        setTimeout(digitar, 100);
    } 
    // else{
    //     indexTexto = 0;
    //     document.getElementById("texto").innerHTML = "";
    //     setTimeout(digitar, 1000);
    // }
}

function digitarDescricao() {
    if (indexDescricao < descricao.length) {
        document.getElementById("descricao").innerHTML += descricao.charAt(indexDescricao);
        indexDescricao++;
        setTimeout(digitarDescricao, 70);
    }
}

digitar();
digitarDescricao();

const botao = document.getElementById("topo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    botao.style.display = "block";
  } else {
    botao.style.display = "none";
  }
});

botao.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});