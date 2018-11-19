function saudacao() {
	data = new Date();
	hora = data.getHours();
	if(hora >= 6 && hora < 12){
	   document.write("bom dia.");
	}
	else if(hora >= 12 && hora < 18){
	   document.write("boa tarde.");
	}
	else {
	   document.write("boa noite.");
	}
}

/*var inicio = 0;
var imagens = ["img/programa.png", "img/sala.png", "img/curioso.png", "img/aventureiro.png"];
var mudar = 1; 

function rodarImagens() {
   document.getElementById["conteudo"].src = imagens[inicio++];

   if (inicio >= imagens.length){
      inicio = 0;
   }

   setTimeout("rodarImagens()", mudar * 1000);  
}

var imagens= new Array('programa.png','sala.png', 'curioso.png', 'aventureiro.png');
var num_img= 4;
var img_atual= -1;

function ChangeImg()
{
    if (img_atual < (num_img - 1) ) 
   {
        img_atual = img_atual + 1;
   }
   else
   {
        img_atual = 0;
   }
    document["img_apoio"].src= "img/" + imagens[img_atual];
   var x = setTimeout ("ChangeImg()", 7000);
}*/



/*var texto = "Desenvolvedor!";
var result;
var op = 1;
var count = 0;



function digitar() {
 result = document.getElementById("funcoes");
  window.setTimeout(function() { inserir(texto[count]) }, 400);
}

function inserir(letra) {
  result.innerHTML += letra;
  count++;
  if(count < texto.length){
  window.setTimeout(function() { inserir(texto[count]) }, 400);}
    if (count==texto.length) {
      limpar();
    }
  }


function limpar(done) {
    var char = result.innerHTML;
    var nr = char.length;
    var typer = setInterval(function() {
        if (nr-- == 0) {
            clearInterval(typer);
            return done();
        }
        result.innerHTML = char.slice(0, nr);
    }, 400);
}


window.onload = digitar;*/




  