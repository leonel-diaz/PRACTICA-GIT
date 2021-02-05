const d=document;

let borrar = d.getElementById("c");
let s=d.getElementById("no");
let dividir=d.getElementById("divicion");
let multiplicacion=d.getElementById("multiplicacion");
let siete=d.getElementById("7");
let ocho=d.getElementById("8");
let nueve=d.getElementById("9");
let resta=d.getElementById("resta");
let cuatro=d.getElementById("4");
let cinco=d.getElementById("5");
let seis=d.getElementById("6");
let suma=d.getElementById("6");
let uno=d.getElementById("1");
let dos =d.getElementById("2");
let tres =d.getElementById("3");
let igual=d.getElementById("igual");
let cero=d.getElementById("cero");
let punto =d.getElementById("punto");

// let texto=d.getElementById("texto-numero");





 function mostrar() {
    d.getElementById("texto-numero").innerHTML="hola";
 }


 function getNumber(n1) {
    d.getElementById("texto-numero").value=n1*n1;
 }


 function hola(h1,h2) {
     console.log(h1,h2);

 }

 class persona{

   constructor(nombre,edad){
      this.nombre=nombre;
      this.edad=edad;

   }

   saludar() {
      console.log(`hola ${this.nombre} tu edad es ${this.edad}`);
   }
 }

 const myperona = new persona("leonel","26");

 console.log(myperona.saludar());
   