/*function sumar(val1:number ,val2: number) : number {
    return val1 + val2;
}

const throwError = (message:string) : never=>{
    throw new Error (message);
    return ""; //ESTA FUNCION NUNCA DEVULVE NADA (TIPO NEVER)
};*/

function imprimir(a:number,b:number,mostrar:(value:number)=>void): void {
    let resultado = a + b;
    mostrar(resultado);
}

imprimir(2,3,(x)=> {console.log(x)} )


