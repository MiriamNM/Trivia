
// prompt del nombre
var name = prompt("¿Cuál es tu nombre?");
document.write("Bienvenid@ " + name)



const respuesta = (option) => {
  switch(option) {
    case 'encantamientos':
      //alert('Elegiste Trivia de encantamientos')
      break;
    case 'magxs':
      //alert('Elegiste Trivia de Magxs')
      break;
  }
}

function handleClick()
          {         
        var puntuacion = 0;          
        for(var i = 1; i <= 45; i++) {
          var radios = document.getElementsByName('magos'+i);
          for(var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if(radio.value == "correcto" && radio.checked) {
              puntuacion++;
            }
          }
         }                   
            alert(name +" Tu puntuación final es: " + puntuacion+ "/4 pts");
          }
//Si el alert lo podemos ligar como document.write en la pagina de resultados correcta. 

function handleClick2()
          {         
        var puntos = 0;          
        for(var i = 1; i <= 45; i++) {
          var radios = document.getElementsByName('encantamientos'+i);
          for(var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            if(radio.value == "correcto" && radio.checked) {
              puntos++;
            }
          }
         }                   
            alert("Correct Responses: " + puntos);
          }
// /*
 //if (variable == 'valor1') {
//  accion1();
//} else if (variable == 'valor2') {
//  accion2();
//} else if (variable == 'valor3') {
//  accion3();
//} else {
//  accionDefault();
//}*/
//}//

//const questions=[
 //{'question':'Su segundo nombre es Jean. Es hija de muggles (ambos dentistas).  A los once años descubrió su don mágico y fue aceptada en el Colegio Hogwarts de Magia y Hechicería. Posee una mente académica brillante, y demostró ser una estudiante superdotada. Sus mejores amigos son Harry Potter y Ron Weasley.',
 //'answer':['Bellatrix Lestrange',  'Hemione Greanger', 'Lili Potter']
 //}.
//]

//const questions=[
// {'question':'Tiene cuatro nombres, tres de ellos son: Percival Wulfric Brian. Se desempeñó como Jefe Supremo de la Confederación Internacional de Magos y como Jefe de Magos del Wizengamot. Era un mago de sangre mestiza, considerado como el mago más poderoso de su época, famoso por derrotar a Gellert Grindelwald, por descubrir doce usos de la sangre de dragón y por su trabajo en alquimia con Nicolas Flamel.',
//  'answer':['Severus Snape', 'Tom Ryddle', 'Albus Dombledore']
 //}.
//]

// const questions=[
// {'question':'Fue estudiante de Hogwarts y pertenece a la casa fe Gryffindor. En Hogwarts ha mostrado gran liderazgo desempeñando un personaje muy importante. Es unx animaga, tomando la forma de un gato gris.',
// 'answer':['Hagrid', 'Minerva McGonagall', 'Voldemort']
 //}.
 //]

// const questions=[
 //{'question':'Fue estudiante de Hogwarts y pertenece a la casa fe Gryffindor. Su destino está atado con el mago tenebroso.',
// 'answer': ['Draco Malfoy', 'Dobby', 'Harry Potter']
// }.
// ]
//

 /*
 const questions=[
 //{'question':'También conocido como el maleficio asesino. es una maldición y uno de los hechizos de magia negra más poderosos y siniestros del mundo mágico. Cuando es lanzada correctamente sobre una persona o criatura viva, la maldición asesina causa una muerte instantánea e indolora, sin dejar signos de violencia en el cuerpo. Debido a que su efecto es irreversible, es clasificada como una de las tres Maldiciones Imperdonables.',
 //'answer':[' Avada Kadavra',  'Imperius', 'Cruciatus']
 },
 ]

 const questions=[
 //{'question':'Este antiguo y misterioso encantamiento conjura un guardián mágico, una proyección de todos tus sentimientos alegres.”Es la protección principal contra dementores y lethifolds, ante los cuales no existe otra defensa.',
 //'answer':[' Wingardium Leviosa',  'Expecto Patronum', 'Expelliarmus']
 },
 ]

const questions=[
 //{'question':'Proviene del latín y significa "expulsar arma". Es un hechizo sencillo pero de gran utilidad, ya que desarma al oponente y hace que la varita vuele lejos de su dueño.',
 //'answer':[' Expelliarmus',  'Expecto Patronum', 'Wingardium Leviosa']
 },
 ]

const questions=[
 //{'question':'Maldición imperdonable utilizada para torturar físicamente a alguien. Puede llegar a causar mucho dolor en la víctima, hasta el punto de dejarla demente.',
 //'answer':[' Cruciatus',  'Expecto Patronum', 'Expelliarmus']
 },
 ]
  */