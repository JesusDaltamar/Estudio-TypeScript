/*let vehiculo: string;
let cantidad: number;
let esAutomovil: boolean;

let persona: {
    nombre: string,
    edad: number,
    direccion: {
        calle: string,
        comuna: string
    },
    cursos : string[]
} = {
    nombre : "Rodrigo",
    edad: 34,
    direccion:{
        calle: "Quinta",
        comuna: "Las delicias"
    },
    cursos:["fluter","Patrones de diseño","SQL"]
};

let hobbies: string[] = ["Leer","Jugar","Estudiar","Tiempo en familia"];

for(const i of hobbies){
    console.log(i);
} 

type vehiculoType = [string,number,string]
let automovil: vehiculoType = ["mazda",2020,"rojo"];
let motocicleta: vehiculoType = ["yamaha",2021,"azul"];

automovil[1] = 2021;
console.log(automovil);*/

enum role {estudiante,profesor}
let persona = {
    nombre : "Rodrigo",
    edad: 34,
    direccion:{
        calle: "Quinta",
        comuna: "Las delicias"
    },
    cursos:["fluter","Patrones de diseño","SQL"],
    role: role.estudiante
};

console.log(persona);
