
let trilho = document.getElementById('trilho')
let body = document.querySelector('body')

trilho.addEventListener('click', ()=> {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})

/* Criando Tela Carregando By: Atualizar Pagina */
let elem_preloader = document.getElementById("preloader");
let elem_loader = document.getElementById("loader");
console.log("Testing... Ok");


setTimeout(function() {
  elem_preloader.classList.remove("preloader");
  elem_loader.classList.remove("loader");
  }, 1280);