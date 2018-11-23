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







  