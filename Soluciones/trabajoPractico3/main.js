// Ejercicio 2:
// Crea un script que declare tres variables: a, b, y c. Asigna a a y b valores numéricos y haz que c sea la suma de a y b. Imprime el resultado en la consola.

let a, b, c;
(a = 5), (b = 10);

c = a + b;

console.log("La suma de a y b es:", c);

// Ejercicio 3:
//
// Escribir un programa que pida al usuarío su nombre y lo almacene en una variable con prompt().
//
// Luego imprimirun saludo en la consola que incluya el nombre

let nombre = prompt("Cuál es tu nombre?");

console.log(`Hola, ${nombre}!`);

// Operadores Logicos

// Ejercicio 1: Declarar 3 variables a b c, asignarles valor a (a y b )y mostrar por consola cual es el mayor.

(a = 10), (b = 100), (c = 0);

let higherValue = Math.max(a, b, c);
console.log("El mayor de los tres numeros es:", higherValue);

// Ejercicio 2: Crea un programa que pida al usario un numero usando prompt() y que determine si es par o impar.

let number = prompt("Ingresa un numero y te dire si es par o impar");

let msg =
  number % 2 == 0
    ? `El numero ${number}, es par`
    : `El numero ${number}, es impar`;

console.log(msg);

// 3 Operadores de asignación y bucles

// Ejercicio 1: Crea un script que inicialize una variable en 10, luego usa un while para restarle 1 en cada iteración y muestra cada iteración por consola

let total = 10;
while (total > 0) {
  console.log(total);
  total--;
}

// Ejercicio 2: Utiliza un bucle do...while para pedir al usuario un numero > 100, debe repetirse hasta que el usuario lo ingrese.

let number2;
do {
  number2 = prompt("Ingresa un numero mayor a 100");
} while (number2 <= 100 && number2 != null);
console.log("Correcto ingresaste:", number2);

// 4 Funciones en JS

// Ejercicio 1: Escribir una funcíon llamada esPar que devuelva true o false y reciba un numero como argumento.

let isEven = (n) => {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

console.log("El numero 8 es par:", isEven(8));
console.log("El numero 7 es par:", isEven(7));

// Ejercicio 2: Crear una función llamada convertirCelsiusAFarenheit que reciba grados Celsius y los convierta a Farenhait, con la fórmula es F = C x 1.8 + 32.

let celsiusToFarenheit = (celsius) => {
  return celsius * 1.8 + 32 + "ºF";
};

console.log("30ºC son equivalentes a", celsiusToFarenheit(30));

// Objetos en JS

// Ejercicio 1: Definir un objetivo persona con las propiedades nombre, edad y ciudad. Un metodo que permita cambiar la ciudad de la persona,y luego muestra las propiedades actualizadas en la consola.

let person = {
  name: "Ana",
  age: 30,
  city: "New York",
  changeCity: function (newCity) {
    this.city = newCity;
  },
};

person.changeCity("A");
console.log(person.name, person.age, person.city);

// Ejercicio 2: Crear un libro objeto con propiedades: titulo, autor, año y un metodo que determine si el libro tiene mas de 10 años devuelva true o false.

let book = {
  title: "El Quijote",
  autor: "Miguel de Cervantes Saavedra",
  yearSinceRelease: 419,
  isAncient: function () {
    if (this.yearSinceRelease > 10) {
      return true;
    } else {
      return false;
    }
  },
};

console.log(`El libro ${book.title} es antiguo: ${book.isAncient()}`);

// Arrays
// Ejercicio 1: Declarar un array llamado numeros con numeros del 1 al 10, escribe un bucle que multiplique cada numeropor dos y los almacene en un nuevo array, luego mostrar ambos arrays por consola.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let multipliedNumbers = [];
numbers.forEach((element) => {
  multipliedNumbers.push(element * 2);
});

console.log(`Números originales: ${numbers}`);
console.log(`Números multiplicados por 2: ${multipliedNumbers}`);

// Ejercicio 2: Crear array vacio llamado pares, y llenarlo con los primeros 10 pares del 1 al 20

let evenNumbers = [];

for (let i = 1; i < 21; i++) {
  if (i % 2 == 0) evenNumbers.push(i);
}
console.log("Primeros 10 números pares:");
console.log(evenNumbers);

// Introducción al DOM

// Ejercicio 1: Mostrar 3 elementos <p> en el html, hacer un boton que maneje el evento 'click' y cambie a todos los elementos a color azul

const changeColorBtn = document.getElementById("changeColorBtn");

const paragraphs = document.querySelectorAll(".paragraph");

function handleClick() {
  paragraphs.forEach((element) => {
    element.style.color = "blue";
  });
}

changeColorBtn.addEventListener("click", handleClick);

const alertBtn = document.getElementById("alertBtn");

alertBtn.addEventListener("click", function () {
  let alertText = document.getElementById("alertText").value;
  alert("Has ingresado:", alertText);
});

// 8 Eventos en DOM
// Ejercicio 1: Crear un <ul> con varios <li> al hacer un click en un li, mostrar su value por consola

const listElements = document.querySelectorAll(".listElement");

listElements.forEach((element) => {
  element.addEventListener("click", function () {
    console.log(element.textContent);
  });
});

// Ejercicio 2
const turnText = document.getElementById("turnText");
const disableBtn = document.getElementById("disableBtn");
const enableBtn = document.getElementById("enableBtn");

disableBtn.addEventListener("click", function () {
  turnText.removeAttribute("placeholder");
  turnText.disabled = true;
});
enableBtn.addEventListener("click", function () {
  turnText.placeholder = "Ingresa algo";
  turnText.disabled = false;
});

// 10 localStorage
const emailInput = document.getElementById("emailInput");
const saveBtn = document.getElementById("saveBtn");
const savedEmail = document.getElementById("savedEmail");
const deleteSavedBtn = document.getElementById("deleteSavedBtn");

localStorage.getItem("email") != null
  ? (savedEmail.textContent = `Correo guardado: ${localStorage.getItem(
      "email"
    )}`)
  : (savedEmail.textContent = "No hay ningun correo guardado");
saveBtn.addEventListener("click", () => {
  localStorage.setItem("email", emailInput.value);
  savedEmail.textContent = `Correo guardado: ${localStorage.getItem("email")}`;
});
deleteSavedBtn.addEventListener("click", () => {
  localStorage.removeItem("email");
  savedEmail.textContent = "No hay correos guardados";
});
