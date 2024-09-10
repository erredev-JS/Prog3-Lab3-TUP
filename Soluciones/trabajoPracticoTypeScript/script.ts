// Actually working

console.log("Ejercicio 2: Corriendo desde TS");

// 3.

const section3 = document.getElementById("ejercicio3");

let text = "Hola, TS!";

let n = 123;

let booleanValue = true;

let date: Date = new Date();
if (section3) section3.innerHTML = `<h1>Tipos de Datos</h1><br>Texto: ${text}<br>Número: ${n}<br>Booleano: ${booleanValue}<br>Fecha: ${date.toLocaleDateString()}`;

// 4.

const section4 = document.getElementById("ejercicio4");

function numberToString(n: number): string {
  return n.toString();
}

if (section4) section4.textContent = `Numero convertido a cadena: ${numberToString(456)}`;

// 5.

const section5 = document.getElementById("ejercicio5");

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function totalOfArray(array: number[]): number {
  return array.reduce((sum, n) => sum + n, 0);
}
if (section5) section5.textContent = `Suma del array: ${totalOfArray(numberArray)}`;

// 6.

const section6 = document.getElementById("ejercicio6");

const Student: { name: string; age: number; course: string } = {
  name: "Julio",
  age: 20,
  course: "Matemáticas",
};

if (section6) section6.innerHTML = `Estudiante: ${Student.name}<br>Edad: ${Student.age}<br>Curso: ${Student.course}`;

// 7.

const section7 = document.getElementById("ejercicio7");

type Direction = {
  street: string;
  city: string;
  postalCode: string | number;
  showDirection: () => string;
};

const myDirection: Direction = {
  street: "Av. Colon",
  city: "Arizu",
  postalCode: 5500,
  showDirection: function () {
    return `Dirección: \nCalle: ${this.street} \nCiudad: ${this.city} \nCP: ${this.postalCode}`;
  },
};

if (section7) section7.textContent = myDirection.showDirection();

// 8.

const section8 = document.getElementById("ejercicio8");

interface User {
  name: string;
  email: string;
  sayHello: () => string;
}

const UsuarioCorreo: User = {
  name: "Pepito",
  email: "correoargentino@gmail.com",
  sayHello() {
    return `Hola, mi nombre es ${this.name}`;
  },
};

if (section8) section8.textContent = UsuarioCorreo.sayHello();

// 9.

const section9 = document.getElementById("ejercicio9");

class Persona {
  name: string;
  age: number;
  sayHello: () => string;
  constructor(name: string = "", age: number = 0) {
    this.name = name;
    this.age = age;
    this.sayHello = () => {
      return `Hola, mi nombre es ${this.name} y tengo ${this.age} años.`;
    };
  }
}

const person = new Persona("Pepito", 5);

if (section9) section9.textContent = person.sayHello();

// 10.

const section10 = document.getElementById("ejercicio10");

class Box<T> {
  content: T;
  showContent: () => T;
  constructor(content: T) {
    this.content = content;
    this.showContent = () => {
      return this.content;
    };
  }
}

const stringBox = new Box<string>("Secret message");
const numberBox = new Box<number>(20);

if (section10) section10.innerHTML = `Contenido de caja de texto: ${stringBox.showContent()}<br>Contenido de caja de numero: ${numberBox.showContent()}`;

// 11.

const section11 = document.getElementById("ejercicio11");

function identity<T>(value: T): T {
  return value;
}

if (section11) section11.innerHTML = `Identidad del número: ${identity<number>(451)}<br>Identidad del texto: ${identity<string>("texto")}`;

// 12.

const section12 = document.getElementById("ejercicio12");

enum Color {
  Azul = "Azul",
  Rojo = "Rojo",
  Verde = "Verde",
}

const favoriteColor = Color.Rojo;

if (section12) section12.textContent = `Color favorito: ${favoriteColor}`;
