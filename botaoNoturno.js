
let botaoLight = document.querySelector('#botaoLight')
let botaoDark = document.querySelector('#botaoDark')
let fundo = document.querySelector('.fundo')


botaoLight.addEventListener('click', ()=>{
     botaoLight.setAttribute('style', 'display: none')
     botaoDark.setAttribute('style', 'display: block')
     fundo.classList.add("dark")
     localStorage.setItem("fundo", "desligado")
})

botaoDark.addEventListener('click', ()=>{
     fundo.classList.remove("dark")
     botaoDark.setAttribute('style', 'display: none')
     botaoLight.setAttribute('style', 'display: block')
     localStorage.setItem("fundo", "ligado")
})

window.onload = function(){
     const validFundo = localStorage.getItem("fundo")
     if(validFundo == "desligado"){
          botaoLight.setAttribute('style', 'display: none')
          botaoDark.setAttribute('style', 'display: block')
          fundo.classList.add("dark")
     }
     if(validFundo == "ligado"){
          fundo.classList.remove("dark")
          botaoDark.setAttribute('style', 'display: none')
          botaoLight.setAttribute('style', 'display: block')
     }
}
