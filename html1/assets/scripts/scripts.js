// String nome = "Turma 47"
// nome = "Yuri"
// nome = 49

/*
    var nome = "Turma 47"
    let idade = 27
    const pais = "Brasil"
*/

function clicar(){
    alert("Você clicou no botão")
}

let nome = window.document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.getElementById('assunto')

function enviar(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Todos os campos devem ser preenchidos!")
        return false
    }else{
        alert("Olá " + nome.value + "! Seu feedback foi enviado com sucesso!")
        return true
    }
}