/*function sumar(val1:number ,val2: number) : number {
    return val1 + val2;
}*/
var sumar = function (val1, val2) {
    return val1 + val2;
};
var dividir = function (a, b) {
    return a / b;
};
function imprimir() {
    console.log(sumar(4, 5));
}
imprimir();
var throwError = function (message) {
    throw new Error(message);
    return ""; //nunca se va a retornar nada--tipo "FUNCION TIPO NEVER"
};
