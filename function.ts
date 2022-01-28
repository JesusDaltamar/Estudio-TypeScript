/*function sumar(val1:number ,val2: number) : number {
    return val1 + val2;
}

const throwError = (message:string) : never=>{
    throw new Error (message);
    return ""; //ESTA FUNCION NUNCA DEVULVE NADA (TIPO NEVER)
};*/
const sumar = (val1:number,val2:number):number=>{
    return val1+val2;
};

let sumar2: (a:number,b:number)=>number;
sumar2 = sumar;

console.log(sumar2(3,4));

const dividir = function(a:number,b:number):number{
    return a/b;
}

function imprimir(): void {
    console.log(sumar(4,5));
}


