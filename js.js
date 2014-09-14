var piedra = 3;
var papel = 4;
var tijera = 5;
var lagarto = 6;
var spock = 7;
var eleccionJugador;
var eleccionMaquina;


function inicio(){
	crearListeners();

}
function crearListeners(){
	for(var x=1;x<=7;x++){
		var circulo=document.getElementById('circulo'+x);
		circulo.addEventListener("mouseover",mostrarTexto,false);
	}
	for(var x=3;x<=7;x++){
		var circulo = document.getElementById('circulo'+x);
		circulo.addEventListener("click",eleccion,false);
	}
}
function mostrarTexto(e){
	var circulo = e.target;
	var id = circulo.id;
	var asd = document.getElementById("espera");
	asd.style.backgroundImage="url('imagenes/"+id+".gif')";


}
function eleccion(e) {
	var circulo = e.target;
	var id = circulo.id;
	var idFalsa = id.substring(7);
		for(var x=1;x<=7;x++){
		var circulo=document.getElementById('circulo'+x);
		circulo.removeEventListener("mouseover",mostrarTexto,false);
	}
	for(var x=3;x<=7;x++){
		var circulo = document.getElementById('circulo'+x);
		circulo.removeEventListener("click",eleccion,false);
	}
	eleccionJugador = idFalsa;
	if(eleccionJugador == piedra){
		document.getElementById('circulo1').style.backgroundImage="url('imagenes/piedra.gif')";
	}
	else if(eleccionJugador == papel){
		document.getElementById('circulo1').style.backgroundImage="url('imagenes/papel.gif')";
	}
	else if(eleccionJugador == tijera){
		document.getElementById('circulo1').style.backgroundImage="url('imagenes/tijera.gif')";
	}
	else if(eleccionJugador == lagarto){
		document.getElementById('circulo1').style.backgroundImage="url('imagenes/lagarto.gif')";
	}
	else if(eleccionJugador == spock){
		document.getElementById('circulo1').style.backgroundImage="url('imagenes/spock.gif')";
	}
	document.getElementById('espera').style.backgroundImage="url('imagenes/textoEspere.gif')";
	setTimeout("eleccionMaquina()",2000);

}
function eleccionMaquina(){
	eleccionMaquina = numeroAleatorio();
	if(eleccionMaquina == piedra){
		document.getElementById('circulo2').style.backgroundImage="url('imagenes/piedra.gif')";
	}
	else if(eleccionMaquina == papel){
		document.getElementById('circulo2').style.backgroundImage="url('imagenes/papel.gif')";
	}
	else if(eleccionMaquina == tijera){
		document.getElementById('circulo2').style.backgroundImage="url('imagenes/tijera.gif')";
	}
	else if(eleccionMaquina == lagarto){
		document.getElementById('circulo2').style.backgroundImage="url('imagenes/lagarto.gif')";
	}
	else if(eleccionMaquina == spock){
		document.getElementById('circulo2').style.backgroundImage="url('imagenes/spock.gif')";
	}
	comprobarResultado();
}
function numeroAleatorio(){
	var numero = Math.floor(Math.random()*(7-3+1)+3);

	return numero;
}
function comprobarResultado(){
	if(eleccionJugador == piedra){
		if(eleccionMaquina == piedra){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoEmpate.gif')";
		}
		else if(eleccionMaquina == papel){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoLose.gif')";
		}
		else if(eleccionMaquina == tijera){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoWin.gif')";
		}
		else if(eleccionMaquina == lagarto){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoWin.gif')";
		}
		else if(eleccionMaquina == spock){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoLose.gif')";
		}
	}
	if(eleccionJugador == papel){
		if(eleccionMaquina == piedra){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoWin.gif')";
		}
		else if(eleccionMaquina == papel){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoEmpate.gif')";
		}
		else if(eleccionMaquina == tijera){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoLose.gif')";
		}
		else if(eleccionMaquina == lagarto){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoLose.gif')";
		}
		else if(eleccionMaquina == spock){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoWin.gif')";
		}
	}
	if(eleccionJugador == tijera){
		if(eleccionMaquina == piedra){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoLose.gif')";
		}
		else if(eleccionMaquina == papel){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoWin.gif')";
		}
		else if(eleccionMaquina == tijera){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoEmpate.gif')";
		}
		else if(eleccionMaquina == lagarto){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoWin.gif')";
		}
		else if(eleccionMaquina == spock){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoLose.gif')";
		}
	}
	if(eleccionJugador == lagarto){
		if(eleccionMaquina == piedra){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoLose.gif')";
		}
		else if(eleccionMaquina == papel){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoWin.gif')";
		}
		else if(eleccionMaquina == tijera){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoLose.gif')";
		}
		else if(eleccionMaquina == lagarto){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoEmpate.gif')";
		}
		else if(eleccionMaquina == spock){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoWin.gif')";
		}
	}
	if(eleccionJugador == spock){
		if(eleccionMaquina == piedra){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoWin.gif')";
		}
		else if(eleccionMaquina == papel){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoLose.gif')";
		}
		else if(eleccionMaquina == tijera){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoWin.gif')";
		}
		else if(eleccionMaquina == lagarto){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoLose.gif')";
		}
		else if(eleccionMaquina == spock){
			document.getElementById("espera").style.backgroundImage="url('imagenes/textoEmpate.gif')";
		}
	}
	setTimeout("pregunta()",1300);
	
}
function pregunta(){
	var decision = prompt("¿Quieres jugar de nuevo?","si");
	decision = decision.toLowerCase();
	if(decision == "si"){
		window.location.reload();
	}
	else{
		alert("¡vuelve cuando quieras!")
		window.close();
	}
}