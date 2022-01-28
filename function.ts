/*function sumar(val1:number ,val2: number) : number {
    return val1 + val2;
}*/

const sumar = (val1:number,val2:number):number=>{
    return val1+val2;
}

const dividir = function(a:number,b:number):number{
    return a/b;
}

function imprimir(): void {
    console.log(sumar(4,5));
}

imprimir();

const throwError = (message:string) : never=>{
    throw new Error (message);
    return ""; //ESTA FUNCION NUNCA DEVULVE NADA (TIPO NEVER)
};