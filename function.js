/*function sumar(val1:number ,val2: number) : number {
    return val1 + val2;
}

const throwError = (message:string) : never=>{
    throw new Error (message);
    return ""; //ESTA FUNCION NUNCA DEVULVE NADA (TIPO NEVER)
};*/
var sumar = function (val1, val2) {
    return val1 + val2;
};
var sumar2;
sumar2 = sumar;
console.log(sumar2(3, 4));
var dividir = function (a, b) {
    return a / b;
};
function imprimir() {
    console.log(sumar(4, 5));
}
