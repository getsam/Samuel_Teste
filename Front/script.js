var nome = document.getElementById(nome);
var cpf = document.getElementById(CPF);
var data = document.getElementById(data);
var senha = document.getElementById(senha);
var login = document.getElementById(login);

function enviar(){
    if(lenght(cpf) < 11){//caso o tamanho cpf menor que 11 caracteres 
        alert("cpf invalido");
    }

    if(typeof nome === Number){
        alert("Nome invalido");
    }
    

}