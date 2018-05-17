// Crear primeras variables para las preguntas.
var firstQuestion = confirm('Bienvenido a Trivia Simpson. ¿Estás dispuesto a aceptar el reto?');
// Creamos la variable "counter" para evaluar las respuestas correctas.
var counterCo = 0;
var counterIn = 0;
var result = document.getElementById('percent');


// A partir de aquí,usamos los condicionales: if, else if y else para condicionar.
if (firstQuestion == true){

  var secondQuestion = prompt('¿MacGyver es el héroe de televisión de Paty y Selma? \n 1) Cierto \n 2) Falso');

  if (secondQuestion == 1){

    alert('correcto');
    counterCo = counterCo + 1;

  }

else {

  alert('incorrecto');
  counterIn = counterIn +1;

}

var thirdQuestion = prompt('En \"Trilogía del error\", ¿por qué tiene Homero problemas para pedir aventón? \n 1) Estaba ensangrentado \n 2) Estaba dentro de un mercado \n 3) Le faltaba un pulgar');

 if (thirdQuestion == 3){

   alert('correcto');
   counterCo = counterCo + 1;
}

else {

  alert('incorrecto');
  counterIn = counterIn +1;

}

var fourthQuestion = prompt('¿Quién atropelló a Bart? \n 1) Dr. Hibbert \n 2) Sr. Burns \n 3) Alcalde Diamante');

 if (fourthQuestion == 2){

   alert('correcto');
   counterCo = counterCo + 1;
}

else {

  alert('incorrecto');
  counterIn = counterIn +1;

}

var fifthQuestion = prompt('¿Qué personaje de Los Simpsons cuenta con un doctorado en Ciencia Computacional? \n 1) Apu \n 2) Profesor Frink \n 3) Edna Krabappel');

 if(fifthQuestion == 1){

   alert('correcto');
  counterCo = counterCo + 1;
 }

 else {

alert('incorrecto');
counterIn = counterIn +1;

 }

var sixthQuestion = alert('¿Listo para descubrir que tan fan de Los Simpsons eres?');

if(sixthQuestion=true){

  result.innerHTML= 'Tus respuestas correctas son: ' + counterCo;
}

}
//Este es el "else" de la primera pregunta.
 else {

   alert('Tal vez no eres tan fan como pensabas');
 }
