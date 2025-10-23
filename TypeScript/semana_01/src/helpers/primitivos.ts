// Primitivos en TypeScript 


// 1.- String 
let nombre: string = "Gonzalo";
let cp: string = "18007";
let mensaje: string = `Bienvenido D/Dña $(nombre) => cp: $(cp)`

function procesarTexto(texto:string):string{
    return texto.trim().toUpperCase();
}

console.log(procesarTexto(mensaje));

let saludo="Que tal todo"; //Declaracion con inferencia de Tipos
console.log(procesarTexto(saludo));

// 2.- Number

//calcularPrecioFinal(precio, impuesto, descuento)
function calcularPrecioFinal(precio: number, impuesto: number, descuento: number): number {
    return (precio * ( 1 + (impuesto /100) )*( 1 - (descuento /100) ));
}
console.log(calcularPrecioFinal(80,21,3))

// Cualquier tipo any (No usar salvo desesperacion)
// Funcion que verifique que lo que pase como parametro es un numero.
// No es infinito, !isNaN

function esNumero(valor:any):boolean{
    return typeof valor ==="number"&& isFinite(valor) && !isNaN(valor);
}
esNumero("as");

// Calcular el promedio de los elementos de un array de numeros 
function calcularPromedio(numeros:number[]):number{
    if(numeros.length===0){
        throw new Error("El array esta vacio");
    }
    const suma:number = numeros.reduce((acc,numero)=>acc+numero,0);
    return suma/numeros.length;
}

function calcularExtremos(numeros:number[]): {min:number,max:number}{
    if(numeros.length===0){
        throw new Error("El array esta vacio");
    }
    const min : number= Math.min(...numeros);
    const max : number= Math.max(...numeros);
    return {min,max};
}


// 3.- Booleanos 

//Comprobar si un email es correcto o no 
function esValidoEmail(email:string):boolean{
    // Exprexion Regular para verificar el email 
    // El "." y el " " hay que ponerle \ antes ej: \. \ 
    const emailRegex: RegExp= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);


}

esValidoEmail("aaa@aaa@.com")


//Interface tipo de dato generado por el usuario para una determinada situacion 

interface permisosUsuario{
    puedeleer: boolean;
    puedeEscribir: boolean;
    puedeBorrar: boolean;
}
// type que permite crear un tipo dde dato entre unos valores dados
type tipoUsuario="admin"|"invitado"|"usuario";

//Crear una funcion llamada obtenerPermisos que dependiendo de si el usuario es admin, 
//invitado o usuario cambie los permisos de la interface 

function obtenerPermisos(usuario:tipoUsuario):permisosUsuario{
    switch(usuario){
        case "invitado":
            return {puedeleer:true,puedeEscribir:false,puedeBorrar:false};
        case "usuario":
            return {puedeleer:true,puedeEscribir:true,puedeBorrar:false};
        case "admin":
            return {puedeleer:true,puedeEscribir:true,puedeBorrar:true};
        default:
            return {puedeleer:false,puedeEscribir:false,puedeBorrar:false};
    }
}
obtenerPermisos("admin");

// NULL UNDEFINED 
let posibleNombre: string| null="invitado";

// arrow function 

const duplicar= (numero:number):number=> {return numero*2;}


//Crear una funcion que le pase como parametro un array de objetos y me devuelva si el usuario
//es mayor o no de edad

const usuarios = [
    {nombre: "Mario", edad: 22},
    {nombre: "Candela", edad: 14},
    {nombre: "Harry", edad:20},
    {nombre: "Carolina", edad:10},
];
const mayorEdad = (usuarios: { nombre: string; edad: number; }[]) =>{
    return usuarios.filter(usuario => usuario.edad >=18);
}

// Funcion procesarNumeros que cree devuelva un array de 
// numeros solo positivos multiplicados por 2 y ordenados de mayor a menor 

function procesarNumeros(numeros: number[]): number[] {
    return numeros
        .filter(numero => numero > 0) 
        .map(numero => numero * 2)     
        .sort((a, b) => b - a);       
}

// Ejemplo de uso:
const numerosEntrada = [1, -2, 3, 0, -4, 5, 8];
const numerosProcesados = procesarNumeros(numerosEntrada);


// Ejercicio Basico: Teniendo una interfaz de cliente crea una funcion que
// genere un map con la siguiente estructura:
/*
    idUsuario :{
    id: number;
    nombre: string;
    email: string;
}
*/ 
interface Cliente {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
}

const lis8taClientes: Cliente[] = [
    {
        id: 1,
        nombre: "Juan Pérez",
        email: "juan.perez@example.com",
        telefono: "+34 600 123 456"
    },
    {
        id: 2,
        nombre: "María López",
        email: "maria.lopez@example.com",
        telefono: "+34 611 987 654"
    },
    {
        id: 3,
        nombre: "Carlos Sánchez",
        email: "carlos.sanchez@example.com",
        telefono: "+34 622 345 678"
    }
];


function generarMap(clientes: Cliente[]):Map<number,Cliente>{
    const map = new Map<number, Cliente>();
    clientes.forEach(cliente => {
        map.set(cliente.id, cliente);
    });
    return map;
}

//Calculadora simple: Crear una calculadora tipada que realice operaciones basicas, para ello 
//partimos de una interfaz llamada operacion formada por: tipo (sumar,restar,multiplicar y dividir)
// operando1 y operando2. Crear funcion llamada calculadora que le pasamos por parametro
// dos numeros y probarlo con 10 5 y 10 0
// Se podria ampliar a otras operaciones?
interface Operacion{
        operando1: number;
        operando2: number;
    }
    type Calculo= "sumar"|"restar"|"multiplicar"|"dividir"|"potencia";

function calculadora(tipo: Calculo, operacion: Operacion): number {
    const { operando1, operando2 } = operacion; 
    switch (tipo) {
        case "sumar":
            return operando1 + operando2;
        case "restar":
            return operando1 - operando2;
        case "multiplicar":
            return operando1 * operando2;
        case "dividir":
            if (operando2 === 0) {
                throw new Error("No se puede dividir entre 0");
            }
            return operando1 / operando2;
        case "potencia":
            return Math.pow(operando1, operando2);
        default:
            throw new Error("Operación no válida");
    }
}
const op1: Operacion = { operando1: 10, operando2: 5 };
const op2: Operacion = { operando1: 10, operando2: 0 };

console.log(calculadora("sumar", op1));         
console.log(calculadora("restar", op1));        
console.log(calculadora("multiplicar", op1));   
console.log(calculadora("dividir", op2));       
console.log(calculadora("potencia",op1));
//Ejercicio terminado