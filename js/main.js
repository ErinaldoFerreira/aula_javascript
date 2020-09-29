

function clicou (){
    
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"
    //alert("Obrigado por clicar")
}


function redirecionar (){
    window.open("https://www.globo.com/")
    //window.location.href ="https://www.globo.com/"
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto")
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada")
}


/*
function soma(n1 , n2){
    return n1 + n2;
}

console.log(soma(5,10))


/*
var d = new Date();
console.log(d.getMonth() + 1)
console.log(d.getDay())
console.log(d.getHours())
console.log(d.getMinutes())


var count;
for (count = 0; count <= 5; count++){
    console.log(count)
}


var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1;
};



var idade = 18;
if(idade >= 18){
    console.log("maior de idade")
}else{
    console.log("menor de idade")
}



var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
console.log(frutas[1].nome);


var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
console.log(fruta.cor);




var lista = ["maça", "pera", "laranja"];
//lista.push("uva")
//lista.pop();
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));


/* 
var nome = "Erinaldo Ferreira";
var idade = 39;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"

//alert("Bem vindo " + nome + " tem " + idade + " anos")
alert(idade + idade2)
console.log(idade + idade2)
console.log(frase.replace("Japão", "Brasil"))
*/