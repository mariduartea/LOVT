// console.log('JS externo funcionoy');
// console.log(window);

// alert('seja bem vinde'); //mensagem usuario

// let adulto = confirm('você tem mais de 18 anos?'); // retorna booleano 

//let nomeUsuario = prompt('qual seu nome?'); //retorna texto inserido pelo usuario

// console.log(nomeUsuario);

// let elementHeader = document.querySelector('.olaUsuario'); //seleciona o elemento html

// elementHeader.innerText = `Olá, ${nomeUsuario}`; //atribui conteudo ao elemento selecionado

// let logo = document.getElementById('logo');
// console.log(logo);

logo.style.color = "orange";

const toggleMode = () => {
    document.body.classList.toggle("dark-mode");
}

setTimeout(() => {
    document.querySelector('.modal').style.display = "flex";
}, 1000)

const btnClose = () => {
    document.querySelector('.modal').style.display = "none";
}

// document.querySelector("#btn-submit-contact").addEventListener("click", (evento) => {
//     evento.preventDefault(); //cancenlando o envio temporariamente
    
//     let nomeValue = document.querySelector("#input_nome").value;
//     let emailValue = document.querySelector("#input_email").value;
    
//     console.log(nomeValue);
//     console.log(emailValue);

//     //validação dos campos
//     //exibição de mensagens de erros
//     //envio do formulário
// });

    let formContact = document.querySelector("#form_contact");

formContact.addEventListener("submit", (evento) => {
    // interrompo o envio do formulário
    evento.preventDefault();

    // validar se todos os campos estão preenchidos
    // validar se nome tem 2 ou mais caracteres
    // validar se o campo email tem @ (google - regex)
    // validar se telefone tem no mínimo 8 caracteres

    let nomeValue = document.querySelector("#input_nome").value;
    let emailValue = document.querySelector("#input_email").value;
    let telefoneValue = document.querySelector("#input_telefone").value;
    let mensagemValue = document.querySelector("#input_mensagem").value;
    let divMensagemErro = document.querySelector(".mensagem-erro");

    if (nomeValue.length == "" || emailValue.length == "" || telefoneValue.length == "" || mensagemValue.length == "")  {
        divMensagemErro.innerHTML += "Preencha todos os campos. <br>"
    } else if (telefoneValue.length < 8 ) {
        divMensagemErro.innerHTML += "Telefone deve ter pelo menos 8 digitos. <br>";
    } else if (emailValue.indexOf("@") == -1) {
        divMensagemErro.innerHTML += "Insira um email valido"
    } else {
        // formContact.submit();
    }
})



