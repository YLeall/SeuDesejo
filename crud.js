'use strict'
//  OLHO DO LOGIN
let btnEye = document.querySelector('.fa-eye')

// OLHO DO CADASTRO 
let btnverSenha = document.querySelector('#verSenha')
let btnverSenhaConfirm = document.querySelector('#verSenhaConfirm')

// INPUTS DO CADASTRO
let nomeUser = document.querySelector('#userName')
let validNome = false

let emailUser = document.querySelector('#userEmail')
let validEmail = false

let data = document.querySelector('#userData')
let validData = false

let senha = document.querySelector('#userSenha')
let validSenha = false

let senhaConfirm = document.querySelector('#userSenhaConfirm')
let validSenhaConfirm = false

// VALIDAÇÃO CADASTRO
nomeUser.addEventListener('keyup', ()=>{
    if(nomeUser.value.length <= 3){
        nomeUser.setAttribute('style', 'color: red')
        validNome = false
    }
    else{
        nomeUser.setAttribute('style', 'color: green')
        validNome = true
    }
})

emailUser.addEventListener('keyup', ()=>{
    if(emailUser.value.length <= 14){
        emailUser.setAttribute('style', 'color: red')
        validEmail = false
    }
    else{
        emailUser.setAttribute('style', 'color: green')
        validEmail = true
    }
})

data.addEventListener('keyup', ()=>{
    if(data.value.length <= 9){
        data.setAttribute('style', 'color: red')
        validData = false
    }
    else{
        data.setAttribute('style', 'color: green')
        validData = true
    }
})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length <= 5){
        senha.setAttribute('style', 'color: red')
        validSenha = false
    }
    else{
        senha.setAttribute('style', 'color: green')
        validSenha = true
    }
})

senhaConfirm.addEventListener('keyup', ()=>{
    if(senha.value != senhaConfirm.value){
        senhaConfirm.setAttribute('style', 'color: red')
        validSenhaConfirm = false
    }
    else{
        senhaConfirm.setAttribute('style', 'color: green')
        validSenhaConfirm = true
    }
})

// CRUD

function cadastrar(){
    // event.preventDefault()
    if(validNome && validEmail && validData && validSenha && validSenhaConfirm){
        let usuario = JSON.parse(localStorage.getItem('usuario')||'[]')
        usuario.push({
            nomeUsuario: nomeUser.value,
            emailUsuario: emailUser.value,
            dataUsuario: data.value,
            senhaUsuario: senhaConfirm.value,
        })
        
        localStorage.setItem('usuario', JSON.stringify(usuario))

        alert('CADASTRADO COM SUCESSO!')
        }
    else{
        alert('PREENCHA OS CAMPOS VAZIOS!')
        }
    
}

function logar(){
    event.preventDefault()
    let loginEmail = document.querySelector('#emailLogin')
    let loginSenha = document.querySelector('#senhaLogin')

    let usuario = []

    let userValid = {
        userNome: '',
        userEmail: '',
        userData: '',
        usersenha:'',
    }
    usuario = JSON.parse(localStorage.getItem('usuario'))
    usuario.forEach((item) => {
        if(loginEmail.value == item.emailUsuario && loginSenha.value == item.senhaUsuario){
            userValid={
                userNome: item.nomeUsuario,
                userEmail: item.emailUsuario,
                userData: item.dataUsuario,
                usersenha: item.senhaUsuario,
            }
        }
    });
    // DADOS DO USUARIO
    
    if(loginEmail.value == userValid.userEmail && loginSenha.value == userValid.usersenha){
        alert("LOGADO COM SUCESSO")

        let botaoLogado = document.querySelector('.logado')
        let botaoLogin = document.querySelector('.login')
        let botaoMobileLogin = document.querySelector('.log-moda')
        // let botaoEditLogado = document.querySelector('saveEditLogado')

        botaoLogin.classList.add("login--remover");
        botaoLogado.setAttribute('style', 'display: revert');
        
        botaoMobileLogin.setAttribute('style', 'display: none');

        let manterLogado = document.getElementById('flexSwitchCheckDefault').checked;

        console.log(loginEmail.value)
        
        console.log(JSON.stringify(loginEmail.value))

        document.getElementById('userLogado').value = userValid.userNome
        document.getElementById('userDataLogado').value = userValid.userData

        if(!manterLogado){
            sessionStorage.setItem('Logado', JSON.stringify(userValid));
        }
    
        // else{
        //     localStorage.setItem('manterLogado', 'yes');
        //     localStorage.setItem('Logado', JSON.stringify(loginEmail.value));
        //     localStorage.setItem('Dados', JSON.stringify(userValid));
    }
        
    else{
        loginEmail.setAttribute('style', 'color: red')
        loginSenha.setAttribute('style', 'color: red')
        loginEmail.focus()
    }
}


function saveEdit(){
    event.preventDefault()

    let botaoEditLogado = document.querySelector('saveEditLogado')
    let userLogado = document.querySelector('userLogado')
    let dataLogado = document.querySelector('userDataLogado')
    let senhaEditConfirm = document.querySelector('#senhaEditConfirm').value
    console.log(senhaEditConfirm)

    let pegarDados = JSON.parse(localStorage.getItem('usuario')) ?? []

    let pegarTem = JSON.parse(sessionStorage.getItem('Logado')) ?? []

    const editUser ={
        nomeUsuario: pegarTem.userNome,
        emailUsuario: pegarTem.userEmail,
        dataUsuario: pegarTem.userData,
        senhaUsuario: senhaEditConfirm
    }

    pegarDados[0] = editUser

    localStorage.setItem("usuario", JSON.stringify(pegarDados))

    alert('ALTERADO COM SUCESSO!')

}

const deletar = ()=>{
    const confirmar = confirm('DESEJA REALMENTE EXCLUIR A SUA CONTA?')
    if(confirmar){
        let deletarDados = JSON.parse(localStorage.getItem('usuario')) ?? []
        deletarDados.splice(0,1)
        localStorage.setItem("usuario", JSON.stringify(deletarDados))
    }
    setTimeout(()=>{
        location.reload()
    },1000)
   
}

// EVENTO DO BOTÃO EYE DE SENHA DO LOGIN

btnEye.addEventListener('click', ()=>{
    let inputSenhaLogin = document.querySelector('#senhaLogin')

    if(inputSenhaLogin.getAttribute('type') == 'password'){
        inputSenhaLogin.setAttribute('type', 'text')
    }
    else{
        inputSenhaLogin.setAttribute('type', 'password')
    }
})

// EVENTO DO BOTÃO EYE NO INPUT DE SENHA CADASTRO



btnverSenha.addEventListener('click', ()=>{
    let inputSenhaCadastro = document.querySelector('#userSenha')

    if(inputSenhaCadastro.getAttribute('type') == 'password'){
        inputSenhaCadastro.setAttribute('type', 'text')
    }
    else{
        inputSenhaCadastro.setAttribute('type', 'password')
    }
})

// EVENTO DO BOTÃO EYE NO INPUT DE CONFIRMAR SENHA


btnverSenhaConfirm.addEventListener('click', ()=>{
    let inputSenhaConfirm = document.querySelector('#userSenhaConfirm')

    if(inputSenhaConfirm.getAttribute('type') == 'password'){
        inputSenhaConfirm.setAttribute('type', 'text')
    }
    else{
        inputSenhaConfirm.setAttribute('type', 'password')
    }
})




