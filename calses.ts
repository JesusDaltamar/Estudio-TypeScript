class Vehicle{
    brandName: string;
    constructor(b:string){
        this.brandName = b;
    }

    drive(){
        console.log("Conduciendo un vehiculo "+ this.brandName)
    }
}

const vehicle = new Vehicle("mazda");
//vehicle.drive();
//console.log(vehicle);

let motocicleta = {
    brandName:"Yamaha",
    drive: vehicle.drive
};
console.log(motocicleta.drive());