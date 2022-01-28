/*function sumar(val1:number ,val2: number) : number {
    return val1 + val2;
}

const throwError = (message:string) : never=>{
    throw new Error (message);
    return ""; //ESTA FUNCION NUNCA DEVULVE NADA (TIPO NEVER)
};*/
function imprimir(a, b, mostrar) {
    var resultado = a + b;
    mostrar(resultado);
}
imprimir(2, 3, function (x) { console.log(x); });
